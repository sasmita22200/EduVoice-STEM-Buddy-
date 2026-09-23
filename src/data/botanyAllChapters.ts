import { TN_CLASS_11_BOTANY_CHAPTERS, BotanyChapter } from './class11BotanyCurriculum';
import { BOTANY_CHAPTERS_UNIT_3 } from './botanyChaptersUnit3';
import { BOTANY_CHAPTERS_UNIT_4 } from './botanyChaptersUnit4';
import { BOTANY_CHAPTERS_UNIT_5 } from './botanyChaptersUnit5';

// Complete, uncompromised 15 chapters of TN State Board Class 11 Botany (2026 Syllabus)
export const COMPLETE_CLASS_11_BOTANY_CURRICULUM: BotanyChapter[] = [
  ...TN_CLASS_11_BOTANY_CHAPTERS, // Chapters 1, 2, 3, 4, 5
  ...BOTANY_CHAPTERS_UNIT_3,       // Chapters 6, 7, 8
  ...BOTANY_CHAPTERS_UNIT_4,       // Chapters 9, 10
  ...BOTANY_CHAPTERS_UNIT_5        // Chapters 11, 12, 13, 14, 15
];

export const BOTANY_UNITS_METADATA = [
  {
    unitNumber: 1,
    titleEn: 'Unit 1: Diversity of Living World',
    titleTa: 'அலகு 1: உயிருலகின் பன்முகத்தன்மை',
    chapterNumbers: [1, 2],
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50 text-blue-800 border-blue-200'
  },
  {
    unitNumber: 2,
    titleEn: 'Unit 2: Plant Morphology and Taxonomy of Angiosperms',
    titleTa: 'அலகு 2: தாவர புற அமைப்பியல் மற்றும் வகைப்பாட்டியல்',
    chapterNumbers: [3, 4, 5],
    color: 'from-emerald-600 to-teal-600',
    bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  },
  {
    unitNumber: 3,
    titleEn: 'Unit 3: Cell Biology and Biomolecules',
    titleTa: 'அலகு 3: செல் உயிரியல் மற்றும் உயிர் மூலக்கூறுகள்',
    chapterNumbers: [6, 7, 8],
    color: 'from-indigo-600 to-purple-600',
    bgColor: 'bg-indigo-50 text-indigo-800 border-indigo-200'
  },
  {
    unitNumber: 4,
    titleEn: 'Unit 4: Plant Anatomy (Structural Organisation)',
    titleTa: 'அலகு 4: தாவர உள்ளமைப்பியல்',
    chapterNumbers: [9, 10],
    color: 'from-amber-600 to-orange-600',
    bgColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    unitNumber: 5,
    titleEn: 'Unit 5: Plant Physiology (Functional Organisation)',
    titleTa: 'அலகு 5: தாவர உடலியங்கியல்',
    chapterNumbers: [11, 12, 13, 14, 15],
    color: 'from-green-600 to-emerald-700',
    bgColor: 'bg-green-50 text-green-800 border-green-200'
  }
];

/**
 * Generates the clean Markdown table format requested by the user:
 * Chapter Name | Learning Content | Short Notes | Important Diagrams | AI Image Prompt | AI Visualization Prompt | Voice Narration | Video Duration
 */
export function generateBotanyMarkdownTable(lang: 'en' | 'ta' = 'en'): string {
  const isTa = lang === 'ta';
  
  let markdown = `# Tamil Nadu State Board Class 11 Biology – Botany (2026 Academic Syllabus)\n\n`;
  markdown += `### EduVoice / STEM Buddy — AI-Powered Educational Content Database\n\n`;
  markdown += `| Chapter Name | Learning Content | Short Notes | Important Diagrams | AI Image Prompt | AI Visualization Prompt | Voice Narration | Video Duration |\n`;
  markdown += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;

  COMPLETE_CLASS_11_BOTANY_CURRICULUM.forEach((ch) => {
    const chName = `**Ch ${ch.chapterNumber}: ${isTa ? ch.chapterNameTa : ch.chapterName}**<br>_${isTa ? ch.unitNameTa : ch.unitName}_`;
    
    // Learning content snippet
    const learningContent = `**Overview:** ${isTa ? ch.overviewTa : ch.overview}<br><br>**Core Topics:** ${ch.coreConcepts.slice(0, 2).join(' ')}<br><br>**Key Definitions:** ${ch.definitions.map(d => `${isTa ? d.termTa : d.term}: ${isTa ? d.definitionTa : d.definition}`).join('; ')}`;
    
    // Short notes
    const shortNotes = ch.shortNotes.map((sn, i) => `${i + 1}. ${sn}`).join('<br>') + `<br><br>**5 Key Takeaways:**<br>` + ch.fiveKeyTakeaways.map(k => `• ${k}`).join('<br>');
    
    // Diagrams
    const diagrams = ch.diagrams.map(d => `**${isTa ? d.nameTa : d.name}**<br>Labels: ${d.labels.join(', ')}<br>Importance: ${d.examImportance}`).join('<br><br>');
    
    // AI Image Prompt
    const aiImagePrompt = ch.diagrams.map(d => `*${d.name}:* "${d.aiImagePrompt}"`).join('<br><br>');
    
    // AI Visualization Prompt
    const aiViz = `**Format:** ${ch.aiVisualization.format}<br>**Scene 1:** ${ch.aiVisualization.sceneBreakdown.scene1}<br>**Scene 2:** ${ch.aiVisualization.sceneBreakdown.scene2}<br>**Scene 3:** ${ch.aiVisualization.sceneBreakdown.scene3}<br>**Scene 4:** ${ch.aiVisualization.sceneBreakdown.scene4}<br>**Style:** ${ch.aiVisualization.visualStyle}`;
    
    // Voice Narration
    const narration = `**${isTa ? ch.voiceNarration.audioTitleTa : ch.voiceNarration.audioTitle}**<br><br>"${isTa ? ch.voiceNarration.scriptTa : ch.voiceNarration.scriptEn}"<br><br>*(Tone: ${ch.voiceNarration.teacherTone})*`;
    
    // Duration
    const duration = ch.aiVisualization.duration;

    // Clean newlines for table cells
    const clean = (str: string) => str.replace(/\|/g, '\\|').replace(/\n/g, '<br>');

    markdown += `| ${clean(chName)} | ${clean(learningContent)} | ${clean(shortNotes)} | ${clean(diagrams)} | ${clean(aiImagePrompt)} | ${clean(aiViz)} | ${clean(narration)} | ${duration} |\n`;
  });

  return markdown;
}
