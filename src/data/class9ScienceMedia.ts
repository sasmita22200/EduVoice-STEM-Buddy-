import { SchematicDiagram, VideoExplainer } from '../types';

export const CLASS_9_SCIENCE_DIAGRAMS: Record<string, SchematicDiagram> = {
  c9_sci_u1: {
    id: 'diag_c9_sci_u1',
    chapterId: 'c9_sci_u1',
    titleEn: "Vernier Caliper & Screw Gauge Principles", 
    titleTa: "\u0bb5\u0bc6\u0bb0\u0bcd\u0ba9\u0bbf\u0baf\u0bb0\u0bcd \u0b85\u0bb3\u0bb5\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bc1 \u0b85\u0bb3\u0bb5\u0bbf \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u1\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u1)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Vernier Caliper & Screw Gauge Principles</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0bb5\u0bc6\u0bb0\u0bcd\u0ba9\u0bbf\u0baf\u0bb0\u0bcd \u0b85\u0bb3\u0bb5\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bc1 \u0b85\u0bb3\u0bb5\u0bbf \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Precision in Measurement</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Physical Quantities & Least Count", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Precision in Measurement", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Real-world Applications", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u2: {
    id: 'diag_c9_sci_u2',
    chapterId: 'c9_sci_u2',
    titleEn: "Equations of Uniformly Accelerated Motion (v = u + at, s = ut + 1/2at\u00b2)", 
    titleTa: "\u0b9a\u0bc0\u0bb0\u0bbe\u0ba9 \u0bae\u0bc1\u0b9f\u0bc1\u0b95\u0bcd\u0b95 \u0b87\u0baf\u0b95\u0bcd\u0b95\u0b9a\u0bcd \u0b9a\u0bae\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u2\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u2)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Equations of Uniformly Accelerated Motion (v = u + at, s = ut + 1/2at\u00b2)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b9a\u0bc0\u0bb0\u0bbe\u0ba9 \u0bae\u0bc1\u0b9f\u0bc1\u0b95\u0bcd\u0b95 \u0b87\u0baf\u0b95\u0bcd\u0b95\u0b9a\u0bcd \u0b9a\u0bae\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Velocity-Time Graphs</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Distance vs Displacement", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Velocity-Time Graphs", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Deriving Equations of Motion", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u3: {
    id: 'diag_c9_sci_u3',
    chapterId: 'c9_sci_u3',
    titleEn: "Pascal\u2019s Principle & Hydraulic Lift Mechanism", 
    titleTa: "\u0baa\u0bbe\u0bb8\u0bcd\u0b95\u0bb2\u0bcd \u0bb5\u0bbf\u0ba4\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bc0\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b89\u0baf\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u3\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u3\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u3)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Pascal\u2019s Principle & Hydraulic Lift Mechanism</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0baa\u0bbe\u0bb8\u0bcd\u0b95\u0bb2\u0bcd \u0bb5\u0bbf\u0ba4\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bc0\u0bb0\u0bbf\u0baf\u0bb2\u0bcd \u0b89\u0baf\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Pascal\u2019s Law Demonstration</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Thrust and Pressure", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Pascal\u2019s Law Demonstration", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Archimedes Principle & Floatation", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u4: {
    id: 'diag_c9_sci_u4',
    chapterId: 'c9_sci_u4',
    titleEn: "Closed Electric Circuit & Ohm\u2019s Law Setup (V = IR)", 
    titleTa: "\u0bae\u0bbf\u0ba9\u0bcd\u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b93\u0bae\u0bcd \u0bb5\u0bbf\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u4\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u4\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u4)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Closed Electric Circuit & Ohm\u2019s Law Setup (V = IR)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0bae\u0bbf\u0ba9\u0bcd\u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b93\u0bae\u0bcd \u0bb5\u0bbf\u0ba4\u0bbf \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Ohm\u2019s Law & Resistance</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Electric Potential Difference", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Ohm\u2019s Law & Resistance", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Series & Parallel Resistor Networks", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u5: {
    id: 'diag_c9_sci_u5',
    chapterId: 'c9_sci_u5',
    titleEn: "Magnetic Field Lines of Solenoid & Fleming\u2019s Left Hand Rule", 
    titleTa: "\u0bb5\u0bb0\u0bbf\u0b9a\u0bcd\u0b9a\u0bc1\u0bb0\u0bc1\u0bb3\u0bbf\u0ba9\u0bcd \u0b95\u0bbe\u0ba8\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0bc1\u0bb2\u0b95\u0bcd \u0b95\u0bcb\u0b9f\u0bc1\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbf\u0bb3\u0bc6\u0bae\u0bbf\u0b99\u0bcd\u0b95\u0bbf\u0ba9\u0bcd \u0b87\u0b9f\u0b95\u0bcd\u0b95\u0bc8 \u0bb5\u0bbf\u0ba4\u0bbf", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u5\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u5\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u5)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Magnetic Field Lines of Solenoid & Fleming\u2019s Left Hand Rule</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0bb5\u0bb0\u0bbf\u0b9a\u0bcd\u0b9a\u0bc1\u0bb0\u0bc1\u0bb3\u0bbf\u0ba9\u0bcd \u0b95\u0bbe\u0ba8\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0bc1\u0bb2\u0b95\u0bcd \u0b95\u0bcb\u0b9f\u0bc1\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbf\u0bb3\u0bc6\u0bae\u0bbf\u0b99\u0bcd\u0b95\u0bbf\u0ba9\u0bcd \u0b87\u0b9f\u0b95\u0bcd\u0b95\u0bc8 \u0bb5\u0bbf\u0ba4\u0bbf</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Solenoid Magnetic Field</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Oersted Experiment", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Solenoid Magnetic Field", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Motor Principle & Force on Current-Carrying Wire", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u6: {
    id: 'diag_c9_sci_u6',
    chapterId: 'c9_sci_u6',
    titleEn: "Ray Diagram of Concave & Convex Spherical Mirrors", 
    titleTa: "\u0b95\u0bc1\u0bb4\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb5\u0bbf \u0b86\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b92\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0ba4\u0bbf\u0bb0\u0bcd \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u6\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u6\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u6)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Ray Diagram of Concave & Convex Spherical Mirrors</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b95\u0bc1\u0bb4\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb5\u0bbf \u0b86\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b92\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0ba4\u0bbf\u0bb0\u0bcd \u0bb5\u0bb0\u0bc8\u0baa\u0b9f\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Refraction & Snell\u2019s Law</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Laws of Reflection & Mirror Formula", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Refraction & Snell\u2019s Law", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Real vs Virtual Images", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u7: {
    id: 'diag_c9_sci_u7',
    chapterId: 'c9_sci_u7',
    titleEn: "Heat Transfer Modes (Conduction, Convection & Radiation)", 
    titleTa: "\u0bb5\u0bc6\u0baa\u0bcd\u0baa\u0baa\u0bcd \u0baa\u0bb0\u0bb5\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bc8\u0b95\u0bb3\u0bcd: \u0b95\u0b9f\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd, \u0b9a\u0bb2\u0ba9\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0ba4\u0bbf\u0bb0\u0bcd\u0bb5\u0bc0\u0b9a\u0bcd\u0b9a\u0bc1", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u7\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u7\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u7)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Heat Transfer Modes (Conduction, Convection & Radiation)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0bb5\u0bc6\u0baa\u0bcd\u0baa\u0baa\u0bcd \u0baa\u0bb0\u0bb5\u0bb2\u0bcd \u0bae\u0bc1\u0bb1\u0bc8\u0b95\u0bb3\u0bcd: \u0b95\u0b9f\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd, \u0b9a\u0bb2\u0ba9\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0ba4\u0bbf\u0bb0\u0bcd\u0bb5\u0bc0\u0b9a\u0bcd\u0b9a\u0bc1</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Specific Heat Capacity (Q = mc\u0394T)</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Temperature vs Heat", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Specific Heat Capacity (Q = mc\u0394T)", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Change of State & Latent Heat", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u8: {
    id: 'diag_c9_sci_u8',
    chapterId: 'c9_sci_u8',
    titleEn: "Longitudinal Sound Wave: Compressions & Rarefactions and SONAR Reflection", 
    titleTa: "\u0ba8\u0bc6\u0b9f\u0bcd\u0b9f\u0bb2\u0bc8: \u0ba8\u0bc6\u0bb0\u0bbf\u0b9a\u0bb2\u0bcd\u0b95\u0bb3\u0bcd, \u0ba4\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bcb\u0ba9\u0bbe\u0bb0\u0bcd (SONAR) \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u8\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u8\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u8)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Longitudinal Sound Wave: Compressions & Rarefactions and SONAR Reflection</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0ba8\u0bc6\u0b9f\u0bcd\u0b9f\u0bb2\u0bc8: \u0ba8\u0bc6\u0bb0\u0bbf\u0b9a\u0bb2\u0bcd\u0b95\u0bb3\u0bcd, \u0ba4\u0bb3\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bcb\u0ba9\u0bbe\u0bb0\u0bcd (SONAR) \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Characteristics of Sound Wave</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Production & Propagation of Sound", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Characteristics of Sound Wave", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Echo, Reverberation & Ultrasonics in SONAR", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u9: {
    id: 'diag_c9_sci_u9',
    chapterId: 'c9_sci_u9',
    titleEn: "Kepler\u2019s Three Laws of Planetary Motion & Geocentric vs Heliocentric Model", 
    titleTa: "\u0b95\u0bc6\u0baa\u0bcd\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b87\u0baf\u0b95\u0bcd\u0b95 \u0bb5\u0bbf\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bc2\u0bb0\u0bbf\u0baf \u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bcb\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bc1", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u9\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u9\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u9)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Kepler\u2019s Three Laws of Planetary Motion & Geocentric vs Heliocentric Model</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b95\u0bc6\u0baa\u0bcd\u0bb3\u0bb0\u0bbf\u0ba9\u0bcd \u0b95\u0bcb\u0bb3\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b87\u0baf\u0b95\u0bcd\u0b95 \u0bb5\u0bbf\u0ba4\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bc2\u0bb0\u0bbf\u0baf \u0bae\u0bc8\u0baf\u0b95\u0bcd \u0b95\u0bcb\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Kepler\u2019s Law of Ellipses & Areas</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Heliocentric Model of Copernicus", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Kepler\u2019s Law of Ellipses & Areas", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Satellites & Gravitational Orbits", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u10: {
    id: 'diag_c9_sci_u10',
    chapterId: 'c9_sci_u10',
    titleEn: "Separation of Mixtures: Fractional Distillation & Paper Chromatography", 
    titleTa: "\u0b95\u0bb2\u0bb5\u0bc8\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd: \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b95\u0bcd \u0b95\u0bbe\u0baf\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf \u0bb5\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0bb0\u0bbf\u0b95\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u10\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u10\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u10)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Separation of Mixtures: Fractional Distillation & Paper Chromatography</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b95\u0bb2\u0bb5\u0bc8\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd: \u0baa\u0bbf\u0ba9\u0bcd\u0ba9\u0b95\u0bcd \u0b95\u0bbe\u0baf\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf \u0bb5\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0bb0\u0bbf\u0b95\u0bc8 \u0bae\u0bc1\u0bb1\u0bc8</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Tyndall Effect in Colloids</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Elements, Compounds & Mixtures", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Tyndall Effect in Colloids", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Separation Techniques in Modern Chemistry", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u11: {
    id: 'diag_c9_sci_u11',
    chapterId: 'c9_sci_u11',
    titleEn: "Bohr\u2019s Model of Atom: Shells (K, L, M, N) and Valency Distribution", 
    titleTa: "\u0baa\u0bcb\u0bb0\u0bbf\u0ba9\u0bcd \u0b85\u0ba3\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf: \u0b86\u0bb1\u0bcd\u0bb1\u0bb2\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd (K, L, M, N) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b87\u0ba3\u0bc8\u0ba4\u0bbf\u0bb1\u0ba9\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u11\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u11\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u11)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Bohr\u2019s Model of Atom: Shells (K, L, M, N) and Valency Distribution</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0baa\u0bcb\u0bb0\u0bbf\u0ba9\u0bcd \u0b85\u0ba3\u0bc1 \u0bae\u0bbe\u0ba4\u0bbf\u0bb0\u0bbf: \u0b86\u0bb1\u0bcd\u0bb1\u0bb2\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd (K, L, M, N) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b87\u0ba3\u0bc8\u0ba4\u0bbf\u0bb1\u0ba9\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Atomic Number (Z) & Mass Number (A)</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Rutherford vs Bohr Atomic Models", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Atomic Number (Z) & Mass Number (A)", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Electronic Configuration (2n\u00b2 rule) & Isotopes", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u12: {
    id: 'diag_c9_sci_u12',
    chapterId: 'c9_sci_u12',
    titleEn: "Modern Periodic Table: Groups, Periods & Valence Trends", 
    titleTa: "\u0ba8\u0bb5\u0bc0\u0ba9 \u0b86\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0ba9 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8: \u0ba4\u0bca\u0b95\u0bc1\u0ba4\u0bbf\u0b95\u0bb3\u0bcd, \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b87\u0ba3\u0bc8\u0ba4\u0bbf\u0bb1\u0ba9\u0bcd \u0baa\u0ba3\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u12\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u12\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u12)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Modern Periodic Table: Groups, Periods & Valence Trends</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0ba8\u0bb5\u0bc0\u0ba9 \u0b86\u0bb5\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0ba9 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8: \u0ba4\u0bca\u0b95\u0bc1\u0ba4\u0bbf\u0b95\u0bb3\u0bcd, \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b87\u0ba3\u0bc8\u0ba4\u0bbf\u0bb1\u0ba9\u0bcd \u0baa\u0ba3\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">7 Periods and 18 Groups</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Moseley\u2019s Modern Periodic Law", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "7 Periods and 18 Groups", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Periodic Trends: Atomic Radius & Electronegativity", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u13: {
    id: 'diag_c9_sci_u13',
    chapterId: 'c9_sci_u13',
    titleEn: "Ionic Bond (NaCl) vs Covalent Bond (CH\u2084) Electron Transfer & Sharing", 
    titleTa: "\u0b85\u0baf\u0ba9\u0bbf\u0baa\u0bcd \u0baa\u0bbf\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc1 (NaCl) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0b95\u0baa\u0bcd\u0baa\u0bbf\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc1 (CH\u2084) \u0b8e\u0bb2\u0b95\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe\u0ba9\u0bcd \u0baa\u0bb0\u0bbf\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bae\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u13\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u13\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u13)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Ionic Bond (NaCl) vs Covalent Bond (CH\u2084) Electron Transfer & Sharing</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b85\u0baf\u0ba9\u0bbf\u0baa\u0bcd \u0baa\u0bbf\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc1 (NaCl) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0b95\u0baa\u0bcd\u0baa\u0bbf\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc1 (CH\u2084) \u0b8e\u0bb2\u0b95\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe\u0ba9\u0bcd \u0baa\u0bb0\u0bbf\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Formation of Ionic Crystals (NaCl)</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Kossel-Lewis Octet Rule", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Formation of Ionic Crystals (NaCl)", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Formation of Covalent Molecules (H\u2082O, CH\u2084)", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u14: {
    id: 'diag_c9_sci_u14',
    chapterId: 'c9_sci_u14',
    titleEn: "pH Scale (0 to 14) with Common Indicators and Neutralization Reaction", 
    titleTa: "pH \u0b85\u0bb3\u0bb5\u0bc1\u0b95\u0bcb\u0bb2\u0bcd (0 \u0bae\u0bc1\u0ba4\u0bb2\u0bcd 14), \u0ba8\u0bbf\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0b9f\u0bc1\u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bbe\u0b95\u0bcd\u0b95\u0bb2\u0bcd \u0bb5\u0bbf\u0ba9\u0bc8", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u14\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u14\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u14)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">pH Scale (0 to 14) with Common Indicators and Neutralization Reaction</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">pH \u0b85\u0bb3\u0bb5\u0bc1\u0b95\u0bcb\u0bb2\u0bcd (0 \u0bae\u0bc1\u0ba4\u0bb2\u0bcd 14), \u0ba8\u0bbf\u0bb1\u0b99\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0b9f\u0bc1\u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bbe\u0b95\u0bcd\u0b95\u0bb2\u0bcd \u0bb5\u0bbf\u0ba9\u0bc8</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">The pH Scale & Universal Indicators</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Properties of Acids & Bases", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "The pH Scale & Universal Indicators", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Neutralization: Acid + Base \u2192 Salt + Water", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u15: {
    id: 'diag_c9_sci_u15',
    chapterId: 'c9_sci_u15',
    titleEn: "Allotropes of Carbon (Diamond, Graphite, Graphene & Fullerenes)", 
    titleTa: "\u0b95\u0bbe\u0bb0\u0bcd\u0baa\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bc1\u0bb1\u0bb5\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bc8 \u0bb5\u0b9f\u0bbf\u0bb5\u0b99\u0bcd\u0b95\u0bb3\u0bcd (\u0bb5\u0bc8\u0bb0\u0bae\u0bcd, \u0b95\u0bbf\u0bb0\u0bbe\u0baa\u0bc8\u0b9f\u0bcd, \u0b95\u0bbf\u0bb0\u0bbe\u0baa\u0bc0\u0ba9\u0bcd & \u0baa\u0bc1\u0bb2\u0bcd\u0bb2\u0bb0\u0bc0\u0ba9\u0bcd)", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u15\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u15\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u15)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Allotropes of Carbon (Diamond, Graphite, Graphene & Fullerenes)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b95\u0bbe\u0bb0\u0bcd\u0baa\u0ba9\u0bbf\u0ba9\u0bcd \u0baa\u0bc1\u0bb1\u0bb5\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bc8 \u0bb5\u0b9f\u0bbf\u0bb5\u0b99\u0bcd\u0b95\u0bb3\u0bcd (\u0bb5\u0bc8\u0bb0\u0bae\u0bcd, \u0b95\u0bbf\u0bb0\u0bbe\u0baa\u0bc8\u0b9f\u0bcd, \u0b95\u0bbf\u0bb0\u0bbe\u0baa\u0bc0\u0ba9\u0bcd & \u0baa\u0bc1\u0bb2\u0bcd\u0bb2\u0bb0\u0bc0\u0ba9\u0bcd)</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Diamond vs Graphite Crystal Lattices</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Versatile Nature of Carbon (Catenation & Tetravalency)", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Diamond vs Graphite Crystal Lattices", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Alkanes, Alkenes & Functional Groups", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u16: {
    id: 'diag_c9_sci_u16',
    chapterId: 'c9_sci_u16',
    titleEn: "Nanotechnology Scale, Polymers & Green Chemistry Synthesis", 
    titleTa: "\u0ba8\u0bbe\u0ba9\u0bcb \u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd\u0ba8\u0bc1\u0b9f\u0bcd\u0baa \u0b85\u0bb3\u0bb5\u0bc1\u0b95\u0bcb\u0bb2\u0bcd, \u0baa\u0bb2\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0b9a\u0bc1\u0bae\u0bc8 \u0bb5\u0bc7\u0ba4\u0bbf\u0baf\u0bbf\u0baf\u0bb2\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u16\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u16\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u16)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Nanotechnology Scale, Polymers & Green Chemistry Synthesis</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0ba8\u0bbe\u0ba9\u0bcb \u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd\u0ba8\u0bc1\u0b9f\u0bcd\u0baa \u0b85\u0bb3\u0bb5\u0bc1\u0b95\u0bcb\u0bb2\u0bcd, \u0baa\u0bb2\u0baa\u0b9f\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0b9a\u0bc1\u0bae\u0bc8 \u0bb5\u0bc7\u0ba4\u0bbf\u0baf\u0bbf\u0baf\u0bb2\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Natural vs Synthetic Polymers</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Nanomaterials & Quantum Effects", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Natural vs Synthetic Polymers", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "12 Principles of Green Chemistry", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u17: {
    id: 'diag_c9_sci_u17',
    chapterId: 'c9_sci_u17',
    titleEn: "Classification Hierarchy of Invertebrates & Vertebrates (Chordata)", 
    titleTa: "\u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bc6\u0bb2\u0bc1\u0bae\u0bcd\u0baa\u0bb1\u0bcd\u0bb1\u0bb5\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bc1\u0ba8\u0bbe\u0ba3\u0bc1\u0bb3\u0bcd\u0bb3 \u0bb5\u0bbf\u0bb2\u0b99\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bb5\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1\u0baa\u0bcd \u0baa\u0b9f\u0bbf\u0ba8\u0bbf\u0bb2\u0bc8", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u17\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u17\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u17)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Classification Hierarchy of Invertebrates & Vertebrates (Chordata)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bc6\u0bb2\u0bc1\u0bae\u0bcd\u0baa\u0bb1\u0bcd\u0bb1\u0bb5\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bc1\u0ba8\u0bbe\u0ba3\u0bc1\u0bb3\u0bcd\u0bb3 \u0bb5\u0bbf\u0bb2\u0b99\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bb5\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1\u0baa\u0bcd \u0baa\u0b9f\u0bbf\u0ba8\u0bbf\u0bb2\u0bc8</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Invertebrate Phyla (Porifera to Echinodermata)</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Basis of Classification: Symmetry & Germ Layers", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Invertebrate Phyla (Porifera to Echinodermata)", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Vertebrate Classes (Pisces, Amphibia, Reptilia, Aves, Mammalia)", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u18: {
    id: 'diag_c9_sci_u18',
    chapterId: 'c9_sci_u18',
    titleEn: "Plant Tissues (Meristematic vs Permanent) & Animal Tissues (Epithelial & Muscular)", 
    titleTa: "\u0ba4\u0bbe\u0bb5\u0bb0 \u0ba4\u0bbf\u0b9a\u0bc1\u0b95\u0bcd\u0b95\u0bb3\u0bcd (\u0b86\u0b95\u0bcd\u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b9a\u0bc1 & \u0ba8\u0bbf\u0bb2\u0bc8\u0ba4\u0bcd\u0ba4 \u0ba4\u0bbf\u0b9a\u0bc1) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbf\u0bb2\u0b99\u0bcd\u0b95\u0bc1 \u0ba4\u0bbf\u0b9a\u0bc1\u0b95\u0bcd\u0b95\u0bb3\u0bcd (\u0b8e\u0baa\u0bbf\u0ba4\u0bc0\u0bb2\u0bbf\u0baf\u0bb2\u0bcd & \u0ba4\u0b9a\u0bc8\u0ba4\u0bcd\u0ba4\u0bbf\u0b9a\u0bc1)", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u18\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u18\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u18)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Plant Tissues (Meristematic vs Permanent) & Animal Tissues (Epithelial & Muscular)</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0ba4\u0bbe\u0bb5\u0bb0 \u0ba4\u0bbf\u0b9a\u0bc1\u0b95\u0bcd\u0b95\u0bb3\u0bcd (\u0b86\u0b95\u0bcd\u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b9a\u0bc1 & \u0ba8\u0bbf\u0bb2\u0bc8\u0ba4\u0bcd\u0ba4 \u0ba4\u0bbf\u0b9a\u0bc1) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbf\u0bb2\u0b99\u0bcd\u0b95\u0bc1 \u0ba4\u0bbf\u0b9a\u0bc1\u0b95\u0bcd\u0b95\u0bb3\u0bcd (\u0b8e\u0baa\u0bbf\u0ba4\u0bc0\u0bb2\u0bbf\u0baf\u0bb2\u0bcd & \u0ba4\u0b9a\u0bc8\u0ba4\u0bcd\u0ba4\u0bbf\u0b9a\u0bc1)</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Complex Tissues: Xylem and Phloem</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Meristematic vs Permanent Tissues in Plants", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Complex Tissues: Xylem and Phloem", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Epithelial, Connective, Muscular & Nervous Tissues in Animals", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u19: {
    id: 'diag_c9_sci_u19',
    chapterId: 'c9_sci_u19',
    titleEn: "Tropic Movements in Plants (Phototropism, Geotropism) & Transpiration Pull", 
    titleTa: "\u0ba4\u0bbe\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bbe\u0bb0\u0bcd\u0baa\u0b9a\u0bc8\u0bb5\u0bc1\u0b95\u0bb3\u0bcd (\u0b92\u0bb3\u0bbf\u0b9a\u0bcd\u0b9a\u0bbe\u0bb0\u0bcd\u0baa\u0b9a\u0bc8\u0bb5\u0bc1, \u0baa\u0bc1\u0bb5\u0bbf\u0b9a\u0bcd\u0b9a\u0bbe\u0bb0\u0bcd\u0baa\u0b9a\u0bc8\u0bb5\u0bc1) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bc0\u0bb0\u0bbe\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bcb\u0b95\u0bcd\u0b95\u0bc1", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u19\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u19\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u19)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Tropic Movements in Plants (Phototropism, Geotropism) & Transpiration Pull</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0ba4\u0bbe\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b9a\u0bbe\u0bb0\u0bcd\u0baa\u0b9a\u0bc8\u0bb5\u0bc1\u0b95\u0bb3\u0bcd (\u0b92\u0bb3\u0bbf\u0b9a\u0bcd\u0b9a\u0bbe\u0bb0\u0bcd\u0baa\u0b9a\u0bc8\u0bb5\u0bc1, \u0baa\u0bc1\u0bb5\u0bbf\u0b9a\u0bcd\u0b9a\u0bbe\u0bb0\u0bcd\u0baa\u0b9a\u0bc8\u0bb5\u0bc1) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bc0\u0bb0\u0bbe\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bcb\u0b95\u0bcd\u0b95\u0bc1</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Mechanism of Stomatal Transpiration</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Phototropism, Geotropism & Hydrotropism", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Mechanism of Stomatal Transpiration", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Photosynthesis: Light vs Dark Reactions", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u20: {
    id: 'diag_c9_sci_u20',
    chapterId: 'c9_sci_u20',
    titleEn: "Human Digestive Tract and Excretory Nephron Filtration Mechanism", 
    titleTa: "\u0bae\u0ba9\u0bbf\u0ba4 \u0b9a\u0bc6\u0bb0\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0bbe\u0ba4\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bbf\u0bb1\u0bc1\u0ba8\u0bc0\u0bb0\u0b95 \u0ba8\u0bc6\u0baa\u0bcd\u0bb0\u0bbe\u0ba9\u0bbf\u0ba9\u0bcd \u0bb5\u0b9f\u0bbf\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0ba4\u0bb2\u0bcd \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u20\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u20\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u20)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Human Digestive Tract and Excretory Nephron Filtration Mechanism</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0bae\u0ba9\u0bbf\u0ba4 \u0b9a\u0bc6\u0bb0\u0bbf\u0bae\u0bbe\u0ba9\u0baa\u0bcd \u0baa\u0bbe\u0ba4\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bbf\u0bb1\u0bc1\u0ba8\u0bc0\u0bb0\u0b95 \u0ba8\u0bc6\u0baa\u0bcd\u0bb0\u0bbe\u0ba9\u0bbf\u0ba9\u0bcd \u0bb5\u0b9f\u0bbf\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0ba4\u0bb2\u0bcd \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Respiratory Gas Exchange in Alveoli</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Alimentary Canal & Digestive Enzymes", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Respiratory Gas Exchange in Alveoli", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Structure and Function of the Nephron", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u21: {
    id: 'diag_c9_sci_u21',
    chapterId: 'c9_sci_u21',
    titleEn: "Nutritional Food Pyramid, Macronutrients, Micronutrients & Deficiency Disorders", 
    titleTa: "\u0b89\u0ba3\u0bb5\u0bc1\u0b95\u0bcd \u0b95\u0bc2\u0bae\u0bcd\u0baa\u0bc1 \u0baa\u0bbf\u0bb0\u0bae\u0bbf\u0b9f\u0bc1, \u0ba8\u0bc1\u0ba3\u0bcd\u0ba3\u0bc2\u0b9f\u0bcd\u0b9f\u0b9a\u0bcd\u0b9a\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1 \u0ba8\u0bcb\u0baf\u0bcd\u0b95\u0bb3\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u21\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u21\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u21)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Nutritional Food Pyramid, Macronutrients, Micronutrients & Deficiency Disorders</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b89\u0ba3\u0bb5\u0bc1\u0b95\u0bcd \u0b95\u0bc2\u0bae\u0bcd\u0baa\u0bc1 \u0baa\u0bbf\u0bb0\u0bae\u0bbf\u0b9f\u0bc1, \u0ba8\u0bc1\u0ba3\u0bcd\u0ba3\u0bc2\u0b9f\u0bcd\u0b9f\u0b9a\u0bcd\u0b9a\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1 \u0ba8\u0bcb\u0baf\u0bcd\u0b95\u0bb3\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Fat-Soluble vs Water-Soluble Vitamins</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Carbohydrates, Proteins and Healthy Fats", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Fat-Soluble vs Water-Soluble Vitamins", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Malnutrition: Kwashiorkor, Marasmus & Anemia", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u22: {
    id: 'diag_c9_sci_u22',
    chapterId: 'c9_sci_u22',
    titleEn: "Morphology of Bacteria, Bacteriophage Virus and Antibiotic Action", 
    titleTa: "\u0baa\u0bbe\u0b95\u0bcd\u0b9f\u0bc0\u0bb0\u0bbf\u0baf\u0bbe \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbe\u0b95\u0bcd\u0b9f\u0bc0\u0bb0\u0bbf\u0baf\u0bcb\u0b83\u0baa\u0bbe\u0b9c\u0bcd \u0bb5\u0bc8\u0bb0\u0bb8\u0bcd \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1, \u0ba8\u0bc1\u0ba3\u0bcd\u0ba3\u0bc1\u0baf\u0bbf\u0bb0\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bb3\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u22\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u22\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u22)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Morphology of Bacteria, Bacteriophage Virus and Antibiotic Action</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0baa\u0bbe\u0b95\u0bcd\u0b9f\u0bc0\u0bb0\u0bbf\u0baf\u0bbe \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbe\u0b95\u0bcd\u0b9f\u0bc0\u0bb0\u0bbf\u0baf\u0bcb\u0b83\u0baa\u0bbe\u0b9c\u0bcd \u0bb5\u0bc8\u0bb0\u0bb8\u0bcd \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1, \u0ba8\u0bc1\u0ba3\u0bcd\u0ba3\u0bc1\u0baf\u0bbf\u0bb0\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bb3\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Viruses: Lytic vs Lysogenic Cycles</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Bacterial Shapes & Cellular Ultrastructure", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Viruses: Lytic vs Lysogenic Cycles", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Vaccines, Antibiotics and Natural Immunity", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u23: {
    id: 'diag_c9_sci_u23',
    chapterId: 'c9_sci_u23',
    titleEn: "Modern Agriculture: Hydroponics, Apiculture (Beekeeping) & Vermiculture", 
    titleTa: "\u0ba8\u0bb5\u0bc0\u0ba9 \u0bb5\u0bc7\u0bb3\u0bbe\u0ba3\u0bcd\u0bae\u0bc8: \u0bb9\u0bc8\u0b9f\u0bcd\u0bb0\u0bcb\u0baa\u0bcb\u0ba9\u0bbf\u0b95\u0bcd\u0bb8\u0bcd, \u0ba4\u0bc7\u0ba9\u0bc0 \u0bb5\u0bb3\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0ba3\u0bcd\u0baa\u0bc1\u0bb4\u0bc1 \u0b89\u0bb0\u0bae\u0bcd", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u23\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u23\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u23)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Modern Agriculture: Hydroponics, Apiculture (Beekeeping) & Vermiculture</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0ba8\u0bb5\u0bc0\u0ba9 \u0bb5\u0bc7\u0bb3\u0bbe\u0ba3\u0bcd\u0bae\u0bc8: \u0bb9\u0bc8\u0b9f\u0bcd\u0bb0\u0bcb\u0baa\u0bcb\u0ba9\u0bbf\u0b95\u0bcd\u0bb8\u0bcd, \u0ba4\u0bc7\u0ba9\u0bc0 \u0bb5\u0bb3\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0ba3\u0bcd\u0baa\u0bc1\u0bb4\u0bc1 \u0b89\u0bb0\u0bae\u0bcd</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Apiculture and Honey Extraction</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Hydroponics and Aeroponics in Modern Farming", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Apiculture and Honey Extraction", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Vermicomposting: Bed Preparation & Organic Nutrients", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
  c9_sci_u24: {
    id: 'diag_c9_sci_u24',
    chapterId: 'c9_sci_u24',
    titleEn: "Biogeochemical Cycles (Carbon Cycle & Nitrogen Cycle) and Solid Waste Hierarchy", 
    titleTa: "\u0b89\u0baf\u0bbf\u0bb0\u0bcd \u0baa\u0bc1\u0bb5\u0bbf \u0bb5\u0bc7\u0ba4\u0bbf\u0b9a\u0bcd \u0b9a\u0bc1\u0bb4\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd (\u0b95\u0bbe\u0bb0\u0bcd\u0baa\u0ba9\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bc8\u0b9f\u0bcd\u0bb0\u0b9c\u0ba9\u0bcd \u0b9a\u0bc1\u0bb4\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bb4\u0bbf\u0bb5\u0bc1 \u0bae\u0bc7\u0bb2\u0bbe\u0ba3\u0bcd\u0bae\u0bc8", 
    diagramType: 'svg_labeled', 
    svgContent: "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-full\">\n  <defs>\n    <linearGradient id=\"scGrad_c9_sci_u24\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#0ea5e9\" stopOpacity=\"0.2\" />\n      <stop offset=\"100%\" stopColor=\"#3b82f6\" stopOpacity=\"0.1\" />\n    </linearGradient>\n    <filter id=\"glow_c9_sci_u24\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"glow\" />\n      <feComposite in=\"SourceGraphic\" in2=\"glow\" operator=\"over\" />\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"500\" fill=\"#090d16\" rx=\"16\" />\n  <rect x=\"30\" y=\"30\" width=\"740\" height=\"440\" fill=\"url(#scGrad_c9_sci_u24)\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" rx=\"12\" />\n  <g transform=\"translate(50, 60)\">\n    <text x=\"0\" y=\"0\" fill=\"#38bdf8\" fontSize=\"20\" fontWeight=\"bold\">Biogeochemical Cycles (Carbon Cycle & Nitrogen Cycle) and Solid Waste Hierarchy</text>\n    <text x=\"0\" y=\"26\" fill=\"#94a3b8\" fontSize=\"15\">\u0b89\u0baf\u0bbf\u0bb0\u0bcd \u0baa\u0bc1\u0bb5\u0bbf \u0bb5\u0bc7\u0ba4\u0bbf\u0b9a\u0bcd \u0b9a\u0bc1\u0bb4\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd (\u0b95\u0bbe\u0bb0\u0bcd\u0baa\u0ba9\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bc8\u0b9f\u0bcd\u0bb0\u0b9c\u0ba9\u0bcd \u0b9a\u0bc1\u0bb4\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd) \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bb4\u0bbf\u0bb5\u0bc1 \u0bae\u0bc7\u0bb2\u0bbe\u0ba3\u0bcd\u0bae\u0bc8</text>\n  </g>\n  <g transform=\"translate(100, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <circle cx=\"90\" cy=\"70\" r=\"35\" fill=\"#0284c7\" opacity=\"0.6\" />\n    <text x=\"90\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase I: Principle</text>\n    <text x=\"90\" y=\"155\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">\u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd</text>\n  </g>\n  <path d=\"M 290 250 L 340 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" markerEnd=\"url(#arrow)\" />\n  <g transform=\"translate(350, 140)\">\n    <rect x=\"0\" y=\"0\" width=\"200\" height=\"220\" rx=\"12\" fill=\"#1e293b\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <rect x=\"30\" y=\"30\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0369a1\" opacity=\"0.5\" />\n    <text x=\"100\" y=\"145\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"bold\">Phase II: Mechanism</text>\n    <text x=\"100\" y=\"168\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd</text>\n    <text x=\"100\" y=\"190\" fill=\"#94a3b8\" fontSize=\"11\" textAnchor=\"middle\">Ecosystem Food Webs and Trophic Levels</text>\n  </g>\n  <path d=\"M 560 250 L 610 250\" stroke=\"#38bdf8\" strokeWidth=\"3\" strokeDasharray=\"6,4\" />\n  <g transform=\"translate(620, 160)\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"180\" rx=\"12\" fill=\"#1e293b\" stroke=\"#10b981\" strokeWidth=\"2\" />\n    <polygon points=\"75,40 115,100 35,100\" fill=\"#059669\" opacity=\"0.6\" />\n    <text x=\"75\" y=\"135\" fill=\"#f8fafc\" fontSize=\"14\" textAnchor=\"middle\" fontWeight=\"600\">Phase III: Result</text>\n    <text x=\"75\" y=\"155\" fill=\"#6ee7b7\" fontSize=\"12\" textAnchor=\"middle\">\u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc1 & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1</text>\n  </g>\n</svg>", 
    labels: [
      { id: 'l1', labelEn: "Atmospheric Carbon and Nitrogen Cycles", labelTa: 'முதன்மைப் பண்பு / தத்துவம்', descriptionEn: 'Foundational scientific principle and apparatus setup.', descriptionTa: 'அடிப்படை அறிவியல் தத்துவம் மற்றும் கருவி அமைப்பு.', x: 25, y: 50 }, 
      { id: 'l2', labelEn: "Ecosystem Food Webs and Trophic Levels", labelTa: 'செயல்முறை இயக்கம்', descriptionEn: 'Core operational transition and quantitative relation.', descriptionTa: 'மைய இயக்க நடைமுறை மற்றும் அளவுசார் தொடர்பு.', x: 55, y: 50 }, 
      { id: 'l3', labelEn: "Solid Waste Management: Reduce, Reuse, Recycle & Refuse", labelTa: 'முடிவும் பயன்பாடும்', descriptionEn: 'Experimental outcome, observation, and state-board exam application.', descriptionTa: 'ஆய்வு முடிவு மற்றும் மாநிலத் தேர்வுக்கான முக்கிய பயன்பாடு.', x: 80, y: 50 }
    ]
  },
};

export const CLASS_9_SCIENCE_VIDEOS: Record<string, VideoExplainer> = {
  c9_sci_u1: {
    id: 'vid_c9_sci_u1',
    chapterId: 'c9_sci_u1',
    titleEn: "Visual Concept: Precision Measurement with Vernier Caliper and Micrometer Screw Gauge", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bb5\u0bc6\u0bb0\u0bcd\u0ba9\u0bbf\u0baf\u0bb0\u0bcd \u0b85\u0bb3\u0bb5\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bc1 \u0b85\u0bb3\u0bb5\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0ba4\u0bc1\u0bb2\u0bcd\u0bb2\u0bbf\u0baf \u0b85\u0bb3\u0bb5\u0bc0\u0b9f\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Physical Quantities & Least Count", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Physical Quantities & Least Count", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Measurement, focusing on Physical Quantities & Least Count.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: அளவீடு குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Physical Quantities & Least Count"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Precision in Measurement", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Precision in Measurement", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Precision in Measurement, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Precision in Measurement எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Precision in Measurement"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Real-world Applications", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Real-world Applications", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Real-world Applications to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Real-world Applications தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Real-world Applications"
      }
    ]
  },
  c9_sci_u2: {
    id: 'vid_c9_sci_u2',
    chapterId: 'c9_sci_u2',
    titleEn: "Visual Concept: Graphical Analysis of Distance, Displacement & Acceleration", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba4\u0bca\u0bb2\u0bc8\u0bb5\u0bc1, \u0b87\u0b9f\u0baa\u0bcd\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bb5\u0bb0\u0bc8\u0baa\u0b9f \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bae\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Distance vs Displacement", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Distance vs Displacement", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Motion, focusing on Distance vs Displacement.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: இயக்கம் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Distance vs Displacement"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Velocity-Time Graphs", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Velocity-Time Graphs", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Velocity-Time Graphs, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Velocity-Time Graphs எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Velocity-Time Graphs"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Deriving Equations of Motion", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Deriving Equations of Motion", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Deriving Equations of Motion to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Deriving Equations of Motion தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Deriving Equations of Motion"
      }
    ]
  },
  c9_sci_u3: {
    id: 'vid_c9_sci_u3',
    chapterId: 'c9_sci_u3',
    titleEn: "Visual Concept: Pressure in Fluids, Atmospheric Pressure & Buoyancy", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0baa\u0bbe\u0baf\u0bcd\u0bae \u0b85\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0bae\u0bcd, \u0bb5\u0bb3\u0bbf\u0bae\u0ba3\u0bcd\u0b9f\u0bb2 \u0b85\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bbf\u0ba4\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Thrust and Pressure", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Thrust and Pressure", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Fluids, focusing on Thrust and Pressure.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: பாய்மங்கள் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Thrust and Pressure"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Pascal\u2019s Law Demonstration", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Pascal\u2019s Law Demonstration", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Pascal’s Law Demonstration, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Pascal’s Law Demonstration எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Pascal\u2019s Law Demonstration"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Archimedes Principle & Floatation", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Archimedes Principle & Floatation", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Archimedes Principle & Floatation to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Archimedes Principle & Floatation தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Archimedes Principle & Floatation"
      }
    ]
  },
  c9_sci_u4: {
    id: 'vid_c9_sci_u4',
    chapterId: 'c9_sci_u4',
    titleEn: "Visual Concept: Drift Velocity of Electrons and Electrical Circuits", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b8e\u0bb2\u0b95\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe\u0ba9\u0bcd \u0b93\u0b9f\u0bcd\u0b9f\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b8e\u0bb3\u0bbf\u0baf \u0bae\u0bbf\u0ba9\u0bcd\u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1 \u0baa\u0b95\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0baf\u0bcd\u0bb5\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Electric Potential Difference", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Electric Potential Difference", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Electric Charge and Electric Current, focusing on Electric Potential Difference.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: மின்னூட்டமும் மின்னோட்டமும் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Electric Potential Difference"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Ohm\u2019s Law & Resistance", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Ohm\u2019s Law & Resistance", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Ohm’s Law & Resistance, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Ohm’s Law & Resistance எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Ohm\u2019s Law & Resistance"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Series & Parallel Resistor Networks", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Series & Parallel Resistor Networks", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Series & Parallel Resistor Networks to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Series & Parallel Resistor Networks தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Series & Parallel Resistor Networks"
      }
    ]
  },
  c9_sci_u5: {
    id: 'vid_c9_sci_u5',
    chapterId: 'c9_sci_u5',
    titleEn: "Visual Concept: Electromagnetism, Right-Hand Thumb Rule & Electric Motor Principle", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bae\u0bbf\u0ba9\u0bcd\u0b95\u0bbe\u0ba8\u0bcd\u0ba4\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bbf\u0ba9\u0bcd\u0ba9\u0bcb\u0b9f\u0bbf (Motor) \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Oersted Experiment", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Oersted Experiment", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Magnetism and Electromagnetism, focusing on Oersted Experiment.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: காந்தவியல் மற்றும் மின்காந்தவியல் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Oersted Experiment"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Solenoid Magnetic Field", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Solenoid Magnetic Field", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Solenoid Magnetic Field, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Solenoid Magnetic Field எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Solenoid Magnetic Field"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Motor Principle & Force on Current-Carrying Wire", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Motor Principle & Force on Current-Carrying Wire", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Motor Principle & Force on Current-Carrying Wire to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Motor Principle & Force on Current-Carrying Wire தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Motor Principle & Force on Current-Carrying Wire"
      }
    ]
  },
  c9_sci_u6: {
    id: 'vid_c9_sci_u6',
    chapterId: 'c9_sci_u6',
    titleEn: "Visual Concept: Reflection, Refraction, Snell\u2019s Law and Total Internal Reflection", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b92\u0bb3\u0bbf \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1, \u0b92\u0bb3\u0bbf\u0bb5\u0bbf\u0bb2\u0b95\u0bb2\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0bb4\u0bc1 \u0b85\u0b95 \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Laws of Reflection & Mirror Formula", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Laws of Reflection & Mirror Formula", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Light, focusing on Laws of Reflection & Mirror Formula.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: ஒளி குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Laws of Reflection & Mirror Formula"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Refraction & Snell\u2019s Law", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Refraction & Snell\u2019s Law", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Refraction & Snell’s Law, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Refraction & Snell’s Law எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Refraction & Snell\u2019s Law"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Real vs Virtual Images", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Real vs Virtual Images", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Real vs Virtual Images to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Real vs Virtual Images தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Real vs Virtual Images"
      }
    ]
  },
  c9_sci_u7: {
    id: 'vid_c9_sci_u7',
    chapterId: 'c9_sci_u7',
    titleEn: "Visual Concept: Thermal Expansion, Specific Heat Capacity & Latent Heat", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bb5\u0bc6\u0baa\u0bcd\u0baa \u0bb5\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1, \u0ba4\u0ba9\u0bcd\u0bb5\u0bc6\u0baa\u0bcd\u0baa \u0b8f\u0bb1\u0bcd\u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0ba9\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bb1\u0bc8\u0bb5\u0bc6\u0baa\u0bcd\u0baa\u0bae\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Temperature vs Heat", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Temperature vs Heat", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Heat, focusing on Temperature vs Heat.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: வெப்பம் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Temperature vs Heat"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Specific Heat Capacity (Q = mc\u0394T)", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Specific Heat Capacity (Q = mc\u0394T)", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Specific Heat Capacity (Q = mcΔT), where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Specific Heat Capacity (Q = mcΔT) எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Specific Heat Capacity (Q = mc\u0394T)"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Change of State & Latent Heat", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Change of State & Latent Heat", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Change of State & Latent Heat to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Change of State & Latent Heat தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Change of State & Latent Heat"
      }
    ]
  },
  c9_sci_u8: {
    id: 'vid_c9_sci_u8',
    chapterId: 'c9_sci_u8',
    titleEn: "Visual Concept: Propagation of Sound, Frequency, Wavelength & Echoes", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b92\u0bb2\u0bbf \u0baa\u0bb0\u0bb5\u0bc1\u0ba4\u0bb2\u0bcd, \u0b85\u0ba4\u0bbf\u0bb0\u0bcd\u0bb5\u0bc6\u0ba3\u0bcd, \u0b85\u0bb2\u0bc8\u0ba8\u0bc0\u0bb3\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b8e\u0ba4\u0bbf\u0bb0\u0bca\u0bb2\u0bbf\u0baa\u0bcd\u0baa\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Production & Propagation of Sound", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Production & Propagation of Sound", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Sound, focusing on Production & Propagation of Sound.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: ஒலி குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Production & Propagation of Sound"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Characteristics of Sound Wave", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Characteristics of Sound Wave", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Characteristics of Sound Wave, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Characteristics of Sound Wave எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Characteristics of Sound Wave"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Echo, Reverberation & Ultrasonics in SONAR", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Echo, Reverberation & Ultrasonics in SONAR", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Echo, Reverberation & Ultrasonics in SONAR to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Echo, Reverberation & Ultrasonics in SONAR தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Echo, Reverberation & Ultrasonics in SONAR"
      }
    ]
  },
  c9_sci_u9: {
    id: 'vid_c9_sci_u9',
    chapterId: 'c9_sci_u9',
    titleEn: "Visual Concept: The Solar System, Keplerian Orbits and Deep Space Exploration", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b9a\u0bc2\u0bb0\u0bbf\u0baf \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0bae\u0bcd, \u0ba8\u0bc0\u0bb3\u0bcd\u0bb5\u0b9f\u0bcd\u0b9f\u0baa\u0bcd \u0baa\u0bbe\u0ba4\u0bc8\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbf\u0ba3\u0bcd\u0bb5\u0bc6\u0bb3\u0bbf \u0b86\u0baf\u0bcd\u0bb5\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Heliocentric Model of Copernicus", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Heliocentric Model of Copernicus", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Physics: Universe, focusing on Heliocentric Model of Copernicus.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் இயற்பியல்: அண்டம் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Heliocentric Model of Copernicus"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Kepler\u2019s Law of Ellipses & Areas", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Kepler\u2019s Law of Ellipses & Areas", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Kepler’s Law of Ellipses & Areas, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Kepler’s Law of Ellipses & Areas எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Kepler\u2019s Law of Ellipses & Areas"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Satellites & Gravitational Orbits", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Satellites & Gravitational Orbits", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Satellites & Gravitational Orbits to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Satellites & Gravitational Orbits தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Satellites & Gravitational Orbits"
      }
    ]
  },
  c9_sci_u10: {
    id: 'vid_c9_sci_u10',
    chapterId: 'c9_sci_u10',
    titleEn: "Visual Concept: Pure Substances, Solutions, Colloids and Suspensions", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba4\u0bc2\u0baf \u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bcd, \u0b95\u0bb0\u0bc8\u0b9a\u0bb2\u0bcd\u0b95\u0bb3\u0bcd, \u0b95\u0bc2\u0bb4\u0bcd\u0bae\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba4\u0bca\u0b99\u0bcd\u0b95\u0bb2\u0bcd\u0b95\u0bb3\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Elements, Compounds & Mixtures", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Elements, Compounds & Mixtures", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Matter Around Us, focusing on Elements, Compounds & Mixtures.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: நம்மைச் சுற்றியுள்ள பருப்பொருள்கள் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Elements, Compounds & Mixtures"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Tyndall Effect in Colloids", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Tyndall Effect in Colloids", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Tyndall Effect in Colloids, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Tyndall Effect in Colloids எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Tyndall Effect in Colloids"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Separation Techniques in Modern Chemistry", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Separation Techniques in Modern Chemistry", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Separation Techniques in Modern Chemistry to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Separation Techniques in Modern Chemistry தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Separation Techniques in Modern Chemistry"
      }
    ]
  },
  c9_sci_u11: {
    id: 'vid_c9_sci_u11',
    chapterId: 'c9_sci_u11',
    titleEn: "Visual Concept: Discovery of Subatomic Particles & Electronic Configuration", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b85\u0ba3\u0bc1\u0bb5\u0bbf\u0ba9\u0bcd \u0b89\u0baa \u0ba4\u0bc1\u0b95\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b8e\u0bb2\u0b95\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe\u0ba9\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0bcd\u0bb5\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Rutherford vs Bohr Atomic Models", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Rutherford vs Bohr Atomic Models", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Atomic Structure, focusing on Rutherford vs Bohr Atomic Models.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: அணு அமைப்பு குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Rutherford vs Bohr Atomic Models"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Atomic Number (Z) & Mass Number (A)", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Atomic Number (Z) & Mass Number (A)", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Atomic Number (Z) & Mass Number (A), where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Atomic Number (Z) & Mass Number (A) எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Atomic Number (Z) & Mass Number (A)"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Electronic Configuration (2n\u00b2 rule) & Isotopes", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Electronic Configuration (2n\u00b2 rule) & Isotopes", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Electronic Configuration (2n² rule) & Isotopes to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Electronic Configuration (2n² rule) & Isotopes தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Electronic Configuration (2n\u00b2 rule) & Isotopes"
      }
    ]
  },
  c9_sci_u12: {
    id: 'vid_c9_sci_u12',
    chapterId: 'c9_sci_u12',
    titleEn: "Visual Concept: Mendeleev\u2019s Periodic Law to Moseley\u2019s Modern Table and Periodic Trends", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bae\u0bc6\u0ba3\u0bcd\u0b9f\u0bb2\u0bc0\u0bb5\u0bcd \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0bae\u0bcb\u0bb8\u0bcd\u0bb2\u0bc7 \u0bb5\u0bb0\u0bc8\u0baf\u0bbf\u0bb2\u0bbe\u0ba9 \u0ba8\u0bb5\u0bc0\u0ba9 \u0ba4\u0ba9\u0bbf\u0bae \u0bb5\u0bb0\u0bbf\u0b9a\u0bc8 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Moseley\u2019s Modern Periodic Law", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Moseley\u2019s Modern Periodic Law", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Periodic Classification of Elements, focusing on Moseley’s Modern Periodic Law.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: தனிமங்களின் வகைப்பாடு குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Moseley\u2019s Modern Periodic Law"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: 7 Periods and 18 Groups", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: 7 Periods and 18 Groups", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of 7 Periods and 18 Groups, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: '7 Periods and 18 Groups எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "7 Periods and 18 Groups"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Periodic Trends: Atomic Radius & Electronegativity", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Periodic Trends: Atomic Radius & Electronegativity", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Periodic Trends: Atomic Radius & Electronegativity to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Periodic Trends: Atomic Radius & Electronegativity தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Periodic Trends: Atomic Radius & Electronegativity"
      }
    ]
  },
  c9_sci_u13: {
    id: 'vid_c9_sci_u13',
    chapterId: 'c9_sci_u13',
    titleEn: "Visual Concept: Lewis Dot Structures, Octet Rule and Types of Chemical Bonds", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bb2\u0bc2\u0baf\u0bbf\u0bb8\u0bcd \u0baa\u0bc1\u0bb3\u0bcd\u0bb3\u0bbf \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1, \u0b8e\u0ba3\u0bcd\u0bae \u0bb5\u0bbf\u0ba4\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bc7\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bbf\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc1 \u0bb5\u0b95\u0bc8\u0b95\u0bb3\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Kossel-Lewis Octet Rule", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Kossel-Lewis Octet Rule", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Chemical Bonding, focusing on Kossel-Lewis Octet Rule.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: வேதிப்பிணைப்பு குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Kossel-Lewis Octet Rule"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Formation of Ionic Crystals (NaCl)", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Formation of Ionic Crystals (NaCl)", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Formation of Ionic Crystals (NaCl), where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Formation of Ionic Crystals (NaCl) எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Formation of Ionic Crystals (NaCl)"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Formation of Covalent Molecules (H\u2082O, CH\u2084)", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Formation of Covalent Molecules (H\u2082O, CH\u2084)", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Formation of Covalent Molecules (H₂O, CH₄) to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Formation of Covalent Molecules (H₂O, CH₄) தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Formation of Covalent Molecules (H\u2082O, CH\u2084)"
      }
    ]
  },
  c9_sci_u14: {
    id: 'vid_c9_sci_u14',
    chapterId: 'c9_sci_u14',
    titleEn: "Visual Concept: Arrhenius Theory, pH in Daily Life and Preparation of Salts", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b86\u0bb0\u0bcd\u0bb9\u0bc0\u0ba9\u0bbf\u0baf\u0bb8\u0bcd \u0b95\u0bca\u0bb3\u0bcd\u0b95\u0bc8, \u0b85\u0ba9\u0bcd\u0bb1\u0bbe\u0b9f \u0bb5\u0bbe\u0bb4\u0bcd\u0bb5\u0bbf\u0bb2\u0bcd pH \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b89\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bb5\u0b95\u0bc8\u0b95\u0bb3\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Properties of Acids & Bases", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Properties of Acids & Bases", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Acids, Bases and Salts, focusing on Properties of Acids & Bases.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: அமிலங்கள், காரங்கள் மற்றும் உப்புகள் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Properties of Acids & Bases"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: The pH Scale & Universal Indicators", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: The pH Scale & Universal Indicators", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of The pH Scale & Universal Indicators, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'The pH Scale & Universal Indicators எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "The pH Scale & Universal Indicators"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Neutralization: Acid + Base \u2192 Salt + Water", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Neutralization: Acid + Base \u2192 Salt + Water", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Neutralization: Acid + Base → Salt + Water to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Neutralization: Acid + Base → Salt + Water தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Neutralization: Acid + Base \u2192 Salt + Water"
      }
    ]
  },
  c9_sci_u15: {
    id: 'vid_c9_sci_u15',
    chapterId: 'c9_sci_u15',
    titleEn: "Visual Concept: Catenation, Tetravalency of Carbon and Hydrocarbons", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b9a\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0bbf\u0ba4\u0bcd\u0ba4\u0bca\u0b9f\u0bb0\u0bbe\u0b95\u0bcd\u0b95\u0bae\u0bcd, \u0b95\u0bbe\u0bb0\u0bcd\u0baa\u0ba9\u0bbf\u0ba9\u0bcd \u0ba8\u0bbe\u0ba9\u0bcd\u0bae\u0bc1\u0b95 \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1\u0bae\u0bcd \u0bb9\u0bc8\u0b9f\u0bcd\u0bb0\u0bcb\u0b95\u0bbe\u0bb0\u0bcd\u0baa\u0ba9\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Versatile Nature of Carbon (Catenation & Tetravalency)", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Versatile Nature of Carbon (Catenation & Tetravalency)", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Carbon and Its Compounds, focusing on Versatile Nature of Carbon (Catenation & Tetravalency).', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: கார்பனும் அதன் சேர்மங்களும் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Versatile Nature of Carbon (Catenation & Tetravalency)"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Diamond vs Graphite Crystal Lattices", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Diamond vs Graphite Crystal Lattices", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Diamond vs Graphite Crystal Lattices, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Diamond vs Graphite Crystal Lattices எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Diamond vs Graphite Crystal Lattices"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Alkanes, Alkenes & Functional Groups", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Alkanes, Alkenes & Functional Groups", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Alkanes, Alkenes & Functional Groups to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Alkanes, Alkenes & Functional Groups தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Alkanes, Alkenes & Functional Groups"
      }
    ]
  },
  c9_sci_u16: {
    id: 'vid_c9_sci_u16',
    chapterId: 'c9_sci_u16',
    titleEn: "Visual Concept: Nano-materials, Synthetic Polymers, Dyes and Pharmaceuticals", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba8\u0bbe\u0ba9\u0bcb \u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bcd, \u0b9a\u0bc6\u0baf\u0bb1\u0bcd\u0b95\u0bc8 \u0b87\u0bb4\u0bc8\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0bb5\u0bc7\u0ba4\u0bbf\u0baf\u0bbf\u0baf\u0bb2\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Nanomaterials & Quantum Effects", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Nanomaterials & Quantum Effects", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Chemistry: Applied Chemistry, focusing on Nanomaterials & Quantum Effects.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் வேதியியல்: பயன்பாட்டு வேதியியல் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Nanomaterials & Quantum Effects"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Natural vs Synthetic Polymers", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Natural vs Synthetic Polymers", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Natural vs Synthetic Polymers, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Natural vs Synthetic Polymers எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Natural vs Synthetic Polymers"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: 12 Principles of Green Chemistry", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: 12 Principles of Green Chemistry", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master 12 Principles of Green Chemistry to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, 12 Principles of Green Chemistry தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "12 Principles of Green Chemistry"
      }
    ]
  },
  c9_sci_u17: {
    id: 'vid_c9_sci_u17',
    chapterId: 'c9_sci_u17',
    titleEn: "Visual Concept: Taxonomic Hierarchy, Coelom Types and Chordate Evolution", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bb5\u0bbf\u0bb2\u0b99\u0bcd\u0b95\u0bc1 \u0bb5\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0baf\u0bb2\u0bcd, \u0b89\u0b9f\u0bb1\u0bcd\u0b95\u0bc1\u0bb4\u0bbf \u0bb5\u0b95\u0bc8\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bc1\u0ba8\u0bbe\u0ba3\u0bbf\u0b95\u0bb3\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Basis of Classification: Symmetry & Germ Layers", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Basis of Classification: Symmetry & Germ Layers", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Animal Kingdom, focusing on Basis of Classification: Symmetry & Germ Layers.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: விலங்குலகம் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Basis of Classification: Symmetry & Germ Layers"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Invertebrate Phyla (Porifera to Echinodermata)", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Invertebrate Phyla (Porifera to Echinodermata)", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Invertebrate Phyla (Porifera to Echinodermata), where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Invertebrate Phyla (Porifera to Echinodermata) எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Invertebrate Phyla (Porifera to Echinodermata)"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Vertebrate Classes (Pisces, Amphibia, Reptilia, Aves, Mammalia)", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Vertebrate Classes (Pisces, Amphibia, Reptilia, Aves, Mammalia)", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Vertebrate Classes (Pisces, Amphibia, Reptilia, Aves, Mammalia) to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Vertebrate Classes (Pisces, Amphibia, Reptilia, Aves, Mammalia) தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Vertebrate Classes (Pisces, Amphibia, Reptilia, Aves, Mammalia)"
      }
    ]
  },
  c9_sci_u18: {
    id: 'vid_c9_sci_u18',
    chapterId: 'c9_sci_u18',
    titleEn: "Visual Concept: Plant Histology, Xylem & Phloem Transport and Animal Tissue Function", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba4\u0bbe\u0bb5\u0bb0 \u0b9a\u0bc8\u0bb2\u0bae\u0bcd-\u0baa\u0bc1\u0bb3\u0bcb\u0baf\u0bae\u0bcd \u0b95\u0b9f\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bb5\u0bbf\u0bb2\u0b99\u0bcd\u0b95\u0bc1 \u0ba4\u0b9a\u0bc8 \u0ba8\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Meristematic vs Permanent Tissues in Plants", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Meristematic vs Permanent Tissues in Plants", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Organisation of Tissues, focusing on Meristematic vs Permanent Tissues in Plants.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: திசுக்களின் அமைப்பு குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Meristematic vs Permanent Tissues in Plants"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Complex Tissues: Xylem and Phloem", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Complex Tissues: Xylem and Phloem", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Complex Tissues: Xylem and Phloem, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Complex Tissues: Xylem and Phloem எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Complex Tissues: Xylem and Phloem"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Epithelial, Connective, Muscular & Nervous Tissues in Animals", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Epithelial, Connective, Muscular & Nervous Tissues in Animals", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Epithelial, Connective, Muscular & Nervous Tissues in Animals to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Epithelial, Connective, Muscular & Nervous Tissues in Animals தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Epithelial, Connective, Muscular & Nervous Tissues in Animals"
      }
    ]
  },
  c9_sci_u19: {
    id: 'vid_c9_sci_u19',
    chapterId: 'c9_sci_u19',
    titleEn: "Visual Concept: Plant Tropic & Nastic Movements, Photosynthesis and Transpiration", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b92\u0bb3\u0bbf\u0b9a\u0bcd\u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8, \u0ba4\u0bbe\u0bb5\u0bb0 \u0b87\u0baf\u0b95\u0bcd\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b87\u0bb2\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1\u0bb3\u0bc8 \u0bb5\u0bb4\u0bbf\u0baf\u0bc7 \u0ba8\u0bc0\u0bb0\u0bbe\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bcb\u0b95\u0bcd\u0b95\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Phototropism, Geotropism & Hydrotropism", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Phototropism, Geotropism & Hydrotropism", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Plant Physiology, focusing on Phototropism, Geotropism & Hydrotropism.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: தாவர உடலியல் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Phototropism, Geotropism & Hydrotropism"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Mechanism of Stomatal Transpiration", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Mechanism of Stomatal Transpiration", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Mechanism of Stomatal Transpiration, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Mechanism of Stomatal Transpiration எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Mechanism of Stomatal Transpiration"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Photosynthesis: Light vs Dark Reactions", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Photosynthesis: Light vs Dark Reactions", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Photosynthesis: Light vs Dark Reactions to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Photosynthesis: Light vs Dark Reactions தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Photosynthesis: Light vs Dark Reactions"
      }
    ]
  },
  c9_sci_u20: {
    id: 'vid_c9_sci_u20',
    chapterId: 'c9_sci_u20',
    titleEn: "Visual Concept: Human Organ Systems: Digestion, Respiration and Excretion", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0bae\u0ba9\u0bbf\u0ba4 \u0b9a\u0bc6\u0bb0\u0bbf\u0bae\u0bbe\u0ba9 \u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd, \u0b9a\u0bc1\u0bb5\u0bbe\u0b9a \u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bbf\u0bb1\u0bc1\u0ba8\u0bc0\u0bb0\u0b95 \u0ba8\u0bc6\u0baa\u0bcd\u0bb0\u0bbe\u0ba9\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Alimentary Canal & Digestive Enzymes", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Alimentary Canal & Digestive Enzymes", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Organ Systems in Animals, focusing on Alimentary Canal & Digestive Enzymes.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: விலங்குகளின் உறுப்பு மண்டலங்கள் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Alimentary Canal & Digestive Enzymes"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Respiratory Gas Exchange in Alveoli", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Respiratory Gas Exchange in Alveoli", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Respiratory Gas Exchange in Alveoli, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Respiratory Gas Exchange in Alveoli எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Respiratory Gas Exchange in Alveoli"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Structure and Function of the Nephron", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Structure and Function of the Nephron", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Structure and Function of the Nephron to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Structure and Function of the Nephron தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Structure and Function of the Nephron"
      }
    ]
  },
  c9_sci_u21: {
    id: 'vid_c9_sci_u21',
    chapterId: 'c9_sci_u21',
    titleEn: "Visual Concept: Balanced Nutrition, Vitamins, Mineral Functions and Disease Prevention", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b9a\u0bae\u0b9a\u0bcd\u0b9a\u0bc0\u0bb0\u0bcd \u0b89\u0ba3\u0bb5\u0bc1, \u0bb5\u0bc8\u0b9f\u0bcd\u0b9f\u0bae\u0bbf\u0ba9\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b8a\u0b9f\u0bcd\u0b9f\u0b9a\u0bcd\u0b9a\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1 \u0ba8\u0bcb\u0baf\u0bcd\u0b95\u0bb3\u0bcd", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Carbohydrates, Proteins and Healthy Fats", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Carbohydrates, Proteins and Healthy Fats", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Nutrition and Health, focusing on Carbohydrates, Proteins and Healthy Fats.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: ஊட்டச்சத்து மற்றும் ஆரோக்கியம் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Carbohydrates, Proteins and Healthy Fats"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Fat-Soluble vs Water-Soluble Vitamins", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Fat-Soluble vs Water-Soluble Vitamins", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Fat-Soluble vs Water-Soluble Vitamins, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Fat-Soluble vs Water-Soluble Vitamins எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Fat-Soluble vs Water-Soluble Vitamins"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Malnutrition: Kwashiorkor, Marasmus & Anemia", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Malnutrition: Kwashiorkor, Marasmus & Anemia", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Malnutrition: Kwashiorkor, Marasmus & Anemia to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Malnutrition: Kwashiorkor, Marasmus & Anemia தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Malnutrition: Kwashiorkor, Marasmus & Anemia"
      }
    ]
  },
  c9_sci_u22: {
    id: 'vid_c9_sci_u22',
    chapterId: 'c9_sci_u22',
    titleEn: "Visual Concept: Beneficial vs Pathogenic Microbes, Antibiotics and Immune Response", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0ba8\u0ba9\u0bcd\u0bae\u0bc8 \u0baa\u0baf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bcb\u0baf\u0bcd \u0b89\u0ba3\u0bcd\u0b9f\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba8\u0bc1\u0ba3\u0bcd\u0ba3\u0bc1\u0baf\u0bbf\u0bb0\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bcb\u0baf\u0bcd\u0ba4\u0bcd\u0ba4\u0b9f\u0bc1\u0baa\u0bcd\u0baa\u0bc1", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Bacterial Shapes & Cellular Ultrastructure", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Bacterial Shapes & Cellular Ultrastructure", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: World of Microbes, focusing on Bacterial Shapes & Cellular Ultrastructure.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: நுண்ணுயிரிகளின் உலகம் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Bacterial Shapes & Cellular Ultrastructure"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Viruses: Lytic vs Lysogenic Cycles", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Viruses: Lytic vs Lysogenic Cycles", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Viruses: Lytic vs Lysogenic Cycles, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Viruses: Lytic vs Lysogenic Cycles எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Viruses: Lytic vs Lysogenic Cycles"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Vaccines, Antibiotics and Natural Immunity", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Vaccines, Antibiotics and Natural Immunity", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Vaccines, Antibiotics and Natural Immunity to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Vaccines, Antibiotics and Natural Immunity தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Vaccines, Antibiotics and Natural Immunity"
      }
    ]
  },
  c9_sci_u23: {
    id: 'vid_c9_sci_u23',
    chapterId: 'c9_sci_u23',
    titleEn: "Visual Concept: Organic Farming, Vermicomposting, Sericulture and Dairy Management", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b87\u0baf\u0bb1\u0bcd\u0b95\u0bc8 \u0bb5\u0bc7\u0bb3\u0bbe\u0ba3\u0bcd\u0bae\u0bc8, \u0bae\u0ba3\u0bcd\u0baa\u0bc1\u0bb4\u0bc1 \u0b89\u0bb0\u0bae\u0bcd, \u0baa\u0b9f\u0bcd\u0b9f\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0bb4\u0bc1 \u0bb5\u0bb3\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbe\u0bb2\u0bcd\u0baa\u0ba3\u0bcd\u0ba3\u0bc8 \u0bae\u0bc7\u0bb2\u0bbe\u0ba3\u0bcd\u0bae\u0bc8", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Hydroponics and Aeroponics in Modern Farming", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Hydroponics and Aeroponics in Modern Farming", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Economic Biology, focusing on Hydroponics and Aeroponics in Modern Farming.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: பயன்பாட்டு உயிரியல் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Hydroponics and Aeroponics in Modern Farming"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Apiculture and Honey Extraction", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Apiculture and Honey Extraction", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Apiculture and Honey Extraction, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Apiculture and Honey Extraction எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Apiculture and Honey Extraction"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Vermicomposting: Bed Preparation & Organic Nutrients", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Vermicomposting: Bed Preparation & Organic Nutrients", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Vermicomposting: Bed Preparation & Organic Nutrients to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Vermicomposting: Bed Preparation & Organic Nutrients தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Vermicomposting: Bed Preparation & Organic Nutrients"
      }
    ]
  },
  c9_sci_u24: {
    id: 'vid_c9_sci_u24',
    chapterId: 'c9_sci_u24',
    titleEn: "Visual Concept: Ecosystem Dynamics, Ecological Footprint and Waste Management (4Rs)", 
    titleTa: "\u0b95\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf\u0b95\u0bcd \u0b95\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1: \u0b9a\u0bc2\u0bb4\u0bb2\u0bcd \u0bae\u0ba3\u0bcd\u0b9f\u0bb2 \u0b86\u0bb1\u0bcd\u0bb1\u0bb2\u0bcd \u0b93\u0b9f\u0bcd\u0b9f\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba4\u0bbf\u0b9f\u0b95\u0bcd\u0b95\u0bb4\u0bbf\u0bb5\u0bc1 \u0bae\u0bc7\u0bb2\u0bbe\u0ba3\u0bcd\u0bae\u0bc8 (4R \u0ba4\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0bcd)", 
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Scientific Foundation: Atmospheric Carbon and Nitrogen Cycles", 
        titleTa: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baf\u0bb2\u0bcd \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8: Atmospheric Carbon and Nitrogen Cycles", 
        visualDescription: 'Laboratory apparatus setup demonstrating the physical and natural phenomena with high-contrast animated highlights.',
        narrationEn: 'Welcome to Class 9 Science. In this lesson, we explore foundational concepts of Biology: Environmental Science, focusing on Atmospheric Carbon and Nitrogen Cycles.', 
        narrationTa: 'ஒன்பதாம் வகுப்பு அறிவியலுக்கு நல்வரவு. இப்பாடத்தில் உயிரியல்: சூழ்நிலை அறிவியல் குறித்த முக்கியக் கருத்துகளைத் துல்லியமாகப் பயில்வோம்.', 
        conceptKey: "Atmospheric Carbon and Nitrogen Cycles"
      },
      {
        sceneNumber: 2,
        titleEn: "Core Mechanism: Ecosystem Food Webs and Trophic Levels", 
        titleTa: "\u0bae\u0bc8\u0baf\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8: Ecosystem Food Webs and Trophic Levels", 
        visualDescription: 'Step-by-step microscopic and macroscopic animation visualizing the laws, formulas, and structural transformations.',
        narrationEn: 'Observe the underlying mechanism of Ecosystem Food Webs and Trophic Levels, where scientific laws predict behavior and measurable outcomes.', 
        narrationTa: 'Ecosystem Food Webs and Trophic Levels எவ்வாறு இயங்குகிறது என்பதையும், அதற்கான கணிதச் சமன்பாடுகள் மற்றும் அறிவியல் விதிகளை இங்கு காணலாம்.', 
        conceptKey: "Ecosystem Food Webs and Trophic Levels"
      },
      {
        sceneNumber: 3,
        titleEn: "Board Exam Mastery & Applications: Solid Waste Management: Reduce, Reuse, Recycle & Refuse", 
        titleTa: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb4\u0bbf\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf & \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bcd: Solid Waste Management: Reduce, Reuse, Recycle & Refuse", 
        visualDescription: 'Summary graphic detailing frequently tested 2-mark, 4-mark and 7-mark board exam questions and everyday technological applications.',
        narrationEn: 'In conclusion, master Solid Waste Management: Reduce, Reuse, Recycle & Refuse to secure full marks in your Tamil Nadu State Board Science examinations.', 
        narrationTa: 'இறுதியாக, Solid Waste Management: Reduce, Reuse, Recycle & Refuse தொடர்பான வினா-விடைகளை முழுமையாகப் பயின்று தேர்வில் அதிக மதிப்பெண்களைப் பெறுங்கள்.', 
        conceptKey: "Solid Waste Management: Reduce, Reuse, Recycle & Refuse"
      }
    ]
  },
};