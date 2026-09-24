import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google GenAI SDK if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// POST /api/chat/stembuddy - Doubt clearing endpoint for Classes 9 to 12
app.post('/api/chat/stembuddy', async (req, res) => {
  try {
    const {
      query,
      classLevel = 10,
      subjectName = 'Science',
      chapterTitle = '',
      chapterId = '',
      language = 'ta',
      ragContext = ''
    } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Query is required' });
    }

    const isTamil = language === 'ta';

    if (!ai) {
      // Return flag indicating AI key not configured on server so client RAG fallback handles gracefully
      return res.status(503).json({
        fallback: true,
        message: 'Gemini AI not initialized on server, using internal RAG corpus.'
      });
    }

    const systemInstruction = `You are "STEMBuddy", the Tamil Nadu State Board (Samacheer Kalvi) expert AI Tutor for secondary and higher secondary students (Classes 9, 10, 11, and 12).
You excel across all Samacheer Kalvi subjects:
- Mathematics (Algebra, Geometry, Trigonometry, Coordinate Geometry, Calculus, Statistics, Matrices)
- Science / Physics (Mechanics, Optics, Electricity, Magnetism, Heat, Sound, Modern Physics)
- Chemistry (Periodic Table, Chemical Bonding, Stoichiometry, Organic, Inorganic, Physical Chemistry)
- Bio-Botany & Bio-Zoology / Biology (Plant Anatomy, Genetics, Biotechnology, Human Physiology, Ecology)
- Computer Science & Applications (Python, C++, SQL, HTML, Data Structures)
- Commerce, Accountancy, Business Maths, Economics, and Social Science (History, Geography, Civics, Economics)
- Tamil and English language literature, grammar, and comprehension.

Target Student Context:
- Class: Class ${classLevel}
- Subject: ${subjectName}
- Current Chapter: ${chapterTitle || 'General Syllabus'} (ID: ${chapterId})
- Student's Preferred Interface Language: ${isTamil ? 'Tamil (தமிழ்)' : 'English'}

Rules for Answering Doubts:
1. Ground your answers in the Tamil Nadu State Board (Samacheer Kalvi) syllabus and textbooks.
2. Structure your response clearly:
   - Direct explanation/definition with clarity.
   - Core formula or principle with variable meanings (using clean LaTeX notation like $F = ma$ or $E = mc^2$).
   - Step-by-step worked derivation or numerical example when applicable.
   - Board Exam Tip (குறிப்பு) indicating whether this is a 2-mark, 3-mark, or 5-mark board exam topic.
   - Real-world application relevant to Tamil Nadu context where suitable.
3. Language:
   - If the student asks in Tamil or their preferred language is Tamil, provide a rich, encouraging response in Tamil with standard Tamil Nadu textbook scientific/mathematical terminology alongside the English keywords in parentheses (e.g. நிலைமம் (Inertia), முடுக்கம் (Acceleration)).
   - If the student asks in English, provide the answer in clear, accessible English with precise terminology.
4. Keep the tone warm, highly motivating, pedagogically sound, and friendly.
5. Reference context: ${ragContext ? `Use this chapter syllabus notes context if relevant: """${ragContext.slice(0, 3000)}"""` : 'Use accurate Samacheer Kalvi textbook knowledge.'}`;

    const prompt = `Student Question: "${query}"\n\nPlease answer this doubt clearly and instantly for a Class ${classLevel} student studying ${subjectName}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || '';

    return res.json({
      answer: replyText,
      modelUsed: 'gemini-3.8-flash',
      classLevel,
      subjectName,
      chapterTitle
    });
  } catch (error: any) {
    console.error('Error generating STEMBuddy response:', error);
    return res.status(500).json({
      fallback: true,
      error: error.message || 'Internal AI Error'
    });
  }
});

// In development, Vite middleware is attached; in production, serve built dist
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EduVoice STEMBuddy Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
