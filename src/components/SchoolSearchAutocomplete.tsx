import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  School, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  PlusCircle, 
  MapPin, 
  X, 
  ChevronDown, 
  Building2, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  RotateCcw
} from 'lucide-react';
import { Language, SchoolRecord } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TN_SCHOOLS_DATABASE } from '../data/tnDistricts';

interface SchoolSearchAutocompleteProps {
  schoolName?: string;
  selectedSchoolName?: string;
  schoolAddress?: string;
  selectedSchoolAddress?: string;
  isManualSchool?: boolean;
  selectedDistrict?: string;
  error?: string;
  errorMessage?: string;
  addressError?: string;
  addressErrorMessage?: string;
  lang?: Language;
  onSchoolSelect?: (school: SchoolRecord) => void;
  onSelectSchool?: (school: SchoolRecord) => void;
  onManualSchoolChange: (name: string, address: string) => void;
  onToggleManual: (isManual: boolean) => void;
}

export const SchoolSearchAutocomplete: React.FC<SchoolSearchAutocompleteProps> = ({
  schoolName,
  selectedSchoolName,
  schoolAddress,
  selectedSchoolAddress,
  isManualSchool = false,
  selectedDistrict = 'Chennai',
  error,
  errorMessage,
  addressError,
  addressErrorMessage,
  lang = 'ta',
  onSchoolSelect,
  onSelectSchool,
  onManualSchoolChange,
  onToggleManual
}) => {
  const currentSchoolName = selectedSchoolName !== undefined ? selectedSchoolName : (schoolName || '');
  const currentSchoolAddress = selectedSchoolAddress !== undefined ? selectedSchoolAddress : (schoolAddress || '');
  const currentError = errorMessage !== undefined ? errorMessage : error;
  const currentAddressError = addressErrorMessage !== undefined ? addressErrorMessage : addressError;
  const selectCallback = onSelectSchool || onSchoolSelect || (() => {});

  const safeLang: Language = lang === 'en' ? 'en' : 'ta';
  const t = TRANSLATIONS[safeLang] || TRANSLATIONS.ta;
  const isTa = safeLang === 'ta';

  const [query, setQuery] = useState(currentSchoolName);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSchools, setFilteredSchools] = useState<SchoolRecord[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<SchoolRecord | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize when parent updates schoolName
  useEffect(() => {
    if (!isManualSchool && currentSchoolName) {
      const match = TN_SCHOOLS_DATABASE.find(s => s.name === currentSchoolName);
      if (match) {
        setSelectedSchool(match);
        setQuery(match.name);
      } else {
        setQuery(currentSchoolName);
      }
    } else if (!currentSchoolName) {
      setSelectedSchool(null);
      setQuery('');
    }
  }, [currentSchoolName, isManualSchool]);

  // Filter schools based on query and district
  useEffect(() => {
    if (!query.trim()) {
      // If no search query, show top schools prioritized by selected district
      const byDistrict = TN_SCHOOLS_DATABASE.filter(s => 
        s.district.toLowerCase() === selectedDistrict.toLowerCase()
      );
      const others = TN_SCHOOLS_DATABASE.filter(s => 
        s.district.toLowerCase() !== selectedDistrict.toLowerCase()
      );
      setFilteredSchools([...byDistrict, ...others].slice(0, 7));
      return;
    }

    const q = query.toLowerCase().trim();
    const matches = TN_SCHOOLS_DATABASE.filter(school => {
      const nameMatch = school.name.toLowerCase().includes(q);
      const districtMatch = school.district.toLowerCase().includes(q);
      const cityMatch = school.city.toLowerCase().includes(q);
      const typeMatch = school.type.toLowerCase().includes(q);
      return nameMatch || districtMatch || cityMatch || typeMatch;
    });

    setFilteredSchools(matches.slice(0, 10));
  }, [query, selectedDistrict]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (school: SchoolRecord) => {
    setSelectedSchool(school);
    setQuery(school.name);
    setIsOpen(false);
    selectCallback(school);
  };

  const handleClearSelected = () => {
    setSelectedSchool(null);
    setQuery('');
    onManualSchoolChange('', '');
    onToggleManual(false);
  };

  const handleSwitchToManual = () => {
    setSelectedSchool(null);
    onToggleManual(true);
    onManualSchoolChange(query || '', currentSchoolAddress || '');
    setIsOpen(false);
  };

  const handleSwitchToSearch = () => {
    onToggleManual(false);
    setQuery('');
    onManualSchoolChange('', '');
  };

  return (
    <div className="space-y-2 text-left" ref={containerRef}>
      {/* Label and Mode Indicator */}
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
          <School className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.schoolAutocomplete.label}</span>
          <span className="text-red-500 font-bold">*</span>
        </label>

        {isManualSchool ? (
          <button
            type="button"
            onClick={handleSwitchToSearch}
            className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.schoolAutocomplete.switchToSearch}</span>
          </button>
        ) : (
          <span className="text-[11px] text-slate-500 font-medium">
            {isTa ? 'தானியங்கி தேடல்' : 'Autocomplete Search'}
          </span>
        )}
      </div>

      {/* MODE 1: Database Search & Autocomplete */}
      {!isManualSchool && (
        <div className="relative">
          {/* Selected School Pill Card */}
          {selectedSchool ? (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-teal-500/10 border border-emerald-300/80 shadow-xs flex items-start justify-between gap-3 animate-fadeIn">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {selectedSchool.name}
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {t.schoolAutocomplete.verifiedBadge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{selectedSchool.city || selectedSchool.district} • {selectedSchool.type}</span>
                  </p>
                  {selectedSchool.address && (
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {selectedSchool.address}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleClearSelected}
                className="px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:text-red-600 bg-white/80 hover:bg-white rounded-lg border border-slate-200 transition-all cursor-pointer flex-shrink-0 shadow-2xs"
              >
                {t.schoolAutocomplete.changeSchool}
              </button>
            </div>
          ) : (
            <>
              {/* Search Box Input Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4 text-blue-600" />
                </div>

                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder={t.schoolAutocomplete.placeholder}
                  className={`
                    w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 outline-none font-medium
                    placeholder:text-slate-400 placeholder:text-xs
                    ${
                      currentError
                        ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50 bg-red-50/30'
                        : 'border-white/80 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50 focus:bg-white/90 shadow-2xs'
                    }
                  `}
                />

                {query ? (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setIsOpen(true);
                    }}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Autocomplete Dropdown List */}
              {isOpen && (
                <div className="absolute z-40 left-0 right-0 mt-1.5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden max-h-64 overflow-y-auto animate-fadeIn divide-y divide-slate-100">
                  {/* Database School Matches */}
                  {filteredSchools.length > 0 ? (
                    filteredSchools.map((school) => (
                      <button
                        key={school.id}
                        type="button"
                        onClick={() => handleSelect(school)}
                        className="w-full p-3 text-left hover:bg-blue-50/80 transition-colors flex items-start gap-2.5 cursor-pointer group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors mt-0.5">
                          <School className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 truncate">
                              {school.name}
                            </h4>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-100 flex-shrink-0">
                              {school.type.includes('Matric') ? 'Matric' : 'Govt'}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                            <MapPin className="w-2.5 h-2.5 text-slate-400 flex-shrink-0" />
                            <span>{school.city || school.district}</span>
                            <span>•</span>
                            <span className="text-[10px] text-slate-400">{school.type}</span>
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-center text-xs text-slate-500">
                      <p className="font-semibold text-slate-700">{t.schoolAutocomplete.noMatchFound}</p>
                    </div>
                  )}

                  {/* Option: Can't find your school? Add it manually */}
                  <div className="p-2.5 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 border-t border-blue-100">
                    <button
                      type="button"
                      onClick={handleSwitchToManual}
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs border border-blue-200 shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
                    >
                      <PlusCircle className="w-4 h-4 text-blue-600 group-hover:text-white" />
                      <span>{t.schoolAutocomplete.cantFindPrompt}</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {currentError && !selectedSchool && (
            <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1 animate-fadeIn">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{currentError}</span>
            </p>
          )}
        </div>
      )}

      {/* MODE 2: Expandable Card for Manual School Entry */}
      {isManualSchool && (
        <div className="rounded-2xl bg-white/90 backdrop-blur-xl border border-blue-200/90 p-4 shadow-md space-y-3.5 animate-fadeIn">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  {t.schoolAutocomplete.manualCardTitle}
                </h4>
                <p className="text-[10px] text-slate-500">
                  {isTa ? 'உங்கள் பள்ளியை நேரடியாக பதிவு செய்கிறீர்கள்' : 'Directly entering new school details'}
                </p>
              </div>
            </div>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              {t.schoolAutocomplete.pendingBadge}
            </span>
          </div>

          {/* Manual Field 1: School Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.schoolAutocomplete.manualSchoolNameLabel} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <School className="w-4 h-4 text-blue-600" />
              </div>
              <input
                type="text"
                value={currentSchoolName}
                onChange={(e) => onManualSchoolChange(e.target.value, currentSchoolAddress)}
                placeholder={t.schoolAutocomplete.manualSchoolNamePlaceholder}
                className={`
                  w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 bg-white rounded-xl border transition-all outline-none font-medium
                  ${currentError ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'}
                `}
                required
              />
            </div>
            {currentError && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{currentError}</span>
              </p>
            )}
          </div>

          {/* Manual Field 2: Complete School Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.schoolAutocomplete.manualAddressLabel} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <textarea
                rows={2}
                value={currentSchoolAddress}
                onChange={(e) => onManualSchoolChange(currentSchoolName, e.target.value)}
                placeholder={t.schoolAutocomplete.manualAddressPlaceholder}
                className={`
                  w-full pl-10 pr-4 py-2.5 text-xs text-slate-900 bg-white rounded-xl border transition-all outline-none font-medium resize-none
                  ${currentAddressError ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'}
                `}
                required
              />
            </div>
            {currentAddressError && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{currentAddressError}</span>
              </p>
            )}
          </div>

          {/* Required Blue Information Card */}
          <div className="p-3 bg-blue-50/90 rounded-xl border border-blue-200 flex items-start gap-2.5 text-blue-900 shadow-2xs">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-blue-900 leading-relaxed font-medium">
              {t.schoolAutocomplete.infoCardText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
