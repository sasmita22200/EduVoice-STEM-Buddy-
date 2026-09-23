import { Chapter, NoteItem, SummaryItem, ChapterQuiz, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Authentic Tamil Nadu Samacheer Kalvi Class 11 English (Units 1–6 / All 18 Lessons)
 * Complete Notes, Summaries, Board Question Banks, Interactive Diagrams and Video Explainers.
 */

export const CLASS_11_ENGLISH_CHAPTERS: Chapter[] = [
  {
    id: 'c11_eng_u1_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 1,
    unitNameEn: 'Unit 1',
    unitNameTa: 'அலகு 1',
    chapterNumber: 1,
    titleEn: "Prose: The Portrait of a Lady (Khushwant Singh)",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u1_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 1,
    unitNameEn: 'Unit 1',
    unitNameTa: 'அலகு 1',
    chapterNumber: 2,
    titleEn: "Poem: Once Upon a Time (Gabriel Okara)",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u1_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 1,
    unitNameEn: 'Unit 1',
    unitNameTa: 'அலகு 1',
    chapterNumber: 3,
    titleEn: "Supplementary: After Twenty Years (O. Henry)",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u2_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 2,
    unitNameEn: 'Unit 2',
    unitNameTa: 'அலகு 2',
    chapterNumber: 4,
    titleEn: "Prose: The Queen of Boxing (M.C. Mary Kom)",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u2_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 2,
    unitNameEn: 'Unit 2',
    unitNameTa: 'அலகு 2',
    chapterNumber: 5,
    titleEn: "Poem: Confessions of a Born Spectator (Ogden Nash)",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u2_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 2,
    unitNameEn: 'Unit 2',
    unitNameTa: 'அலகு 2',
    chapterNumber: 6,
    titleEn: "Supplementary: A Shot in the Dark (Saki - H.H. Munro)",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u3_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 3,
    unitNameEn: 'Unit 3',
    unitNameTa: 'அலகு 3',
    chapterNumber: 7,
    titleEn: "Prose: Forgetting (Robert Lynd)",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u3_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 3,
    unitNameEn: 'Unit 3',
    unitNameTa: 'அலகு 3',
    chapterNumber: 8,
    titleEn: "Poem: Lines Written in Early Spring (William Wordsworth)",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u3_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 3,
    unitNameEn: 'Unit 3',
    unitNameTa: 'அலகு 3',
    chapterNumber: 9,
    titleEn: "Supplementary: The First Patient - Play (C.V. Burgess)",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u4_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 4,
    unitNameEn: 'Unit 4',
    unitNameTa: 'அலகு 4',
    chapterNumber: 10,
    titleEn: "Prose: Tight Corners (E.V. Lucas)",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u4_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 4,
    unitNameEn: 'Unit 4',
    unitNameTa: 'அலகு 4',
    chapterNumber: 11,
    titleEn: "Poem: Macavity - The Mystery Cat (T.S. Eliot)",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u4_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 4,
    unitNameEn: 'Unit 4',
    unitNameTa: 'அலகு 4',
    chapterNumber: 12,
    titleEn: "Supplementary: With the Photographer (Stephen Leacock)",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u5_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 5,
    unitNameEn: 'Unit 5',
    unitNameTa: 'அலகு 5',
    chapterNumber: 13,
    titleEn: "Prose: The Convocation Address (Dr. Arignar Anna)",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u5_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 5,
    unitNameEn: 'Unit 5',
    unitNameTa: 'அலகு 5',
    chapterNumber: 14,
    titleEn: "Poem: Everest is Not the Only Peak (Kulothungan)",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u5_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 5,
    unitNameEn: 'Unit 5',
    unitNameTa: 'அலகு 5',
    chapterNumber: 15,
    titleEn: "Supplementary: The Singing Lesson (Katherine Mansfield)",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u6_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 6,
    unitNameEn: 'Unit 6',
    unitNameTa: 'அலகு 6',
    chapterNumber: 16,
    titleEn: "Prose: The Accidental Tourist (Bill Bryson)",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u6_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 6,
    unitNameEn: 'Unit 6',
    unitNameTa: 'அலகு 6',
    chapterNumber: 17,
    titleEn: "Poem: The Hollow Crown (William Shakespeare)",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eng_u6_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    unitNumber: 6,
    unitNameEn: 'Unit 6',
    unitNameTa: 'அலகு 6',
    chapterNumber: 18,
    titleEn: "Supplementary: The Never-Never Nest - Play (Cedric Mount)",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
];

export const CLASS_11_ENGLISH_NOTES: Record<string, NoteItem> = {
  c11_eng_u1_p1: {
    id: 'note_c11_eng_u1_p1',
    chapterId: 'c11_eng_u1_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Prose: The Portrait of a Lady (Khushwant Singh)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Prose: The Portrait of a Lady (Khushwant Singh)\n\n#### 1. Thematic Overview\nGenerational Bond: Khushwant Singh & his Devout Grandmother.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Village Childhood & Daily Routine with Street Dogs\n- **Conflict & Development:** City Life: Music, Science & Feeding Sparrows\n- **Resolution & Philosophical Takeaway:** Her Serene Death: Sparrows Mourning in Silence\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Village Childhood & Daily Routine with Street Dogs\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** City Life: Music, Science & Feeding Sparrows\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Her Serene Death: Sparrows Mourning in Silence\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: City Life: Music, Science & Feeding Sparrows", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: City Life: Music, Science & Feeding Sparrows \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u1_p2: {
    id: 'note_c11_eng_u1_p2',
    chapterId: 'c11_eng_u1_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Poem: Once Upon a Time (Gabriel Okara)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Poem: Once Upon a Time (Gabriel Okara)\n\n#### 1. Thematic Overview\nHypocrisy of Modern Society vs Nostalgic Childhood Innocence.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Laughing with Hearts vs Laughing with Teeth and Eyes\n- **Conflict & Development:** Wearing Faces like Dresses: Homeface, Officeface, Cocktailface\n- **Resolution & Philosophical Takeaway:** A Father's Plea to his Son: Teach Me to Smile Genuine Again\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Laughing with Hearts vs Laughing with Teeth and Eyes\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Wearing Faces like Dresses: Homeface, Officeface, Cocktailface\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** A Father's Plea to his Son: Teach Me to Smile Genuine Again\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Wearing Faces like Dresses: Homeface, Officeface, Cocktailface", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Wearing Faces like Dresses: Homeface, Officeface, Cocktailface \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u1_s1: {
    id: 'note_c11_eng_u1_s1',
    chapterId: 'c11_eng_u1_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Supplementary: After Twenty Years (O. Henry)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Supplementary: After Twenty Years (O. Henry)\n\n#### 1. Thematic Overview\nAppointment at 'Big Joe' Brady's: Friendship vs Police Duty.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM\n- **Conflict & Development:** Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow\n- **Resolution & Philosophical Takeaway:** The Plainclothesman Arrest & Jimmy's Heartbreaking Note\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** The Plainclothesman Arrest & Jimmy's Heartbreaking Note\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u2_p1: {
    id: 'note_c11_eng_u2_p1',
    chapterId: 'c11_eng_u2_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Prose: The Queen of Boxing (M.C. Mary Kom)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Prose: The Queen of Boxing (M.C. Mary Kom)\n\n#### 1. Thematic Overview\nMary Kom's Relentless Struggle from Rural Manipur to World Boxing.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Financial Hardships & Father's Initial Apprehension\n- **Conflict & Development:** First World Championship in Pennsylvania (Silver Medal)\n- **Resolution & Philosophical Takeaway:** Hat-trick World Titles & The Crown of 'Magnificent Mary'\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Financial Hardships & Father's Initial Apprehension\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** First World Championship in Pennsylvania (Silver Medal)\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Hat-trick World Titles & The Crown of 'Magnificent Mary'\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: First World Championship in Pennsylvania (Silver Medal)", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: First World Championship in Pennsylvania (Silver Medal) \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u2_p2: {
    id: 'note_c11_eng_u2_p2',
    chapterId: 'c11_eng_u2_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Poem: Confessions of a Born Spectator (Ogden Nash)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Poem: Confessions of a Born Spectator (Ogden Nash)\n\n#### 1. Thematic Overview\nHumorous Defense of Being an Enthusiastic Spectator.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Admiration for Athletes Knocking Broken Ribs & Cracked Spines\n- **Conflict & Development:** Heroic Athletes Pounding Each Other for Fleeting Glory\n- **Resolution & Philosophical Takeaway:** Contentment Drinking to Athletes from the Grandstand\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Admiration for Athletes Knocking Broken Ribs & Cracked Spines\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Heroic Athletes Pounding Each Other for Fleeting Glory\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Contentment Drinking to Athletes from the Grandstand\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Heroic Athletes Pounding Each Other for Fleeting Glory", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Heroic Athletes Pounding Each Other for Fleeting Glory \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u2_s1: {
    id: 'note_c11_eng_u2_s1',
    chapterId: 'c11_eng_u2_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Supplementary: A Shot in the Dark (Saki - H.H. Munro)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Supplementary: A Shot in the Dark (Saki - H.H. Munro)\n\n#### 1. Thematic Overview\nPhilip Sletherby's Train Journey & Misguided Cleverness.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Train Journey to Chalkshire & Aspiring for Parliament Seat\n- **Conflict & Development:** Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle\n- **Resolution & Philosophical Takeaway:** Sletherby's Self-Satisfaction Shattered by KC's Revelation\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Train Journey to Chalkshire & Aspiring for Parliament Seat\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Sletherby's Self-Satisfaction Shattered by KC's Revelation\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u3_p1: {
    id: 'note_c11_eng_u3_p1',
    chapterId: 'c11_eng_u3_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Prose: Forgetting (Robert Lynd)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Prose: Forgetting (Robert Lynd)\n\n#### 1. Thematic Overview\nThe Psychology & Everyday Paradox of Human Memory.\n\n#### 2. Key Narrative Phases\n- **Exposition:** List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)\n- **Conflict & Development:** Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness\n- **Resolution & Philosophical Takeaway:** Absent-Minded Genius: Philosophers, Poets and Statesmen\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Absent-Minded Genius: Philosophers, Poets and Statesmen\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u3_p2: {
    id: 'note_c11_eng_u3_p2',
    chapterId: 'c11_eng_u3_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Poem: Lines Written in Early Spring (William Wordsworth)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Poem: Lines Written in Early Spring (William Wordsworth)\n\n#### 1. Thematic Overview\nNature's Blissful Harmony vs What Man Has Made of Man.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony\n- **Conflict & Development:** Birds Hopping in Inexpressible Pleasure & Budding Twigs\n- **Resolution & Philosophical Takeaway:** Wordsworth's Melancholy: Human Greed, War and Discord\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Birds Hopping in Inexpressible Pleasure & Budding Twigs\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Wordsworth's Melancholy: Human Greed, War and Discord\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Birds Hopping in Inexpressible Pleasure & Budding Twigs", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Birds Hopping in Inexpressible Pleasure & Budding Twigs \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u3_s1: {
    id: 'note_c11_eng_u3_s1',
    chapterId: 'c11_eng_u3_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Supplementary: The First Patient - Play (C.V. Burgess)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Supplementary: The First Patient - Play (C.V. Burgess)\n\n#### 1. Thematic Overview\nDentist Waiting Room Panic & The Hammer-Saw Misunderstanding.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Anxious Patients Waiting with Aching Teeth in Surgery Lobby\n- **Conflict & Development:** Sound of Hammer, Screwdriver and Hacksaw inside Operation Room\n- **Resolution & Philosophical Takeaway:** The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Anxious Patients Waiting with Aching Teeth in Surgery Lobby\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Sound of Hammer, Screwdriver and Hacksaw inside Operation Room\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Sound of Hammer, Screwdriver and Hacksaw inside Operation Room", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Sound of Hammer, Screwdriver and Hacksaw inside Operation Room \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u4_p1: {
    id: 'note_c11_eng_u4_p1',
    chapterId: 'c11_eng_u4_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Prose: Tight Corners (E.V. Lucas)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Prose: Tight Corners (E.V. Lucas)\n\n#### 1. Thematic Overview\nChristie's Auction House Blunder & Fortuitous Escape.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Accompanying a Friend to Famous Christie's Art Auction\n- **Conflict & Development:** Bidding 4050 Guineas for a Daubigny without a Penny in Bank\n- **Resolution & Philosophical Takeaway:** The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Accompanying a Friend to Famous Christie's Art Auction\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Bidding 4050 Guineas for a Daubigny without a Penny in Bank\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Bidding 4050 Guineas for a Daubigny without a Penny in Bank", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Bidding 4050 Guineas for a Daubigny without a Penny in Bank \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u4_p2: {
    id: 'note_c11_eng_u4_p2',
    chapterId: 'c11_eng_u4_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Poem: Macavity - The Mystery Cat (T.S. Eliot)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Poem: Macavity - The Mystery Cat (T.S. Eliot)\n\n#### 1. Thematic Overview\nThe Mastermind Criminal 'Napoleon of Crime' Defying Gravity.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Scotland Yard Despair & Flying Squad Inability to Catch Him\n- **Conflict & Development:** Defying Law of Gravity: Floating in Mid-Air without Trace\n- **Resolution & Philosophical Takeaway:** Macavity is not there! The Facetious Mastermind of Feline Crime\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Scotland Yard Despair & Flying Squad Inability to Catch Him\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Defying Law of Gravity: Floating in Mid-Air without Trace\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Macavity is not there! The Facetious Mastermind of Feline Crime\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Defying Law of Gravity: Floating in Mid-Air without Trace", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Defying Law of Gravity: Floating in Mid-Air without Trace \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u4_s1: {
    id: 'note_c11_eng_u4_s1',
    chapterId: 'c11_eng_u4_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Supplementary: With the Photographer (Stephen Leacock)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Supplementary: With the Photographer (Stephen Leacock)\n\n#### 1. Thematic Overview\nHumorous Satire on Unsympathetic Portrait Photography.\n\n#### 2. Key Narrative Phases\n- **Exposition:** The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth\n- **Conflict & Development:** Machine Processing: Touching up Eyebrows, Replacing Mouth\n- **Resolution & Philosophical Takeaway:** Narrator Tearing Proof: Demanding his Real Human Face\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Machine Processing: Touching up Eyebrows, Replacing Mouth\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Narrator Tearing Proof: Demanding his Real Human Face\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Machine Processing: Touching up Eyebrows, Replacing Mouth", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Machine Processing: Touching up Eyebrows, Replacing Mouth \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u5_p1: {
    id: 'note_c11_eng_u5_p1',
    chapterId: 'c11_eng_u5_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Prose: The Convocation Address (Dr. Arignar Anna)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Prose: The Convocation Address (Dr. Arignar Anna)\n\n#### 1. Thematic Overview\nAnnamalai University Convocation (1967): Social Responsibility of Graduates.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Universities as Sanctuaries of Independent Thought & Character\n- **Conflict & Development:** Graduates Indebted to Working Class Taxpayers Who Funded College\n- **Resolution & Philosophical Takeaway:** Service to the Common Man, Democracy and Enlightened Patriotism\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Universities as Sanctuaries of Independent Thought & Character\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Graduates Indebted to Working Class Taxpayers Who Funded College\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Service to the Common Man, Democracy and Enlightened Patriotism\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Graduates Indebted to Working Class Taxpayers Who Funded College", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Graduates Indebted to Working Class Taxpayers Who Funded College \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u5_p2: {
    id: 'note_c11_eng_u5_p2',
    chapterId: 'c11_eng_u5_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Poem: Everest is Not the Only Peak (Kulothungan)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Poem: Everest is Not the Only Peak (Kulothungan)\n\n#### 1. Thematic Overview\nVirtue of Humble Duty, Quiet Integrity and Personal Excellence.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Not Everyone Climbs Everest or Gains World Fame\n- **Conflict & Development:** Honour Lies in Doing Small Duties with Sincerity & Pride\n- **Resolution & Philosophical Takeaway:** A Heart Without Deceit and a Hand Free of Greed\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Not Everyone Climbs Everest or Gains World Fame\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Honour Lies in Doing Small Duties with Sincerity & Pride\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** A Heart Without Deceit and a Hand Free of Greed\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Honour Lies in Doing Small Duties with Sincerity & Pride", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Honour Lies in Doing Small Duties with Sincerity & Pride \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u5_s1: {
    id: 'note_c11_eng_u5_s1',
    chapterId: 'c11_eng_u5_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Supplementary: The Singing Lesson (Katherine Mansfield)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Supplementary: The Singing Lesson (Katherine Mansfield)\n\n#### 1. Thematic Overview\nMiss Meadows' Fluctuating Emotions: Love, Despair and Joy.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Heartbroken Miss Meadows Receiving Basil's Rejection Letter\n- **Conflict & Development:** Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge\n- **Resolution & Philosophical Takeaway:** The Telegram Arrives: Apology and Restoration of Vibrant Song\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Heartbroken Miss Meadows Receiving Basil's Rejection Letter\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** The Telegram Arrives: Apology and Restoration of Vibrant Song\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u6_p1: {
    id: 'note_c11_eng_u6_p1',
    chapterId: 'c11_eng_u6_p1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Prose: The Accidental Tourist (Bill Bryson)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Prose: The Accidental Tourist (Bill Bryson)\n\n#### 1. Thematic Overview\nHilarious Mishaps of a Chronically Clumsy Frequent Flyer.\n\n#### 2. Key Narrative Phases\n- **Exposition:** The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere\n- **Conflict & Development:** Sucking Ink from a Pen while Chatting with an Attractive Woman\n- **Resolution & Philosophical Takeaway:** Losing Frequent Flyer Miles Due to Perpetual Identity Confusion\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Sucking Ink from a Pen while Chatting with an Attractive Woman\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Losing Frequent Flyer Miles Due to Perpetual Identity Confusion\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Sucking Ink from a Pen while Chatting with an Attractive Woman", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Sucking Ink from a Pen while Chatting with an Attractive Woman \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u6_p2: {
    id: 'note_c11_eng_u6_p2',
    chapterId: 'c11_eng_u6_p2',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Poem: The Hollow Crown (William Shakespeare)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Poem: The Hollow Crown (William Shakespeare)\n\n#### 1. Thematic Overview\nMortality of Kings & The Mocking Antics of Death (Richard II).\n\n#### 2. Key Narrative Phases\n- **Exposition:** King Richard II Despair: Sitting upon the Ground to Tell Sad Stories\n- **Conflict & Development:** Death Keeping Court within the Hollow Crown of Kings\n- **Resolution & Philosophical Takeaway:** Scoffing his State and Grinning at his Pomps: We Are All Human\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** King Richard II Despair: Sitting upon the Ground to Tell Sad Stories\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Death Keeping Court within the Hollow Crown of Kings\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Scoffing his State and Grinning at his Pomps: We Are All Human\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Death Keeping Court within the Hollow Crown of Kings", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Death Keeping Court within the Hollow Crown of Kings \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
  c11_eng_u6_s1: {
    id: 'note_c11_eng_u6_s1',
    chapterId: 'c11_eng_u6_s1',
    classLevel: 11,
    subjectId: 'c11_english',
    titleEn: "Board Revision Notes: Supplementary: The Never-Never Nest - Play (Cedric Mount)",
    titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd)",
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'State Board English Curriculum Panel',
    reviewedByRole: 'Higher Secondary Senior English Lecturer',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '2.0.0',
    changeNote: 'Complete bilingual board exam study guide with ERC, synonyms and critical analysis.',
    changeNoteTa: 'முழுமையான இருமொழித் தேர்வு வழிகாட்டி, மேற்கோள் விளக்கம் மற்றும் வினா-விடைகள்.',
    readTimeMinutes: 12,
    bodyEn: "### Detailed Literary & Exam Analysis: Supplementary: The Never-Never Nest - Play (Cedric Mount)\n\n#### 1. Thematic Overview\nSatire on Hire-Purchase Traps & Living Beyond One's Means.\n\n#### 2. Key Narrative Phases\n- **Exposition:** Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs\n- **Conflict & Development:** Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg\n- **Resolution & Philosophical Takeaway:** Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby\n\n#### 3. Literary Devices & Vocabulary\nFocus on context-based vocabulary, figures of speech (metaphor, simile, irony, personification), and character motives frequently tested in the Public Examination.",
    bodyTa: "### \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bbe\u0ba9 \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf & \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b86\u0baf\u0bcd\u0bb5\u0bc1: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd)\n\n#### 1. \u0bae\u0bc8\u0baf\u0b95\u0bcd\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\n\u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd.\n\n#### 2. \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0ba4\u0bc8 \u0ba8\u0bbf\u0bb2\u0bc8\u0b95\u0bb3\u0bcd\n- **\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8:** Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs\n- **\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf:** Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg\n- **\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd:** Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby\n\n#### 3. \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\n\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b89\u0bb0\u0bc1\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd 3-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd 5-\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bbf\u0ba9\u0bbe\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd.",
    rememberBoxes: [
      { tipEn: "Master the thematic conflict: Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg", tipTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd: Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b8e\u0bb4\u0bc1\u0ba4\u0bb5\u0bc1\u0bae\u0bcd." },
      { tipEn: 'Reference to Context (ERC) answers must always state: Name of Work, Author/Poet, Context, and Critical Appreciation.', tipTa: 'ERC வினாக்களில் நூல் பெயர், ஆசிரியர் பெயர், சூழல் மற்றும் நயவுரை ஆகிய நான்கையும் வரிசையாக எழுத வேண்டும்.' }
    ],
    revisions: [
      { version: '2.0.0', updatedAt: '22 Sep 2026', updatedAtTa: '22 செப் 2026', updatedBy: 'TN SCERT Panel', changeNote: 'Enhanced with ERC guides and bilingual glossaries.', changeNoteTa: 'பாடக் குறிப்புகள் மற்றும் இருமொழி விளக்கங்களுடன் மேம்படுத்தப்பட்டது.' }
    ]
  },
};

export const CLASS_11_ENGLISH_SUMMARIES: Record<string, SummaryItem> = {
  c11_eng_u1_p1: {
    id: 'sum_c11_eng_u1_p1',
    chapterId: 'c11_eng_u1_p1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Generational Bond: Khushwant Singh & his Devout Grandmother",
      "Phase 1: Village Childhood & Daily Routine with Street Dogs",
      "Phase 2: City Life: Music, Science & Feeding Sparrows",
      "Core Message: Her Serene Death: Sparrows Mourning in Silence"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Village Childhood & Daily Routine with Street Dogs",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: City Life: Music, Science & Feeding Sparrows",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Her Serene Death: Sparrows Mourning in Silence"
    ],
    simpleExplanationEn: "Prose: The Portrait of a Lady (Khushwant Singh) conveys deep human insights through Generational Bond: Khushwant Singh & his Devout Grandmother. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u1_p2: {
    id: 'sum_c11_eng_u1_p2',
    chapterId: 'c11_eng_u1_p2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Hypocrisy of Modern Society vs Nostalgic Childhood Innocence",
      "Phase 1: Laughing with Hearts vs Laughing with Teeth and Eyes",
      "Phase 2: Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
      "Core Message: A Father's Plea to his Son: Teach Me to Smile Genuine Again"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Laughing with Hearts vs Laughing with Teeth and Eyes",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: A Father's Plea to his Son: Teach Me to Smile Genuine Again"
    ],
    simpleExplanationEn: "Poem: Once Upon a Time (Gabriel Okara) conveys deep human insights through Hypocrisy of Modern Society vs Nostalgic Childhood Innocence. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u1_s1: {
    id: 'sum_c11_eng_u1_s1',
    chapterId: 'c11_eng_u1_s1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Appointment at 'Big Joe' Brady's: Friendship vs Police Duty",
      "Phase 1: Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM",
      "Phase 2: Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
      "Core Message: The Plainclothesman Arrest & Jimmy's Heartbreaking Note"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: The Plainclothesman Arrest & Jimmy's Heartbreaking Note"
    ],
    simpleExplanationEn: "Supplementary: After Twenty Years (O. Henry) conveys deep human insights through Appointment at 'Big Joe' Brady's: Friendship vs Police Duty. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u2_p1: {
    id: 'sum_c11_eng_u2_p1',
    chapterId: 'c11_eng_u2_p1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Mary Kom's Relentless Struggle from Rural Manipur to World Boxing",
      "Phase 1: Financial Hardships & Father's Initial Apprehension",
      "Phase 2: First World Championship in Pennsylvania (Silver Medal)",
      "Core Message: Hat-trick World Titles & The Crown of 'Magnificent Mary'"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Financial Hardships & Father's Initial Apprehension",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: First World Championship in Pennsylvania (Silver Medal)",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Hat-trick World Titles & The Crown of 'Magnificent Mary'"
    ],
    simpleExplanationEn: "Prose: The Queen of Boxing (M.C. Mary Kom) conveys deep human insights through Mary Kom's Relentless Struggle from Rural Manipur to World Boxing. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u2_p2: {
    id: 'sum_c11_eng_u2_p2',
    chapterId: 'c11_eng_u2_p2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Humorous Defense of Being an Enthusiastic Spectator",
      "Phase 1: Admiration for Athletes Knocking Broken Ribs & Cracked Spines",
      "Phase 2: Heroic Athletes Pounding Each Other for Fleeting Glory",
      "Core Message: Contentment Drinking to Athletes from the Grandstand"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Admiration for Athletes Knocking Broken Ribs & Cracked Spines",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Heroic Athletes Pounding Each Other for Fleeting Glory",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Contentment Drinking to Athletes from the Grandstand"
    ],
    simpleExplanationEn: "Poem: Confessions of a Born Spectator (Ogden Nash) conveys deep human insights through Humorous Defense of Being an Enthusiastic Spectator. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u2_s1: {
    id: 'sum_c11_eng_u2_s1',
    chapterId: 'c11_eng_u2_s1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Philip Sletherby's Train Journey & Misguided Cleverness",
      "Phase 1: Train Journey to Chalkshire & Aspiring for Parliament Seat",
      "Phase 2: Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
      "Core Message: Sletherby's Self-Satisfaction Shattered by KC's Revelation"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Train Journey to Chalkshire & Aspiring for Parliament Seat",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Sletherby's Self-Satisfaction Shattered by KC's Revelation"
    ],
    simpleExplanationEn: "Supplementary: A Shot in the Dark (Saki - H.H. Munro) conveys deep human insights through Philip Sletherby's Train Journey & Misguided Cleverness. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u3_p1: {
    id: 'sum_c11_eng_u3_p1',
    chapterId: 'c11_eng_u3_p1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: The Psychology & Everyday Paradox of Human Memory",
      "Phase 1: List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)",
      "Phase 2: Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
      "Core Message: Absent-Minded Genius: Philosophers, Poets and Statesmen"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Absent-Minded Genius: Philosophers, Poets and Statesmen"
    ],
    simpleExplanationEn: "Prose: Forgetting (Robert Lynd) conveys deep human insights through The Psychology & Everyday Paradox of Human Memory. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u3_p2: {
    id: 'sum_c11_eng_u3_p2',
    chapterId: 'c11_eng_u3_p2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Nature's Blissful Harmony vs What Man Has Made of Man",
      "Phase 1: Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony",
      "Phase 2: Birds Hopping in Inexpressible Pleasure & Budding Twigs",
      "Core Message: Wordsworth's Melancholy: Human Greed, War and Discord"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Birds Hopping in Inexpressible Pleasure & Budding Twigs",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Wordsworth's Melancholy: Human Greed, War and Discord"
    ],
    simpleExplanationEn: "Poem: Lines Written in Early Spring (William Wordsworth) conveys deep human insights through Nature's Blissful Harmony vs What Man Has Made of Man. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u3_s1: {
    id: 'sum_c11_eng_u3_s1',
    chapterId: 'c11_eng_u3_s1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding",
      "Phase 1: Anxious Patients Waiting with Aching Teeth in Surgery Lobby",
      "Phase 2: Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
      "Core Message: The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Anxious Patients Waiting with Aching Teeth in Surgery Lobby",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet"
    ],
    simpleExplanationEn: "Supplementary: The First Patient - Play (C.V. Burgess) conveys deep human insights through Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u4_p1: {
    id: 'sum_c11_eng_u4_p1',
    chapterId: 'c11_eng_u4_p1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Christie's Auction House Blunder & Fortuitous Escape",
      "Phase 1: Accompanying a Friend to Famous Christie's Art Auction",
      "Phase 2: Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
      "Core Message: The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Accompanying a Friend to Famous Christie's Art Auction",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit"
    ],
    simpleExplanationEn: "Prose: Tight Corners (E.V. Lucas) conveys deep human insights through Christie's Auction House Blunder & Fortuitous Escape. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u4_p2: {
    id: 'sum_c11_eng_u4_p2',
    chapterId: 'c11_eng_u4_p2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: The Mastermind Criminal 'Napoleon of Crime' Defying Gravity",
      "Phase 1: Scotland Yard Despair & Flying Squad Inability to Catch Him",
      "Phase 2: Defying Law of Gravity: Floating in Mid-Air without Trace",
      "Core Message: Macavity is not there! The Facetious Mastermind of Feline Crime"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Scotland Yard Despair & Flying Squad Inability to Catch Him",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Defying Law of Gravity: Floating in Mid-Air without Trace",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Macavity is not there! The Facetious Mastermind of Feline Crime"
    ],
    simpleExplanationEn: "Poem: Macavity - The Mystery Cat (T.S. Eliot) conveys deep human insights through The Mastermind Criminal 'Napoleon of Crime' Defying Gravity. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u4_s1: {
    id: 'sum_c11_eng_u4_s1',
    chapterId: 'c11_eng_u4_s1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Humorous Satire on Unsympathetic Portrait Photography",
      "Phase 1: The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth",
      "Phase 2: Machine Processing: Touching up Eyebrows, Replacing Mouth",
      "Core Message: Narrator Tearing Proof: Demanding his Real Human Face"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Machine Processing: Touching up Eyebrows, Replacing Mouth",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Narrator Tearing Proof: Demanding his Real Human Face"
    ],
    simpleExplanationEn: "Supplementary: With the Photographer (Stephen Leacock) conveys deep human insights through Humorous Satire on Unsympathetic Portrait Photography. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u5_p1: {
    id: 'sum_c11_eng_u5_p1',
    chapterId: 'c11_eng_u5_p1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Annamalai University Convocation (1967): Social Responsibility of Graduates",
      "Phase 1: Universities as Sanctuaries of Independent Thought & Character",
      "Phase 2: Graduates Indebted to Working Class Taxpayers Who Funded College",
      "Core Message: Service to the Common Man, Democracy and Enlightened Patriotism"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Universities as Sanctuaries of Independent Thought & Character",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Graduates Indebted to Working Class Taxpayers Who Funded College",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Service to the Common Man, Democracy and Enlightened Patriotism"
    ],
    simpleExplanationEn: "Prose: The Convocation Address (Dr. Arignar Anna) conveys deep human insights through Annamalai University Convocation (1967): Social Responsibility of Graduates. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u5_p2: {
    id: 'sum_c11_eng_u5_p2',
    chapterId: 'c11_eng_u5_p2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Virtue of Humble Duty, Quiet Integrity and Personal Excellence",
      "Phase 1: Not Everyone Climbs Everest or Gains World Fame",
      "Phase 2: Honour Lies in Doing Small Duties with Sincerity & Pride",
      "Core Message: A Heart Without Deceit and a Hand Free of Greed"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Not Everyone Climbs Everest or Gains World Fame",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Honour Lies in Doing Small Duties with Sincerity & Pride",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: A Heart Without Deceit and a Hand Free of Greed"
    ],
    simpleExplanationEn: "Poem: Everest is Not the Only Peak (Kulothungan) conveys deep human insights through Virtue of Humble Duty, Quiet Integrity and Personal Excellence. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u5_s1: {
    id: 'sum_c11_eng_u5_s1',
    chapterId: 'c11_eng_u5_s1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Miss Meadows' Fluctuating Emotions: Love, Despair and Joy",
      "Phase 1: Heartbroken Miss Meadows Receiving Basil's Rejection Letter",
      "Phase 2: Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
      "Core Message: The Telegram Arrives: Apology and Restoration of Vibrant Song"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Heartbroken Miss Meadows Receiving Basil's Rejection Letter",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: The Telegram Arrives: Apology and Restoration of Vibrant Song"
    ],
    simpleExplanationEn: "Supplementary: The Singing Lesson (Katherine Mansfield) conveys deep human insights through Miss Meadows' Fluctuating Emotions: Love, Despair and Joy. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u6_p1: {
    id: 'sum_c11_eng_u6_p1',
    chapterId: 'c11_eng_u6_p1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Hilarious Mishaps of a Chronically Clumsy Frequent Flyer",
      "Phase 1: The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere",
      "Phase 2: Sucking Ink from a Pen while Chatting with an Attractive Woman",
      "Core Message: Losing Frequent Flyer Miles Due to Perpetual Identity Confusion"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Sucking Ink from a Pen while Chatting with an Attractive Woman",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Losing Frequent Flyer Miles Due to Perpetual Identity Confusion"
    ],
    simpleExplanationEn: "Prose: The Accidental Tourist (Bill Bryson) conveys deep human insights through Hilarious Mishaps of a Chronically Clumsy Frequent Flyer. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u6_p2: {
    id: 'sum_c11_eng_u6_p2',
    chapterId: 'c11_eng_u6_p2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Mortality of Kings & The Mocking Antics of Death (Richard II)",
      "Phase 1: King Richard II Despair: Sitting upon the Ground to Tell Sad Stories",
      "Phase 2: Death Keeping Court within the Hollow Crown of Kings",
      "Core Message: Scoffing his State and Grinning at his Pomps: We Are All Human"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: King Richard II Despair: Sitting upon the Ground to Tell Sad Stories",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Death Keeping Court within the Hollow Crown of Kings",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Scoffing his State and Grinning at his Pomps: We Are All Human"
    ],
    simpleExplanationEn: "Poem: The Hollow Crown (William Shakespeare) conveys deep human insights through Mortality of Kings & The Mocking Antics of Death (Richard II). It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
  c11_eng_u6_s1: {
    id: 'sum_c11_eng_u6_s1',
    chapterId: 'c11_eng_u6_s1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      "Overview: Satire on Hire-Purchase Traps & Living Beyond One's Means",
      "Phase 1: Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs",
      "Phase 2: Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
      "Core Message: Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby"
    ],
    keyPointsTa: [
      "\u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd",
      "\u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0bb2\u0bc8: Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs",
      "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1: Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
      "\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby"
    ],
    simpleExplanationEn: "Supplementary: The Never-Never Nest - Play (Cedric Mount) conveys deep human insights through Satire on Hire-Purchase Traps & Living Beyond One's Means. It challenges students to appreciate resilience, empathy, and literary craftsmanship.",
    simpleExplanationTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0b8e\u0bb3\u0bbf\u0baf \u0ba8\u0b9f\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf, \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb4\u0bc1\u0bae\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1."
  },
};

export const CLASS_11_ENGLISH_QUIZZES: Record<string, ChapterQuiz> = {
  c11_eng_u1_p1: {
    id: 'quiz_c11_eng_u1_p1',
    chapterId: 'c11_eng_u1_p1',
    titleEn: "Prose: The Portrait of a Lady (Khushwant Singh): Mastery Quiz",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u1_p1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Prose: The Portrait of a Lady (Khushwant Singh)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Generational Bond: Khushwant Singh & his Devout Grandmother",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Generational Bond: Khushwant Singh & his Devout Grandmother",
        explanationEn: "Prose: The Portrait of a Lady (Khushwant Singh) primarily centers upon Generational Bond: Khushwant Singh & his Devout Grandmother.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u1_p1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Prose: The Portrait of a Lady (Khushwant Singh)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "City Life: Music, Science & Feeding Sparrows",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "City Life: Music, Science & Feeding Sparrows",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "City Life: Music, Science & Feeding Sparrows",
        explanationEn: "The narrative reaches its critical turning point at City Life: Music, Science & Feeding Sparrows.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd City Life: Music, Science & Feeding Sparrows \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u1_p2: {
    id: 'quiz_c11_eng_u1_p2',
    chapterId: 'c11_eng_u1_p2',
    titleEn: "Poem: Once Upon a Time (Gabriel Okara): Mastery Quiz",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u1_p2_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Poem: Once Upon a Time (Gabriel Okara)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Hypocrisy of Modern Society vs Nostalgic Childhood Innocence",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Hypocrisy of Modern Society vs Nostalgic Childhood Innocence",
        explanationEn: "Poem: Once Upon a Time (Gabriel Okara) primarily centers upon Hypocrisy of Modern Society vs Nostalgic Childhood Innocence.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u1_p2_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Poem: Once Upon a Time (Gabriel Okara)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
        explanationEn: "The narrative reaches its critical turning point at Wearing Faces like Dresses: Homeface, Officeface, Cocktailface.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Wearing Faces like Dresses: Homeface, Officeface, Cocktailface \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u1_s1: {
    id: 'quiz_c11_eng_u1_s1',
    chapterId: 'c11_eng_u1_s1',
    titleEn: "Supplementary: After Twenty Years (O. Henry): Mastery Quiz",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u1_s1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Supplementary: After Twenty Years (O. Henry)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Appointment at 'Big Joe' Brady's: Friendship vs Police Duty",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Appointment at 'Big Joe' Brady's: Friendship vs Police Duty",
        explanationEn: "Supplementary: After Twenty Years (O. Henry) primarily centers upon Appointment at 'Big Joe' Brady's: Friendship vs Police Duty.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u1_s1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Supplementary: After Twenty Years (O. Henry)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
        explanationEn: "The narrative reaches its critical turning point at Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u2_p1: {
    id: 'quiz_c11_eng_u2_p1',
    chapterId: 'c11_eng_u2_p1',
    titleEn: "Prose: The Queen of Boxing (M.C. Mary Kom): Mastery Quiz",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u2_p1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Prose: The Queen of Boxing (M.C. Mary Kom)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Mary Kom's Relentless Struggle from Rural Manipur to World Boxing",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Mary Kom's Relentless Struggle from Rural Manipur to World Boxing",
        explanationEn: "Prose: The Queen of Boxing (M.C. Mary Kom) primarily centers upon Mary Kom's Relentless Struggle from Rural Manipur to World Boxing.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u2_p1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Prose: The Queen of Boxing (M.C. Mary Kom)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "First World Championship in Pennsylvania (Silver Medal)",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "First World Championship in Pennsylvania (Silver Medal)",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "First World Championship in Pennsylvania (Silver Medal)",
        explanationEn: "The narrative reaches its critical turning point at First World Championship in Pennsylvania (Silver Medal).",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd First World Championship in Pennsylvania (Silver Medal) \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u2_p2: {
    id: 'quiz_c11_eng_u2_p2',
    chapterId: 'c11_eng_u2_p2',
    titleEn: "Poem: Confessions of a Born Spectator (Ogden Nash): Mastery Quiz",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u2_p2_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Poem: Confessions of a Born Spectator (Ogden Nash)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Humorous Defense of Being an Enthusiastic Spectator",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Humorous Defense of Being an Enthusiastic Spectator",
        explanationEn: "Poem: Confessions of a Born Spectator (Ogden Nash) primarily centers upon Humorous Defense of Being an Enthusiastic Spectator.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u2_p2_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Poem: Confessions of a Born Spectator (Ogden Nash)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Heroic Athletes Pounding Each Other for Fleeting Glory",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Heroic Athletes Pounding Each Other for Fleeting Glory",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Heroic Athletes Pounding Each Other for Fleeting Glory",
        explanationEn: "The narrative reaches its critical turning point at Heroic Athletes Pounding Each Other for Fleeting Glory.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Heroic Athletes Pounding Each Other for Fleeting Glory \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u2_s1: {
    id: 'quiz_c11_eng_u2_s1',
    chapterId: 'c11_eng_u2_s1',
    titleEn: "Supplementary: A Shot in the Dark (Saki - H.H. Munro): Mastery Quiz",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u2_s1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Supplementary: A Shot in the Dark (Saki - H.H. Munro)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Philip Sletherby's Train Journey & Misguided Cleverness",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Philip Sletherby's Train Journey & Misguided Cleverness",
        explanationEn: "Supplementary: A Shot in the Dark (Saki - H.H. Munro) primarily centers upon Philip Sletherby's Train Journey & Misguided Cleverness.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u2_s1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Supplementary: A Shot in the Dark (Saki - H.H. Munro)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
        explanationEn: "The narrative reaches its critical turning point at Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u3_p1: {
    id: 'quiz_c11_eng_u3_p1',
    chapterId: 'c11_eng_u3_p1',
    titleEn: "Prose: Forgetting (Robert Lynd): Mastery Quiz",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u3_p1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Prose: Forgetting (Robert Lynd)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "The Psychology & Everyday Paradox of Human Memory",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "The Psychology & Everyday Paradox of Human Memory",
        explanationEn: "Prose: Forgetting (Robert Lynd) primarily centers upon The Psychology & Everyday Paradox of Human Memory.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u3_p1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Prose: Forgetting (Robert Lynd)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
        explanationEn: "The narrative reaches its critical turning point at Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u3_p2: {
    id: 'quiz_c11_eng_u3_p2',
    chapterId: 'c11_eng_u3_p2',
    titleEn: "Poem: Lines Written in Early Spring (William Wordsworth): Mastery Quiz",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u3_p2_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Poem: Lines Written in Early Spring (William Wordsworth)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Nature's Blissful Harmony vs What Man Has Made of Man",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Nature's Blissful Harmony vs What Man Has Made of Man",
        explanationEn: "Poem: Lines Written in Early Spring (William Wordsworth) primarily centers upon Nature's Blissful Harmony vs What Man Has Made of Man.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u3_p2_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Poem: Lines Written in Early Spring (William Wordsworth)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Birds Hopping in Inexpressible Pleasure & Budding Twigs",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Birds Hopping in Inexpressible Pleasure & Budding Twigs",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Birds Hopping in Inexpressible Pleasure & Budding Twigs",
        explanationEn: "The narrative reaches its critical turning point at Birds Hopping in Inexpressible Pleasure & Budding Twigs.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Birds Hopping in Inexpressible Pleasure & Budding Twigs \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u3_s1: {
    id: 'quiz_c11_eng_u3_s1',
    chapterId: 'c11_eng_u3_s1',
    titleEn: "Supplementary: The First Patient - Play (C.V. Burgess): Mastery Quiz",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u3_s1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Supplementary: The First Patient - Play (C.V. Burgess)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding",
        explanationEn: "Supplementary: The First Patient - Play (C.V. Burgess) primarily centers upon Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u3_s1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Supplementary: The First Patient - Play (C.V. Burgess)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
        explanationEn: "The narrative reaches its critical turning point at Sound of Hammer, Screwdriver and Hacksaw inside Operation Room.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Sound of Hammer, Screwdriver and Hacksaw inside Operation Room \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u4_p1: {
    id: 'quiz_c11_eng_u4_p1',
    chapterId: 'c11_eng_u4_p1',
    titleEn: "Prose: Tight Corners (E.V. Lucas): Mastery Quiz",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u4_p1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Prose: Tight Corners (E.V. Lucas)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Christie's Auction House Blunder & Fortuitous Escape",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Christie's Auction House Blunder & Fortuitous Escape",
        explanationEn: "Prose: Tight Corners (E.V. Lucas) primarily centers upon Christie's Auction House Blunder & Fortuitous Escape.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u4_p1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Prose: Tight Corners (E.V. Lucas)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
        explanationEn: "The narrative reaches its critical turning point at Bidding 4050 Guineas for a Daubigny without a Penny in Bank.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Bidding 4050 Guineas for a Daubigny without a Penny in Bank \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u4_p2: {
    id: 'quiz_c11_eng_u4_p2',
    chapterId: 'c11_eng_u4_p2',
    titleEn: "Poem: Macavity - The Mystery Cat (T.S. Eliot): Mastery Quiz",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u4_p2_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Poem: Macavity - The Mystery Cat (T.S. Eliot)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "The Mastermind Criminal 'Napoleon of Crime' Defying Gravity",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "The Mastermind Criminal 'Napoleon of Crime' Defying Gravity",
        explanationEn: "Poem: Macavity - The Mystery Cat (T.S. Eliot) primarily centers upon The Mastermind Criminal 'Napoleon of Crime' Defying Gravity.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u4_p2_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Poem: Macavity - The Mystery Cat (T.S. Eliot)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Defying Law of Gravity: Floating in Mid-Air without Trace",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Defying Law of Gravity: Floating in Mid-Air without Trace",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Defying Law of Gravity: Floating in Mid-Air without Trace",
        explanationEn: "The narrative reaches its critical turning point at Defying Law of Gravity: Floating in Mid-Air without Trace.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Defying Law of Gravity: Floating in Mid-Air without Trace \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u4_s1: {
    id: 'quiz_c11_eng_u4_s1',
    chapterId: 'c11_eng_u4_s1',
    titleEn: "Supplementary: With the Photographer (Stephen Leacock): Mastery Quiz",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u4_s1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Supplementary: With the Photographer (Stephen Leacock)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Humorous Satire on Unsympathetic Portrait Photography",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Humorous Satire on Unsympathetic Portrait Photography",
        explanationEn: "Supplementary: With the Photographer (Stephen Leacock) primarily centers upon Humorous Satire on Unsympathetic Portrait Photography.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u4_s1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Supplementary: With the Photographer (Stephen Leacock)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Machine Processing: Touching up Eyebrows, Replacing Mouth",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Machine Processing: Touching up Eyebrows, Replacing Mouth",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Machine Processing: Touching up Eyebrows, Replacing Mouth",
        explanationEn: "The narrative reaches its critical turning point at Machine Processing: Touching up Eyebrows, Replacing Mouth.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Machine Processing: Touching up Eyebrows, Replacing Mouth \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u5_p1: {
    id: 'quiz_c11_eng_u5_p1',
    chapterId: 'c11_eng_u5_p1',
    titleEn: "Prose: The Convocation Address (Dr. Arignar Anna): Mastery Quiz",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u5_p1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Prose: The Convocation Address (Dr. Arignar Anna)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Annamalai University Convocation (1967): Social Responsibility of Graduates",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Annamalai University Convocation (1967): Social Responsibility of Graduates",
        explanationEn: "Prose: The Convocation Address (Dr. Arignar Anna) primarily centers upon Annamalai University Convocation (1967): Social Responsibility of Graduates.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u5_p1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Prose: The Convocation Address (Dr. Arignar Anna)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Graduates Indebted to Working Class Taxpayers Who Funded College",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Graduates Indebted to Working Class Taxpayers Who Funded College",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Graduates Indebted to Working Class Taxpayers Who Funded College",
        explanationEn: "The narrative reaches its critical turning point at Graduates Indebted to Working Class Taxpayers Who Funded College.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Graduates Indebted to Working Class Taxpayers Who Funded College \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u5_p2: {
    id: 'quiz_c11_eng_u5_p2',
    chapterId: 'c11_eng_u5_p2',
    titleEn: "Poem: Everest is Not the Only Peak (Kulothungan): Mastery Quiz",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u5_p2_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Poem: Everest is Not the Only Peak (Kulothungan)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Virtue of Humble Duty, Quiet Integrity and Personal Excellence",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Virtue of Humble Duty, Quiet Integrity and Personal Excellence",
        explanationEn: "Poem: Everest is Not the Only Peak (Kulothungan) primarily centers upon Virtue of Humble Duty, Quiet Integrity and Personal Excellence.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u5_p2_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Poem: Everest is Not the Only Peak (Kulothungan)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Honour Lies in Doing Small Duties with Sincerity & Pride",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Honour Lies in Doing Small Duties with Sincerity & Pride",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Honour Lies in Doing Small Duties with Sincerity & Pride",
        explanationEn: "The narrative reaches its critical turning point at Honour Lies in Doing Small Duties with Sincerity & Pride.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Honour Lies in Doing Small Duties with Sincerity & Pride \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u5_s1: {
    id: 'quiz_c11_eng_u5_s1',
    chapterId: 'c11_eng_u5_s1',
    titleEn: "Supplementary: The Singing Lesson (Katherine Mansfield): Mastery Quiz",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u5_s1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Supplementary: The Singing Lesson (Katherine Mansfield)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Miss Meadows' Fluctuating Emotions: Love, Despair and Joy",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Miss Meadows' Fluctuating Emotions: Love, Despair and Joy",
        explanationEn: "Supplementary: The Singing Lesson (Katherine Mansfield) primarily centers upon Miss Meadows' Fluctuating Emotions: Love, Despair and Joy.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u5_s1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Supplementary: The Singing Lesson (Katherine Mansfield)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
        explanationEn: "The narrative reaches its critical turning point at Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u6_p1: {
    id: 'quiz_c11_eng_u6_p1',
    chapterId: 'c11_eng_u6_p1',
    titleEn: "Prose: The Accidental Tourist (Bill Bryson): Mastery Quiz",
    titleTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u6_p1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Prose: The Accidental Tourist (Bill Bryson)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Hilarious Mishaps of a Chronically Clumsy Frequent Flyer",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Hilarious Mishaps of a Chronically Clumsy Frequent Flyer",
        explanationEn: "Prose: The Accidental Tourist (Bill Bryson) primarily centers upon Hilarious Mishaps of a Chronically Clumsy Frequent Flyer.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u6_p1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Prose: The Accidental Tourist (Bill Bryson)?",
        questionTa: "\u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Sucking Ink from a Pen while Chatting with an Attractive Woman",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Sucking Ink from a Pen while Chatting with an Attractive Woman",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Sucking Ink from a Pen while Chatting with an Attractive Woman",
        explanationEn: "The narrative reaches its critical turning point at Sucking Ink from a Pen while Chatting with an Attractive Woman.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Sucking Ink from a Pen while Chatting with an Attractive Woman \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u6_p2: {
    id: 'quiz_c11_eng_u6_p2',
    chapterId: 'c11_eng_u6_p2',
    titleEn: "Poem: The Hollow Crown (William Shakespeare): Mastery Quiz",
    titleTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u6_p2_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Poem: The Hollow Crown (William Shakespeare)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Mortality of Kings & The Mocking Antics of Death (Richard II)",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Mortality of Kings & The Mocking Antics of Death (Richard II)",
        explanationEn: "Poem: The Hollow Crown (William Shakespeare) primarily centers upon Mortality of Kings & The Mocking Antics of Death (Richard II).",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u6_p2_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Poem: The Hollow Crown (William Shakespeare)?",
        questionTa: "\u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Death Keeping Court within the Hollow Crown of Kings",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Death Keeping Court within the Hollow Crown of Kings",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Death Keeping Court within the Hollow Crown of Kings",
        explanationEn: "The narrative reaches its critical turning point at Death Keeping Court within the Hollow Crown of Kings.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Death Keeping Court within the Hollow Crown of Kings \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
  c11_eng_u6_s1: {
    id: 'quiz_c11_eng_u6_s1',
    chapterId: 'c11_eng_u6_s1',
    titleEn: "Supplementary: The Never-Never Nest - Play (Cedric Mount): Mastery Quiz",
    titleTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd): \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe",
    totalMarks: 10,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'c11_eng_u6_s1_q1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: "What is the principal theme explored in Supplementary: The Never-Never Nest - Play (Cedric Mount)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bae\u0bc8\u0baf\u0baa\u0bcd\u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd \u0baf\u0bbe\u0ba4\u0bc1?",
        optionsEn: [
          "Satire on Hire-Purchase Traps & Living Beyond One's Means",
          'Commercial advertising and financial management',
          'Military fortifications and weapon technologies',
          'Physical fitness without mental endurance'
        ],
        optionsTa: [
          "\u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd",
          'வணிக விளம்பரம் மற்றும் நிதி மேலாண்மை',
          'ராணுவக் கோட்டைகள் மற்றும் ஆயுதத் தொழில்நுட்பம்',
          'உடல் வலிமை மட்டும் கொண்ட விளையாட்டுத் திறன்'
        ],
        correctAnswer: "Satire on Hire-Purchase Traps & Living Beyond One's Means",
        explanationEn: "Supplementary: The Never-Never Nest - Play (Cedric Mount) primarily centers upon Satire on Hire-Purchase Traps & Living Beyond One's Means.",
        explanationTa: "\u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd \u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8 \u0bae\u0bc8\u0baf\u0bae\u0bbe\u0b95\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b87\u0baf\u0bb1\u0bcd\u0bb1\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
      },
      {
        id: 'c11_eng_u6_s1_q2',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: "Which crucial event or turning point defines Supplementary: The Never-Never Nest - Play (Cedric Mount)?",
        questionTa: "\u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd) \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bbf\u0b95 \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc1?",
        optionsEn: [
          "Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
          'A casual conversation with no consequences',
          'A routine travel schedule with no delays',
          'An artificial intelligence intervention'
        ],
        optionsTa: [
          "Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
          'எவ்வித விளைவும் ஏற்படுத்தாத சாதாரண உரையாடல்',
          'தடை ஏதுமற்ற வழக்கமான பயண அட்டவணை',
          'செயற்கை நுண்ணறிவு இயந்திரத் தலையீடு'
        ],
        correctAnswer: "Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
        explanationEn: "The narrative reaches its critical turning point at Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg.",
        explanationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bcd Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg \u0b86\u0b95\u0bc1\u0bae\u0bcd."
      }
    ]
  },
};

export const CLASS_11_ENGLISH_DIAGRAMS: Record<string, SchematicDiagram> = {
  c11_eng_u1_p1: {
    id: 'diag_c11_eng_u1_p1',
    chapterId: 'c11_eng_u1_p1',
    titleEn: "Thematic Diagram: Generational Bond: Khushwant Singh & his Devout Grandmother",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u1_p1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u1_p1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 1: Generational Bond: Khushwant Singh & his Devout Grandmother</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0ba9\u0bcd\u0baa\u0bc1, \u0b86\u0ba9\u0bcd\u0bae\u0bc0\u0b95 \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bbe\u0ba9 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Village Childhood & Daily Routine with Street Dogs", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "City Life: Music, Science & Feeding Sparrows", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Her Serene Death: Sparrows Mourning in Silence", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u1_p2: {
    id: 'diag_c11_eng_u1_p2',
    chapterId: 'c11_eng_u1_p2',
    titleEn: "Thematic Diagram: Hypocrisy of Modern Society vs Nostalgic Childhood Innocence",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u1_p2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u1_p2)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 1: Hypocrisy of Modern Society vs Nostalgic Childhood Innocence</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0ba8\u0bb5\u0bc0\u0ba9 \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bcb\u0bb2\u0bbf \u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb3\u0bcd\u0bb3\u0bae\u0bb1\u0bcd\u0bb1 \u0b9a\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Laughing with Hearts vs Laughing with Teeth and Eyes", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Wearing Faces like Dresses: Homeface, Officeface, Cocktailface", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "A Father's Plea to his Son: Teach Me to Smile Genuine Again", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u1_s1: {
    id: 'diag_c11_eng_u1_s1',
    chapterId: 'c11_eng_u1_s1',
    titleEn: "Thematic Diagram: Appointment at 'Big Joe' Brady's: Friendship vs Police Duty",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u1_s1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u1_s1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 1: Appointment at 'Big Joe' Brady's: Friendship vs Police Duty</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0ba8\u0b9f\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd \u0b95\u0b9f\u0bae\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b89\u0ba3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baa\u0bcd \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bcd\u0b9f\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "The Plainclothesman Arrest & Jimmy's Heartbreaking Note", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u2_p1: {
    id: 'diag_c11_eng_u2_p1',
    chapterId: 'c11_eng_u2_p1',
    titleEn: "Thematic Diagram: Mary Kom's Relentless Struggle from Rural Manipur to World Boxing",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u2_p1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u2_p1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 2: Mary Kom's Relentless Struggle from Rural Manipur to World Boxing</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0bae\u0ba3\u0bbf\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bbf\u0ba9\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0b89\u0bb2\u0b95 \u0b9a\u0bbe\u0bae\u0bcd\u0baa\u0bbf\u0baf\u0ba9\u0bcd\u0bb7\u0bbf\u0baa\u0bcd \u0bb5\u0bb0\u0bc8</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Financial Hardships & Father's Initial Apprehension", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "First World Championship in Pennsylvania (Silver Medal)", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Hat-trick World Titles & The Crown of 'Magnificent Mary'", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u2_p2: {
    id: 'diag_c11_eng_u2_p2',
    chapterId: 'c11_eng_u2_p2',
    titleEn: "Thematic Diagram: Humorous Defense of Being an Enthusiastic Spectator",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u2_p2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u2_p2)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 2: Humorous Defense of Being an Enthusiastic Spectator</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b95\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Admiration for Athletes Knocking Broken Ribs & Cracked Spines", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Heroic Athletes Pounding Each Other for Fleeting Glory", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Contentment Drinking to Athletes from the Grandstand", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u2_s1: {
    id: 'diag_c11_eng_u2_s1',
    chapterId: 'c11_eng_u2_s1',
    titleEn: "Thematic Diagram: Philip Sletherby's Train Journey & Misguided Cleverness",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u2_s1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u2_s1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 2: Philip Sletherby's Train Journey & Misguided Cleverness</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0baa\u0bbf\u0bb2\u0bbf\u0baa\u0bcd \u0bb8\u0bcd\u0bb2\u0bc6\u0ba4\u0bb0\u0bcd\u0baa\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bb5\u0bb1\u0bbe\u0ba9 \u0b8a\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b9f\u0bc8\u0bb5\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Train Journey to Chalkshire & Aspiring for Parliament Seat", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Sletherby's Self-Satisfaction Shattered by KC's Revelation", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u3_p1: {
    id: 'diag_c11_eng_u3_p1',
    chapterId: 'c11_eng_u3_p1',
    titleEn: "Thematic Diagram: The Psychology & Everyday Paradox of Human Memory",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u3_p1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u3_p1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 3: The Psychology & Everyday Paradox of Human Memory</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0bae\u0ba9\u0bbf\u0ba4 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbe\u0bb1\u0bcd\u0bb1\u0bb2\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bae\u0bb1\u0ba4\u0bbf\u0b95\u0bb3\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Absent-Minded Genius: Philosophers, Poets and Statesmen", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u3_p2: {
    id: 'diag_c11_eng_u3_p2',
    chapterId: 'c11_eng_u3_p2',
    titleEn: "Thematic Diagram: Nature's Blissful Harmony vs What Man Has Made of Man",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u3_p2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u3_p2)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 3: Nature's Blissful Harmony vs What Man Has Made of Man</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc7\u0bb0\u0bae\u0bc8\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0ba9\u0bbf\u0ba4\u0ba9\u0bcd \u0ba4\u0ba9\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0ba4\u0bc1\u0baf\u0bb0\u0bae\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Birds Hopping in Inexpressible Pleasure & Budding Twigs", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Wordsworth's Melancholy: Human Greed, War and Discord", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u3_s1: {
    id: 'diag_c11_eng_u3_s1',
    chapterId: 'c11_eng_u3_s1',
    titleEn: "Thematic Diagram: Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u3_s1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u3_s1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 3: Dentist Waiting Room Panic & The Hammer-Saw Misunderstanding</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0baa\u0bb2\u0bcd \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd \u0b85\u0bb1\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bb2\u0bcd-\u0bb5\u0bbe\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba8\u0bcd\u0ba4 \u0baa\u0bc0\u0ba4\u0bbf\u0baf\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Anxious Patients Waiting with Aching Teeth in Surgery Lobby", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Sound of Hammer, Screwdriver and Hacksaw inside Operation Room", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u4_p1: {
    id: 'diag_c11_eng_u4_p1',
    chapterId: 'c11_eng_u4_p1',
    titleEn: "Thematic Diagram: Christie's Auction House Blunder & Fortuitous Escape",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u4_p1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u4_p1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 4: Christie's Auction House Blunder & Fortuitous Escape</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b8f\u0bb2\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbe\u0baf\u0bcd \u0ba4\u0bb5\u0bb1\u0bbf\u0b9a\u0bcd \u0b9a\u0bca\u0ba9\u0bcd\u0ba9 \u0ba4\u0bca\u0b95\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0bb5\u0bbf\u0b9f\u0bc1\u0ba4\u0bb2\u0bc8\u0baf\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Accompanying a Friend to Famous Christie's Art Auction", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Bidding 4050 Guineas for a Daubigny without a Penny in Bank", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u4_p2: {
    id: 'diag_c11_eng_u4_p2',
    chapterId: 'c11_eng_u4_p2',
    titleEn: "Thematic Diagram: The Mastermind Criminal 'Napoleon of Crime' Defying Gravity",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u4_p2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u4_p2)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 4: The Mastermind Criminal 'Napoleon of Crime' Defying Gravity</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b88\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0ba4\u0bbf\u0baf\u0bc8\u0baf\u0bc7 \u0b8f\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb8\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0bb2\u0bbe\u0ba8\u0bcd\u0ba4\u0bc1 \u0baf\u0bbe\u0bb0\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0bcd\u0bae\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bcd\u0bb1\u0bb5\u0bbe\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Scotland Yard Despair & Flying Squad Inability to Catch Him", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Defying Law of Gravity: Floating in Mid-Air without Trace", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Macavity is not there! The Facetious Mastermind of Feline Crime", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u4_s1: {
    id: 'diag_c11_eng_u4_s1',
    chapterId: 'c11_eng_u4_s1',
    titleEn: "Thematic Diagram: Humorous Satire on Unsympathetic Portrait Photography",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u4_s1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u4_s1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 4: Humorous Satire on Unsympathetic Portrait Photography</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0ba9 \u0bae\u0bc1\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbf\u0b9a\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Machine Processing: Touching up Eyebrows, Replacing Mouth", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Narrator Tearing Proof: Demanding his Real Human Face", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u5_p1: {
    id: 'diag_c11_eng_u5_p1',
    chapterId: 'c11_eng_u5_p1',
    titleEn: "Thematic Diagram: Annamalai University Convocation (1967): Social Responsibility of Graduates",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u5_p1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u5_p1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 5: Annamalai University Convocation (1967): Social Responsibility of Graduates</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bae\u0bc2\u0b95\u0b95\u0bcd \u0b95\u0b9f\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0bb4\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0b95\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0ba8\u0bb1\u0bcd\u0baa\u0ba3\u0bbf</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Universities as Sanctuaries of Independent Thought & Character", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Graduates Indebted to Working Class Taxpayers Who Funded College", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Service to the Common Man, Democracy and Enlightened Patriotism", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u5_p2: {
    id: 'diag_c11_eng_u5_p2',
    chapterId: 'c11_eng_u5_p2',
    titleEn: "Thematic Diagram: Virtue of Humble Duty, Quiet Integrity and Personal Excellence",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u5_p2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u5_p2)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 5: Virtue of Humble Duty, Quiet Integrity and Personal Excellence</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b86\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bae\u0bb1\u0bcd\u0bb1 \u0b95\u0b9f\u0bae\u0bc8, \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0b89\u0bb4\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bae\u0bc8</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Not Everyone Climbs Everest or Gains World Fame", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Honour Lies in Doing Small Duties with Sincerity & Pride", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "A Heart Without Deceit and a Hand Free of Greed", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u5_s1: {
    id: 'diag_c11_eng_u5_s1',
    chapterId: 'c11_eng_u5_s1',
    titleEn: "Thematic Diagram: Miss Meadows' Fluctuating Emotions: Love, Despair and Joy",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u5_s1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u5_s1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 5: Miss Meadows' Fluctuating Emotions: Love, Despair and Joy</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b95\u0bbe\u0ba4\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bbf\u0bb5\u0bc1 \u0ba4\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0ba8\u0bcd\u0ba4\u0bbf \u0ba4\u0ba8\u0bcd\u0ba4 \u0bae\u0b95\u0bbf\u0bb4\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bc1\u0bae\u0bcd - \u0b87\u0b9a\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Heartbroken Miss Meadows Receiving Basil's Rejection Letter", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "The Telegram Arrives: Apology and Restoration of Vibrant Song", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u6_p1: {
    id: 'diag_c11_eng_u6_p1',
    chapterId: 'c11_eng_u6_p1',
    titleEn: "Thematic Diagram: Hilarious Mishaps of a Chronically Clumsy Frequent Flyer",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u6_p1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u6_p1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 6: Hilarious Mishaps of a Chronically Clumsy Frequent Flyer</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0bb5\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd \u0b95\u0bc1\u0bb3\u0bb1\u0bc1\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Sucking Ink from a Pen while Chatting with an Attractive Woman", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Losing Frequent Flyer Miles Due to Perpetual Identity Confusion", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u6_p2: {
    id: 'diag_c11_eng_u6_p2',
    chapterId: 'c11_eng_u6_p2',
    titleEn: "Thematic Diagram: Mortality of Kings & The Mocking Antics of Death (Richard II)",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u6_p2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u6_p2)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 6: Mortality of Kings & The Mocking Antics of Death (Richard II)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0b85\u0bb0\u0b9a\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b95\u0bc0\u0bb4\u0bcd \u0b9a\u0bbf\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0ba3 \u0ba4\u0bc7\u0bb5\u0ba9\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "King Richard II Despair: Sitting upon the Ground to Tell Sad Stories", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Death Keeping Court within the Hollow Crown of Kings", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Scoffing his State and Grinning at his Pomps: We Are All Human", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
  c11_eng_u6_s1: {
    id: 'diag_c11_eng_u6_s1',
    chapterId: 'c11_eng_u6_s1',
    titleEn: "Thematic Diagram: Satire on Hire-Purchase Traps & Living Beyond One's Means",
    titleTa: "\u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd",
    diagramType: 'concept_map',
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"eng11Grad_c11_eng_u6_s1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#4f46e5\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3730a3\" stopOpacity=\"0.08\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#eng11Grad_c11_eng_u6_s1)\" stroke=\"#6366f1\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#a5b4fc\" fontSize=\"18\" fontWeight=\"bold\">Unit 6: Satire on Hire-Purchase Traps & Living Beyond One's Means</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"14\">\u0ba4\u0bb5\u0ba3\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8 \u0bae\u0bcb\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bbe\u0bb2\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0bb5\u0bbf\u0baa\u0bb0\u0bc0\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(80, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"190\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <circle cx=\"95\" cy=\"70\" r=\"35\" fill=\"#4f46e5\" opacity=\"0.6\" />\n    <text x=\"95\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act I: Setting &amp; Motif</text>\n    <text x=\"95\" y=\"162\" fill=\"#a5b4fc\" fontSize=\"11\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0b95\u0bb3\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 280 250 L 330 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(340, 130)\">\n    <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" rx=\"12\" fill=\"#1e293b\" stroke=\"#6366f1\" strokeWidth=\"2\" />\n    <rect x=\"25\" y=\"25\" width=\"170\" height=\"90\" rx=\"8\" fill=\"#3730a3\" opacity=\"0.5\" />\n    <text x=\"110\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act II: Crisis &amp; Climax</text>\n    <text x=\"110\" y=\"170\" fill=\"#a5b4fc\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0bb0\u0ba3\u0bcd &amp; \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bc1\u0ba9\u0bc8</text>\n    <text x=\"110\" y=\"195\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Literary Devices &amp; Style</text>\n  </g>\n  <path d=\"M 570 250 L 610 250\" stroke=\"#6366f1\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 150)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"200\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,35 115,95 35,95\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"140\" fill=\"#f8fafc\" fontSize=\"13\" textAnchor=\"middle\" fontWeight=\"bold\">Act III: Denouement</text>\n    <text x=\"75\" y=\"162\" fill=\"#6ee7b7\" fontSize=\"11\" textAnchor=\"middle\">\u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bb1\u0bcd\u0baa\u0baf\u0ba9\u0bcd</text>\n  </g>\n</svg>",
    labels: [
      { id: 'l1', labelEn: "Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs", labelTa: 'தொடக்க நிலை / பாத்திரம்', descriptionEn: 'Exposition, setting, context and character dynamics.', descriptionTa: 'தொடக்க நிலை, கள அமைப்பு மற்றும் முதன்மைக் கதாபாத்திரங்கள்.', x: 25, y: 50 },
      { id: 'l2', labelEn: "Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg", labelTa: 'மைய முரண் / திருப்புமுனை', descriptionEn: 'Core conflict, metaphorical resonance and climax.', descriptionTa: 'மையக் கருத்து, முரண் மற்றும் முதன்மைத் திருப்புமுனை.', x: 55, y: 50 },
      { id: 'l3', labelEn: "Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby", labelTa: 'முடிவும் தேர்வு வழிகாட்டியும்', descriptionEn: 'Philosophical resolution and Board exam ERC answers.', descriptionTa: 'பாடத்தின் வாழ்வியல் பாடம் மற்றும் அரசுத் தேர்வு வினா-விடைகள்.', x: 80, y: 50 }
    ]
  },
};

export const CLASS_11_ENGLISH_VIDEOS: Record<string, VideoExplainer> = {
  c11_eng_u1_p1: {
    id: 'vid_c11_eng_u1_p1',
    chapterId: 'c11_eng_u1_p1',
    titleEn: "Video Masterclass: Prose: The Portrait of a Lady (Khushwant Singh)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Village Childhood & Daily Routine with Street Dogs",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Village Childhood & Daily Routine with Street Dogs",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Prose: The Portrait of a Lady (Khushwant Singh), starting with Village Childhood & Daily Routine with Street Dogs.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b92\u0bb0\u0bc1 \u0bae\u0bc2\u0ba4\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0baa\u0bcd\u0baa\u0b9f\u0bae\u0bcd (\u0b95\u0bc1\u0bb7\u0bcd\u0bb5\u0ba8\u0bcd\u0ba4\u0bcd \u0b9a\u0bbf\u0b99\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Village Childhood & Daily Routine with Street Dogs"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: City Life: Music, Science & Feeding Sparrows",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: City Life: Music, Science & Feeding Sparrows",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as City Life: Music, Science & Feeding Sparrows, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 City Life: Music, Science & Feeding Sparrows \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "City Life: Music, Science & Feeding Sparrows"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Her Serene Death: Sparrows Mourning in Silence",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Her Serene Death: Sparrows Mourning in Silence",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Her Serene Death: Sparrows Mourning in Silence to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Her Serene Death: Sparrows Mourning in Silence"
      }
    ]
  },
  c11_eng_u1_p2: {
    id: 'vid_c11_eng_u1_p2',
    chapterId: 'c11_eng_u1_p2',
    titleEn: "Video Masterclass: Poem: Once Upon a Time (Gabriel Okara)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Laughing with Hearts vs Laughing with Teeth and Eyes",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Laughing with Hearts vs Laughing with Teeth and Eyes",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Poem: Once Upon a Time (Gabriel Okara), starting with Laughing with Hearts vs Laughing with Teeth and Eyes.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd (\u0b95\u0bc7\u0baa\u0bcd\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b92\u0b95\u0bbe\u0bb0\u0bbe) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Laughing with Hearts vs Laughing with Teeth and Eyes"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Wearing Faces like Dresses: Homeface, Officeface, Cocktailface",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Wearing Faces like Dresses: Homeface, Officeface, Cocktailface, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Wearing Faces like Dresses: Homeface, Officeface, Cocktailface \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Wearing Faces like Dresses: Homeface, Officeface, Cocktailface"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: A Father's Plea to his Son: Teach Me to Smile Genuine Again",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: A Father's Plea to his Son: Teach Me to Smile Genuine Again",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and A Father's Plea to his Son: Teach Me to Smile Genuine Again to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "A Father's Plea to his Son: Teach Me to Smile Genuine Again"
      }
    ]
  },
  c11_eng_u1_s1: {
    id: 'vid_c11_eng_u1_s1',
    chapterId: 'c11_eng_u1_s1',
    titleEn: "Video Masterclass: Supplementary: After Twenty Years (O. Henry)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Supplementary: After Twenty Years (O. Henry), starting with Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0baa\u0ba4\u0bc1 \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0bb1\u0b95\u0bc1 (\u0b93. \u0bb9\u0bc6\u0ba9\u0bcd\u0bb1\u0bbf) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Jimmy Wells & Silky Bob's Pact: 20 Years Later at 10 PM"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Patrolman Jimmy Recognizing Wanted Criminal Bob by Cigar Glow"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: The Plainclothesman Arrest & Jimmy's Heartbreaking Note",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: The Plainclothesman Arrest & Jimmy's Heartbreaking Note",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and The Plainclothesman Arrest & Jimmy's Heartbreaking Note to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "The Plainclothesman Arrest & Jimmy's Heartbreaking Note"
      }
    ]
  },
  c11_eng_u2_p1: {
    id: 'vid_c11_eng_u2_p1',
    chapterId: 'c11_eng_u2_p1',
    titleEn: "Video Masterclass: Prose: The Queen of Boxing (M.C. Mary Kom)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Financial Hardships & Father's Initial Apprehension",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Financial Hardships & Father's Initial Apprehension",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Prose: The Queen of Boxing (M.C. Mary Kom), starting with Financial Hardships & Father's Initial Apprehension.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bcd\u0b9a\u0ba3\u0bcd\u0b9f\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b85\u0bb0\u0b9a\u0bbf (\u0bae\u0bc7\u0bb0\u0bbf \u0b95\u0bcb\u0bae\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Financial Hardships & Father's Initial Apprehension"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: First World Championship in Pennsylvania (Silver Medal)",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: First World Championship in Pennsylvania (Silver Medal)",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as First World Championship in Pennsylvania (Silver Medal), highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 First World Championship in Pennsylvania (Silver Medal) \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "First World Championship in Pennsylvania (Silver Medal)"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Hat-trick World Titles & The Crown of 'Magnificent Mary'",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Hat-trick World Titles & The Crown of 'Magnificent Mary'",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Hat-trick World Titles & The Crown of 'Magnificent Mary' to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Hat-trick World Titles & The Crown of 'Magnificent Mary'"
      }
    ]
  },
  c11_eng_u2_p2: {
    id: 'vid_c11_eng_u2_p2',
    chapterId: 'c11_eng_u2_p2',
    titleEn: "Video Masterclass: Poem: Confessions of a Born Spectator (Ogden Nash)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Admiration for Athletes Knocking Broken Ribs & Cracked Spines",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Admiration for Athletes Knocking Broken Ribs & Cracked Spines",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Poem: Confessions of a Born Spectator (Ogden Nash), starting with Admiration for Athletes Knocking Broken Ribs & Cracked Spines.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0ba4\u0bb2\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bc2\u0bb2\u0bae\u0bcd (\u0b86\u0b95\u0bcd\u0b9f\u0ba9\u0bcd \u0ba8\u0bbe\u0bb7\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Admiration for Athletes Knocking Broken Ribs & Cracked Spines"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Heroic Athletes Pounding Each Other for Fleeting Glory",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Heroic Athletes Pounding Each Other for Fleeting Glory",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Heroic Athletes Pounding Each Other for Fleeting Glory, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Heroic Athletes Pounding Each Other for Fleeting Glory \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Heroic Athletes Pounding Each Other for Fleeting Glory"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Contentment Drinking to Athletes from the Grandstand",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Contentment Drinking to Athletes from the Grandstand",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Contentment Drinking to Athletes from the Grandstand to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Contentment Drinking to Athletes from the Grandstand"
      }
    ]
  },
  c11_eng_u2_s1: {
    id: 'vid_c11_eng_u2_s1',
    chapterId: 'c11_eng_u2_s1',
    titleEn: "Video Masterclass: Supplementary: A Shot in the Dark (Saki - H.H. Munro)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Train Journey to Chalkshire & Aspiring for Parliament Seat",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Train Journey to Chalkshire & Aspiring for Parliament Seat",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Supplementary: A Shot in the Dark (Saki - H.H. Munro), starting with Train Journey to Chalkshire & Aspiring for Parliament Seat.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0bb0\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1 \u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf\u0b9a\u0bcd \u0b9a\u0bc2\u0b9f\u0bc1 (\u0b9a\u0bbe\u0b95\u0bcd\u0b95\u0bbf) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Train Journey to Chalkshire & Aspiring for Parliament Seat"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Bertie's Urgent Request for Three Sovereigns & The Crest Puzzle"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Sletherby's Self-Satisfaction Shattered by KC's Revelation",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Sletherby's Self-Satisfaction Shattered by KC's Revelation",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Sletherby's Self-Satisfaction Shattered by KC's Revelation to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Sletherby's Self-Satisfaction Shattered by KC's Revelation"
      }
    ]
  },
  c11_eng_u3_p1: {
    id: 'vid_c11_eng_u3_p1',
    chapterId: 'c11_eng_u3_p1',
    titleEn: "Video Masterclass: Prose: Forgetting (Robert Lynd)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Prose: Forgetting (Robert Lynd), starting with List of Forgotten Articles at London Railway Stations (Walking Sticks, Books).",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bae\u0bb1\u0ba4\u0bbf (\u0bb0\u0bbe\u0baa\u0bb0\u0bcd\u0b9f\u0bcd \u0bb2\u0bbf\u0ba3\u0bcd\u0b9f\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "List of Forgotten Articles at London Railway Stations (Walking Sticks, Books)"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Anglers & Sportsmen in Dreamworlds vs Ordinary Forgetfulness"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Absent-Minded Genius: Philosophers, Poets and Statesmen",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Absent-Minded Genius: Philosophers, Poets and Statesmen",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Absent-Minded Genius: Philosophers, Poets and Statesmen to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Absent-Minded Genius: Philosophers, Poets and Statesmen"
      }
    ]
  },
  c11_eng_u3_p2: {
    id: 'vid_c11_eng_u3_p2',
    chapterId: 'c11_eng_u3_p2',
    titleEn: "Video Masterclass: Poem: Lines Written in Early Spring (William Wordsworth)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Poem: Lines Written in Early Spring (William Wordsworth), starting with Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b87\u0bb3\u0bb5\u0bc7\u0ba9\u0bbf\u0bb1\u0bcd \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bbf\u0baf \u0bb5\u0bb0\u0bbf\u0b95\u0bb3\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb5\u0bc7\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Primrose Tufts & Periwinkle Wreaths in Sweet Grove Harmony"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Birds Hopping in Inexpressible Pleasure & Budding Twigs",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Birds Hopping in Inexpressible Pleasure & Budding Twigs",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Birds Hopping in Inexpressible Pleasure & Budding Twigs, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Birds Hopping in Inexpressible Pleasure & Budding Twigs \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Birds Hopping in Inexpressible Pleasure & Budding Twigs"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Wordsworth's Melancholy: Human Greed, War and Discord",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Wordsworth's Melancholy: Human Greed, War and Discord",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Wordsworth's Melancholy: Human Greed, War and Discord to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Wordsworth's Melancholy: Human Greed, War and Discord"
      }
    ]
  },
  c11_eng_u3_s1: {
    id: 'vid_c11_eng_u3_s1',
    chapterId: 'c11_eng_u3_s1',
    titleEn: "Video Masterclass: Supplementary: The First Patient - Play (C.V. Burgess)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Anxious Patients Waiting with Aching Teeth in Surgery Lobby",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Anxious Patients Waiting with Aching Teeth in Surgery Lobby",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Supplementary: The First Patient - Play (C.V. Burgess), starting with Anxious Patients Waiting with Aching Teeth in Surgery Lobby.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bbf.\u0bb5\u0bbf. \u0baa\u0bb0\u0bcd\u0b95\u0bc6\u0bb8\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Anxious Patients Waiting with Aching Teeth in Surgery Lobby"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Sound of Hammer, Screwdriver and Hacksaw inside Operation Room",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Sound of Hammer, Screwdriver and Hacksaw inside Operation Room, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Sound of Hammer, Screwdriver and Hacksaw inside Operation Room \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Sound of Hammer, Screwdriver and Hacksaw inside Operation Room"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "The Anti-Climax: Dentist Merely Forcing Open his Jammed Tool Cabinet"
      }
    ]
  },
  c11_eng_u4_p1: {
    id: 'vid_c11_eng_u4_p1',
    chapterId: 'c11_eng_u4_p1',
    titleEn: "Video Masterclass: Prose: Tight Corners (E.V. Lucas)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Accompanying a Friend to Famous Christie's Art Auction",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Accompanying a Friend to Famous Christie's Art Auction",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Prose: Tight Corners (E.V. Lucas), starting with Accompanying a Friend to Famous Christie's Art Auction.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0b87\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0ba9 \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd\u0b95\u0bb3\u0bcd (\u0b87.\u0bb5\u0bbf. \u0bb2\u0bc2\u0b95\u0bbe\u0bb8\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Accompanying a Friend to Famous Christie's Art Auction"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Bidding 4050 Guineas for a Daubigny without a Penny in Bank",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Bidding 4050 Guineas for a Daubigny without a Penny in Bank, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Bidding 4050 Guineas for a Daubigny without a Penny in Bank \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Bidding 4050 Guineas for a Daubigny without a Penny in Bank"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "The Miraculous Rich Dealer Who Bought it Out for 50 Guineas Profit"
      }
    ]
  },
  c11_eng_u4_p2: {
    id: 'vid_c11_eng_u4_p2',
    chapterId: 'c11_eng_u4_p2',
    titleEn: "Video Masterclass: Poem: Macavity - The Mystery Cat (T.S. Eliot)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Scotland Yard Despair & Flying Squad Inability to Catch Him",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Scotland Yard Despair & Flying Squad Inability to Catch Him",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Poem: Macavity - The Mystery Cat (T.S. Eliot), starting with Scotland Yard Despair & Flying Squad Inability to Catch Him.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bae\u0bc6\u0b95\u0bbe\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf - \u0bae\u0bb0\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bc2\u0ba9\u0bc8 (\u0b9f\u0bbf.\u0b8e\u0bb8\u0bcd. \u0b8e\u0bb2\u0bbf\u0baf\u0b9f\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Scotland Yard Despair & Flying Squad Inability to Catch Him"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Defying Law of Gravity: Floating in Mid-Air without Trace",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Defying Law of Gravity: Floating in Mid-Air without Trace",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Defying Law of Gravity: Floating in Mid-Air without Trace, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Defying Law of Gravity: Floating in Mid-Air without Trace \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Defying Law of Gravity: Floating in Mid-Air without Trace"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Macavity is not there! The Facetious Mastermind of Feline Crime",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Macavity is not there! The Facetious Mastermind of Feline Crime",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Macavity is not there! The Facetious Mastermind of Feline Crime to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Macavity is not there! The Facetious Mastermind of Feline Crime"
      }
    ]
  },
  c11_eng_u4_s1: {
    id: 'vid_c11_eng_u4_s1',
    chapterId: 'c11_eng_u4_s1',
    titleEn: "Video Masterclass: Supplementary: With the Photographer (Stephen Leacock)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Supplementary: With the Photographer (Stephen Leacock), starting with The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0baa\u0bc1\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b95\u0bcd \u0b95\u0bb2\u0bc8\u0b9e\u0bb0\u0bc1\u0b9f\u0ba9\u0bcd (\u0bb8\u0bcd\u0b9f\u0bc0\u0baa\u0ba9\u0bcd \u0bb2\u0bc0\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "The Frigid Photographer Insulting Narrator's Eyes, Ears and Mouth"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Machine Processing: Touching up Eyebrows, Replacing Mouth",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Machine Processing: Touching up Eyebrows, Replacing Mouth",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Machine Processing: Touching up Eyebrows, Replacing Mouth, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Machine Processing: Touching up Eyebrows, Replacing Mouth \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Machine Processing: Touching up Eyebrows, Replacing Mouth"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Narrator Tearing Proof: Demanding his Real Human Face",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Narrator Tearing Proof: Demanding his Real Human Face",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Narrator Tearing Proof: Demanding his Real Human Face to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Narrator Tearing Proof: Demanding his Real Human Face"
      }
    ]
  },
  c11_eng_u5_p1: {
    id: 'vid_c11_eng_u5_p1',
    chapterId: 'c11_eng_u5_p1',
    titleEn: "Video Masterclass: Prose: The Convocation Address (Dr. Arignar Anna)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Universities as Sanctuaries of Independent Thought & Character",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Universities as Sanctuaries of Independent Thought & Character",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Prose: The Convocation Address (Dr. Arignar Anna), starting with Universities as Sanctuaries of Independent Thought & Character.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0bbf\u0bb4\u0bbe \u0b89\u0bb0\u0bc8 (\u0baa\u0bc7\u0bb0\u0bb1\u0bbf\u0b9e\u0bb0\u0bcd \u0b85\u0ba3\u0bcd\u0ba3\u0bbe) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Universities as Sanctuaries of Independent Thought & Character"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Graduates Indebted to Working Class Taxpayers Who Funded College",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Graduates Indebted to Working Class Taxpayers Who Funded College",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Graduates Indebted to Working Class Taxpayers Who Funded College, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Graduates Indebted to Working Class Taxpayers Who Funded College \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Graduates Indebted to Working Class Taxpayers Who Funded College"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Service to the Common Man, Democracy and Enlightened Patriotism",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Service to the Common Man, Democracy and Enlightened Patriotism",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Service to the Common Man, Democracy and Enlightened Patriotism to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Service to the Common Man, Democracy and Enlightened Patriotism"
      }
    ]
  },
  c11_eng_u5_p2: {
    id: 'vid_c11_eng_u5_p2',
    chapterId: 'c11_eng_u5_p2',
    titleEn: "Video Masterclass: Poem: Everest is Not the Only Peak (Kulothungan)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Not Everyone Climbs Everest or Gains World Fame",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Not Everyone Climbs Everest or Gains World Fame",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Poem: Everest is Not the Only Peak (Kulothungan), starting with Not Everyone Climbs Everest or Gains World Fame.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0b8e\u0bb5\u0bb0\u0bc6\u0bb8\u0bcd\u0b9f\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b9a\u0bbf\u0b95\u0bb0\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2 (\u0b95\u0bc1\u0bb2\u0bcb\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0ba9\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Not Everyone Climbs Everest or Gains World Fame"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Honour Lies in Doing Small Duties with Sincerity & Pride",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Honour Lies in Doing Small Duties with Sincerity & Pride",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Honour Lies in Doing Small Duties with Sincerity & Pride, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Honour Lies in Doing Small Duties with Sincerity & Pride \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Honour Lies in Doing Small Duties with Sincerity & Pride"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: A Heart Without Deceit and a Hand Free of Greed",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: A Heart Without Deceit and a Hand Free of Greed",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and A Heart Without Deceit and a Hand Free of Greed to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "A Heart Without Deceit and a Hand Free of Greed"
      }
    ]
  },
  c11_eng_u5_s1: {
    id: 'vid_c11_eng_u5_s1',
    chapterId: 'c11_eng_u5_s1',
    titleEn: "Video Masterclass: Supplementary: The Singing Lesson (Katherine Mansfield)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Heartbroken Miss Meadows Receiving Basil's Rejection Letter",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Heartbroken Miss Meadows Receiving Basil's Rejection Letter",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Supplementary: The Singing Lesson (Katherine Mansfield), starting with Heartbroken Miss Meadows Receiving Basil's Rejection Letter.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b87\u0b9a\u0bc8\u0b95\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf (\u0b95\u0bc7\u0ba4\u0bcd\u0ba4\u0bb0\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0ba9\u0bcd\u0bb8\u0bcd\u0b83\u0baa\u0bc0\u0bb2\u0bcd\u0b9f\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Heartbroken Miss Meadows Receiving Basil's Rejection Letter"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Cold Desolate Singing: Forcing Girls to Sing Mournful Dirge"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: The Telegram Arrives: Apology and Restoration of Vibrant Song",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: The Telegram Arrives: Apology and Restoration of Vibrant Song",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and The Telegram Arrives: Apology and Restoration of Vibrant Song to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "The Telegram Arrives: Apology and Restoration of Vibrant Song"
      }
    ]
  },
  c11_eng_u6_p1: {
    id: 'vid_c11_eng_u6_p1',
    chapterId: 'c11_eng_u6_p1',
    titleEn: "Video Masterclass: Prose: The Accidental Tourist (Bill Bryson)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Prose: The Accidental Tourist (Bill Bryson), starting with The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb0\u0bc8\u0ba8\u0b9f\u0bc8: \u0bb5\u0bbf\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0bb2\u0bbe\u0baa\u0bcd \u0baa\u0baf\u0ba3\u0bbf\u0baf\u0ba9\u0bcd (\u0baa\u0bbf\u0bb2\u0bcd \u0baa\u0bbf\u0bb0\u0bc8\u0b9a\u0ba9\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "The Zip of Flight Bag Jamming & Exploding Toiletries Everywhere"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Sucking Ink from a Pen while Chatting with an Attractive Woman",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Sucking Ink from a Pen while Chatting with an Attractive Woman",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Sucking Ink from a Pen while Chatting with an Attractive Woman, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Sucking Ink from a Pen while Chatting with an Attractive Woman \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Sucking Ink from a Pen while Chatting with an Attractive Woman"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Losing Frequent Flyer Miles Due to Perpetual Identity Confusion",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Losing Frequent Flyer Miles Due to Perpetual Identity Confusion",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Losing Frequent Flyer Miles Due to Perpetual Identity Confusion to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Losing Frequent Flyer Miles Due to Perpetual Identity Confusion"
      }
    ]
  },
  c11_eng_u6_p2: {
    id: 'vid_c11_eng_u6_p2',
    chapterId: 'c11_eng_u6_p2',
    titleEn: "Video Masterclass: Poem: The Hollow Crown (William Shakespeare)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: King Richard II Despair: Sitting upon the Ground to Tell Sad Stories",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: King Richard II Despair: Sitting upon the Ground to Tell Sad Stories",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Poem: The Hollow Crown (William Shakespeare), starting with King Richard II Despair: Sitting upon the Ground to Tell Sad Stories.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb5\u0bbf\u0ba4\u0bc8: \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1 \u0b95\u0bbf\u0bb0\u0bc0\u0b9f\u0bae\u0bcd (\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bcd \u0bb7\u0bc7\u0b95\u0bcd\u0bb8\u0bcd\u0baa\u0bbf\u0baf\u0bb0\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "King Richard II Despair: Sitting upon the Ground to Tell Sad Stories"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Death Keeping Court within the Hollow Crown of Kings",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Death Keeping Court within the Hollow Crown of Kings",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Death Keeping Court within the Hollow Crown of Kings, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Death Keeping Court within the Hollow Crown of Kings \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Death Keeping Court within the Hollow Crown of Kings"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Scoffing his State and Grinning at his Pomps: We Are All Human",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Scoffing his State and Grinning at his Pomps: We Are All Human",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Scoffing his State and Grinning at his Pomps: We Are All Human to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Scoffing his State and Grinning at his Pomps: We Are All Human"
      }
    ]
  },
  c11_eng_u6_s1: {
    id: 'vid_c11_eng_u6_s1',
    chapterId: 'c11_eng_u6_s1',
    titleEn: "Video Masterclass: Supplementary: The Never-Never Nest - Play (Cedric Mount)",
    titleTa: "\u0b95\u0bbe\u0ba3\u0bca\u0bb3\u0bbf\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd)",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Narrative Exposition: Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs",
        titleTa: "\u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bcd & \u0ba4\u0bca\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd: Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs",
        visualDescription: 'Cinematic animated establishing shots illustrating historical setting, author biography, and fundamental themes.',
        narrationEn: "Welcome to Class 11 English. In this lesson, we explore Supplementary: The Never-Never Nest - Play (Cedric Mount), starting with Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs.",
        narrationTa: "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd \u0b86\u0ba3\u0bcd\u0b9f\u0bc1 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0baa\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb5\u0bb0\u0bb5\u0bc1. \u0b87\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba4\u0bc1\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bae\u0bcd: \u0ba4\u0bb5\u0ba3\u0bc8\u0ba4\u0bcd \u0ba4\u0bb3\u0bae\u0bcd - \u0ba8\u0b95\u0bc8\u0b9a\u0bcd\u0b9a\u0bc1\u0bb5\u0bc8 \u0ba8\u0bbe\u0b9f\u0b95\u0bae\u0bcd (\u0b9a\u0bc6\u0b9f\u0bcd\u0bb0\u0bbf\u0b95\u0bcd \u0bae\u0bb5\u0bc1\u0ba3\u0bcd\u0b9f\u0bcd) \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bbf\u0bae\u0bc1\u0b95\u0bae\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0ba9\u0bcd \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0ba3\u0bbf\u0baf\u0bc1\u0bae\u0bcd \u0b86\u0bb0\u0bbe\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1.",
        conceptKey: "Jack and Jill's Luxurious Villa, Car and Radiogram on Easy EMIs"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Thematic Conflict: Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
        titleTa: "\u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd & \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf: Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg",
        visualDescription: 'Kinetic typography displaying critical dialogue quotes, figures of speech, symbolic motifs, and dramatic turns.',
        narrationEn: "Examine how the central conflict unfolds as Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg, highlighting authorial craft and irony.",
        narrationTa: "\u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc8\u0baf \u0bae\u0bc1\u0bb0\u0ba3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf \u0ba8\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg \u0ba8\u0bcb\u0b95\u0bcd\u0b95\u0bbf \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0baa\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc2\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bb5\u0ba9\u0bbf\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Aunt Jane's Horror Finding They Own Only a Steering Wheel & Leg"
      },
      {
        sceneNumber: 3,
        titleEn: "Resolution & Board Exam Focus: Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby",
        titleTa: "\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1\u0bb0\u0bc8 & \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf: Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby",
        visualDescription: 'Structured exam revision board showing high-priority Reference to Context (ERC) lines, paragraph answers, and grammar notes.',
        narrationEn: "Review these key quotes and Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby to master your Higher Secondary Public Examination preparation.",
        narrationTa: "\u0b85\u0bb0\u0b9a\u0bc1\u0baa\u0bcd \u0baa\u0bca\u0ba4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1 \u0b89\u0ba4\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.",
        conceptKey: "Aunt Jane's 10-Pound Cheque: Paying the Final Installment on the Baby"
      }
    ]
  },
};