// Class 12 Physics Volume 2 Curriculum Types & Unit Metadata (2026 TN State Board Syllabus)
import { 
  PhysicsUnitMetadata,
  PhysicsChapter 
} from './class12PhysicsCurriculum';

export const CLASS_12_PHYSICS_VOL2_UNITS_METADATA: PhysicsUnitMetadata[] = [
  {
    unitNumber: 6,
    unitName: 'Optics',
    unitNameTa: 'ஒளியியல்',
    themeColor: 'from-amber-500 to-yellow-600',
    description: 'Ray Optics (Reflection, Refraction, TIR, Lens Maker’s formula, Prism, Optical Instruments) & Wave Optics (Huygens’ principle, YDSE, Diffraction, Polarisation, Brewster’s law).',
    chaptersCount: 1,
    chapterNumbers: [6]
  },
  {
    unitNumber: 7,
    unitName: 'Dual Nature of Radiation and Matter',
    unitNameTa: 'கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு',
    themeColor: 'from-cyan-600 to-blue-500',
    description: 'Photoelectric effect, Hertz-Hallwachs-Lenard experiments, Einstein’s photoelectric equation, de Broglie matter waves, and Davisson-Germer electron diffraction.',
    chaptersCount: 1,
    chapterNumbers: [7]
  },
  {
    unitNumber: 8,
    unitName: 'Atomic and Nuclear Physics',
    unitNameTa: 'அணு மற்றும் அணுக்கரு இயற்பியல்',
    themeColor: 'from-purple-600 to-indigo-500',
    description: 'J.J. Thomson e/m, Millikan oil drop, Rutherford & Bohr atom models, Hydrogen spectral series, Nuclear binding energy curve, Radioactivity, Fission & Fusion.',
    chaptersCount: 1,
    chapterNumbers: [8]
  },
  {
    unitNumber: 9,
    unitName: 'Semiconductor Electronics',
    unitNameTa: 'குறைக்கடத்தி எலக்ட்ரானியல்',
    themeColor: 'from-emerald-600 to-teal-500',
    description: 'Energy bands, intrinsic/extrinsic semiconductors, p-n junction diode, rectifiers, Zener regulator, LEDs, solar cells, BJT amplifier, oscillators, logic gates & De Morgan’s laws.',
    chaptersCount: 1,
    chapterNumbers: [9]
  },
  {
    unitNumber: 10,
    unitName: 'Communication Systems',
    unitNameTa: 'தகவல் தொடர்பு அமைப்புகள்',
    themeColor: 'from-blue-600 to-sky-500',
    description: 'Elements of communication, Modulation (AM, FM, PM), EM wave propagation (Ground, Sky, Space waves), satellite communication, optical fibres & RADAR.',
    chaptersCount: 1,
    chapterNumbers: [10]
  },
  {
    unitNumber: 11,
    unitName: 'Recent Developments in Physics',
    unitNameTa: 'இயற்பியலின் அண்மைக்கால வளர்ச்சிகள்',
    themeColor: 'from-rose-500 to-pink-600',
    description: 'Nanotechnology & nanomaterials, Robotics & AI integration, Medical physics (X-rays, MRI, CT, PET, LASIK), Standard model of particle physics & Gravitational waves.',
    chaptersCount: 1,
    chapterNumbers: [11]
  }
];

import { CHAPTER_6_OPTICS } from './physicsVol2Unit6Optics';
import { CHAPTER_7_DUAL_NATURE } from './physicsVol2Unit7DualNature';
import { CHAPTER_8_ATOMIC_AND_NUCLEAR } from './physicsVol2Unit8AtomicNuclear';
import { CHAPTER_9_SEMICONDUCTOR_ELECTRONICS } from './physicsVol2Unit9Semiconductors';
import { CHAPTER_10_COMMUNICATION_SYSTEMS } from './physicsVol2Unit10Communication';
import { CHAPTER_11_RECENT_DEVELOPMENTS } from './physicsVol2Unit11RecentDev';

export const CLASS_12_PHYSICS_VOLUME_2_CHAPTERS: PhysicsChapter[] = [
  CHAPTER_6_OPTICS,
  CHAPTER_7_DUAL_NATURE,
  CHAPTER_8_ATOMIC_AND_NUCLEAR,
  CHAPTER_9_SEMICONDUCTOR_ELECTRONICS,
  CHAPTER_10_COMMUNICATION_SYSTEMS,
  CHAPTER_11_RECENT_DEVELOPMENTS
];
