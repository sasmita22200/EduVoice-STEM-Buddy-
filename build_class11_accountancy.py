# -*- coding: utf-8 -*-
"""
Generator for Class 11 Accountancy (Units 1 to 14)
Tamil Nadu Samacheer Kalvi State Board Master Dataset
"""
import json

units_data = [
    {
        "id": "c11_acc_u1",
        "num": 1,
        "titleEn": "Unit 1: Introduction to Accounting",
        "titleTa": "அலகு 1: கணக்கியல் ஓர் அறிமுகம்",
        "readTime": 12,
        "bodyEn": """### 1. Evolution and Meaning of Accounting
Accounting is the process of identifying, measuring, recording, classifying, summarizing, and interpreting financial transactions to communicate economic information to decision-makers. In ancient India, Kautilya's *Arthashastra* detailed book-keeping practices. Modern double entry accounting was formalized by Franciscan monk Luca Pacioli in 1494 in Venice in his work *Summa de Arithmetica*.

### 2. Definitions of Accounting
* **American Institute of Certified Public Accountants (AICPA):** "Accounting is the art of recording, classifying, and summarising in a significant manner and in terms of money, transactions and events which are, in part at least, of a financial character, and interpreting the results thereof."
* **American Accounting Association (AAA):** "The process of identifying, measuring and communicating economic information to permit informed judgements and decisions by users of the information."

### 3. Book-keeping vs. Accounting
| Parameter | Book-keeping | Accounting |
| :--- | :--- | :--- |
| **Scope** | Recording & classifying journal & ledger | Summarizing, analyzing & communicating financial health |
| **Stage** | Primary stage / clerical | Secondary stage / analytical |
| **Special Knowledge** | Elementary clerical knowledge suffices | Requires high analytical skill & conceptual mastery |
| **Financial Position** | Does not reveal net profit or financial position | Ascertains operational results & balance sheet solvency |

### 4. Users of Accounting Information
* **Internal Users:** Owners, Management, and Employees who require data for operational planning, budgeting, and performance incentives.
* **External Users:** Investors, Creditors/Suppliers, Banks and Financial Institutions, Customers, Tax Authorities (CBDT, GSTN), Government, and Researchers.""",
        "bodyTa": """### 1. கணக்கியலின் தோற்றமும் பொருளும்
கணக்கியல் என்பது நிதிசார் நடவடிக்கைகளை அடையாளம் காணுதல், அளவிடுதல், பதிவு செய்தல், வகைப்படுத்துதல், சுருக்கி வரைதல் மற்றும் முடிவுகளைப் பகுப்பாய்வு செய்து உரிய முடிவெடுப்பவர்களுக்குத் தெரிவிக்கும் முறையான செயல்முறையாகும். கி.பி. 1494 இல் இத்தாலியைச் சேர்ந்த லூகா பேசியோலி (Luca Pacioli) இரட்டைப் பதிவு முறையை முதன்முதலில் நூலாக வெளியிட்டார்.

### 2. கணக்கியல் வரைவிலக்கணங்கள்
* **அமெரிக்கப் பொதுக் கணக்காளர்கள் நிறுவனம் (AICPA):** "கணக்கியல் என்பது குறைந்தபட்சம் பகுதி அளவேனும் நிதித்தன்மை கொண்ட நடவடிக்கைகள் மற்றும் நிகழ்வுகளை பணத்தின் மதிப்பில் முறையாகப் பதிவு செய்தல், வகைப்படுத்துதல், சுருக்கி வரைதல் மற்றும் அதன் முடிவுகளை விளக்குதல் ஆகியவற்றை உள்ளடக்கிய ஒரு கலையாகும்."

### 3. ஏட்டுப் பராமரிப்பு மற்றும் கணக்கியல் ஒப்பீடு
ஏட்டுப் பராமரிப்பு என்பது கணக்கியலின் முதன்மை நிலை ஆகும். இது குறிப்பேடு மற்றும் பேரேடுகளில் தினசரி பதிவுகளைப் பதிவதோடு முடிகிறது. கணக்கியல் என்பது ஏட்டுப் பராமரிப்பைத் தொடர்ந்து இறுதி கணக்குகளைத் தயாரித்தல், லாப-நஷ்டத்தைக் கண்டறிதல் மற்றும் நிதிநிலையை ஆய்வு செய்தலை உள்ளடக்கியதாகும்.""",
        "principles": [
            {"nameEn": "Double Entry Equation", "nameTa": "இரட்டைப் பதிவுச் சமன்பாடு", "formula": "Assets = Capital + Liabilities", "explanationEn": "Every transaction impacts at least two aspects with equal debit and credit value.", "explanationTa": "ஒவ்வொரு நிதி நடவடிக்கைக்கும் சமமான பற்று மற்றும் வரவுத் தன்மை உண்டு."}
        ],
        "workedExamples": [
            {
                "questionEn": "Identify whether the following is recorded in accounting: 'The Managing Director is unwell and away for 3 months.'",
                "questionTa": "பின்வரும் நிகழ்வு கணக்கேடுகளில் பதியப்படுமா: 'நிர்வாக இயக்குநர் உடல்நலக் குறைவால் 3 மாதங்கள் விடுப்பில் உள்ளார்.'",
                "solutionEn": "Not recorded. According to the Money Measurement Concept, only events that can be expressed in monetary terms are recorded in the books of accounts.",
                "solutionTa": "பதியப்படாது. பண மதிப்பீட்டுக் கருத்தின்படி பணத்தால் அளவிடக்கூடிய நிதி நடவடிக்கைகள் மட்டுமே கணக்கேடுகளில் பதிவு செய்யப்படும்."
            }
        ],
        "tips": [
            {"tipEn": "Book-keeping is the foundation; accounting is the superstructure built upon it.", "tipTa": "ஏட்டுப் பராமரிப்பு என்பது அடித்தளம்; கணக்கியல் என்பது அதன் மீது எழுப்பப்படும் கட்டடம்."}
        ],
        "keyPointsEn": [
            "Luca Pacioli published the first treatise on Double Entry Book-keeping in 1494.",
            "AICPA defines accounting as the art of recording, classifying, and summarizing financial transactions.",
            "Users are classified into Internal (Owners, Management) and External (Banks, Creditors, Tax Authorities).",
            "Non-monetary transactions like employee disputes or health issues cannot be recorded in accounts."
        ],
        "keyPointsTa": [
            "லூகா பேசியோலி 1494 இல் இரட்டைப் பதிவு முறையை வெளியிட்டார்.",
            "கணக்கியல் என்பது நிதிசார் நடவடிக்கைகளை பதிவு செய்யும், வகைப்படுத்தும் கலை.",
            "பயனாளர்கள் அகப் பயனாளர்கள் (உரிமையாளர், மேலாண்மை) மற்றும் புறப் பயனாளர்கள் (வங்கிகள், அரசு, கடன் ஈந்தோர்) எனப் பிரிக்கப்படுகின்றனர்.",
            "பணத்தால் அளவிட முடியாத நிகழ்வுகள் கணக்கேடுகளில் பதியப்பட மாட்டாது."
        ],
        "simpleEn": "Accounting is the language of business that tracks money coming in and going out, ensuring stakeholders know whether the business is making a profit or suffering a loss.",
        "simpleTa": "கணக்கியல் என்பது வணிகத்தின் மொழியாகும். இது வணிகத்தின் வரவு, செலவு, லாபம், நட்டம் மற்றும் நிதிநிலையை முறையான விதிமுறைகளுடன் துல்லியமாகக் காட்டுகிறது.",
        "cheatSheet": [
            {"formula": "Capital = Assets - Liabilities", "note": "Basic Accounting Equation"},
            {"formula": "Luca Pacioli (1494)", "note": "Father of Modern Accounting"}
        ],
        "quiz": [
            {
                "qEn": "Who is acknowledged as the father of modern double-entry book-keeping?",
                "qTa": "நவீன இரட்டைப் பதிவு கணக்கு முறையின் தந்தை என்று அழைக்கப்படுபவர் யார்?",
                "optsEn": ["Adam Smith", "Luca Pacioli", "Alfred Marshall", "F.W. Taylor"],
                "optsTa": ["ஆடம் ஸ்மித்", "லூகா பேசியோலி", "ஆல்பிரட் மார்ஷல்", "எஃப்.டபிள்யூ. டெய்லர்"],
                "ans": 1,
                "expEn": "Luca Pacioli, an Italian mathematician and Franciscan friar, published the first double-entry book in Venice in 1494.",
                "expTa": "1494 இல் இத்தாலிய கணிதவியலாளரான லூகா பேசியோலி இரட்டைப் பதிவு முறை நூலை முதன்முதலில் வெளியிட்டார்."
            },
            {
                "qEn": "Which of the following is considered an internal user of accounting information?",
                "qTa": "பின்வருவனவற்றுள் கணக்கியல் தகவலின் அகப் பயனாளர் யார்?",
                "optsEn": ["Creditors", "Commercial Banks", "Chief Financial Officer (Management)", "Tax Department"],
                "optsTa": ["கடன் ஈந்தோர்", "வணிக வங்கிகள்", "தலைமை நிதி அதிகாரி (மேலாண்மை)", "வரித்துறை"],
                "ans": 2,
                "expEn": "Management (Directors, CFO, managers) works inside the enterprise to plan and direct operations.",
                "expTa": "மேலாண்மை மற்றும் உரிமையாளர்கள் வணிகத்தின் உள்ளே இருந்து முடிவெடுக்கும் அகப் பயனாளர்கள் ஆவர்."
            },
            {
                "qEn": "The primary branch of accounting that records financial transactions to determine profit or loss is:",
                "qTa": "லாப நட்டத்தைக் கண்டறிய நிதி நடவடிக்கைகளைப் பதிவு செய்யும் முதன்மைக் கணக்கியல் பிரிவு எது?",
                "optsEn": ["Cost Accounting", "Financial Accounting", "Management Accounting", "Social Responsibility Accounting"],
                "optsTa": ["அடக்கவிலைக் கணக்கியல்", "நிதிக் கணக்கியல்", "மேலாண்மைக் கணக்கியல்", "சமூகப் பொறுப்புக் கணக்கியல்"],
                "ans": 1,
                "expEn": "Financial accounting focuses on recording transactions and preparing trading, P&L accounts, and balance sheet.",
                "expTa": "நிதிக் கணக்கியல் வணிக நடவடிக்கைகளை முறையாகப் பதிவு செய்து வணிக முடிவுகளைத் தருகிறது."
            }
        ],
        "diagTitleEn": "Accounting Cycle & Information Flowchart",
        "diagTitleTa": "கணக்கியல் சுழற்சி மற்றும் தகவல் பாய்வு வரைபடம்",
        "diagDescEn": "Visual representation of the sequential accounting cycle from transaction to financial reports.",
        "diagDescTa": "நடவடிக்கை தொடங்கி இறுதி நிதி அறிக்கைகள் வரையிலான கணக்கியல் சுழற்சி படிநிலைகள்.",
        "svg": '<svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="400" fill="#f8fafc" rx="12"/><g transform="translate(40, 40)"><circle cx="360" cy="160" r="130" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8"/><rect x="40" y="20" width="130" height="50" rx="8" fill="#ea580c"/><text x="105" y="50" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">1. Transactions</text><rect x="295" y="0" width="130" height="50" rx="8" fill="#f97316"/><text x="360" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">2. Journal</text><rect x="550" y="20" width="130" height="50" rx="8" fill="#fb923c"/><text x="615" y="50" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">3. Ledger</text><rect x="550" y="250" width="130" height="50" rx="8" fill="#0284c7"/><text x="615" y="280" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">4. Trial Balance</text><rect x="295" y="270" width="130" height="50" rx="8" fill="#0369a1"/><text x="360" y="300" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">5. Final Accounts</text><rect x="40" y="250" width="130" height="50" rx="8" fill="#0f172a"/><text x="105" y="280" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">6. Analysis</text><path d="M 170 45 L 290 25" stroke="#f97316" strokeWidth="3" markerEnd="url(#arr)"/><path d="M 430 25 L 545 45" stroke="#fb923c" strokeWidth="3"/><path d="M 615 75 L 615 245" stroke="#0284c7" strokeWidth="3"/><path d="M 545 285 L 430 295" stroke="#0369a1" strokeWidth="3"/><path d="M 290 295 L 175 285" stroke="#0f172a" strokeWidth="3"/><path d="M 105 245 L 105 75" stroke="#ea580c" strokeWidth="3"/></g></svg>',
        "labels": [
            {"id": "l1", "labelEn": "Journalizing", "labelTa": "குறிப்பேட்டில் பதிதல்", "descriptionEn": "Recording transactions with debit/credit entries.", "descriptionTa": "பற்று வரவு விதிகளின்படி குறிப்பேட்டில் பதிதல்.", "x": 24, "y": 14},
            {"id": "l2", "labelEn": "Ledger Posting", "labelTa": "பேரேட்டில் எடுத்தெழுதுதல்", "descriptionEn": "Classifying into specific T-accounts.", "descriptionTa": "கணக்குகளை வகைப்படுத்தி எடுத்தெழுதுதல்.", "x": 80, "y": 14},
            {"id": "l3", "labelEn": "Final Accounts", "labelTa": "இறுதிக் கணக்குகள்", "descriptionEn": "Trading, Profit & Loss, and Balance Sheet.", "descriptionTa": "வியாபாரக் கணக்கு, லாப நட்டக் கணக்கு மற்றும் இருப்புநிலைக் குறிப்பு.", "x": 50, "y": 80}
        ],
        "video": {
            "titleEn": "Animated Storyboard: Journey of an Accounting Transaction",
            "titleTa": "அசைவூட்டக் காட்சி: ஒரு வணிக நடவடிக்கையின் கணக்கியல் பயணம்",
            "duration": 5,
            "scenes": [
                {"scene": 1, "titleEn": "The Cash Sale", "titleTa": "ரொக்க விற்பனை", "visual": "Customer enters shop, buys goods for Rs. 5000 cash; voucher issued.", "narrationEn": "Every business activity starts with a source document proving the transaction occurred.", "narrationTa": "ஒவ்வொரு வணிக நடவடிக்கையும் ரொக்க ரசீது அல்லது இடாப்பு போன்ற மூல ஆவணத்துடன் தொடங்குகிறது.", "concept": "Source Document", "takeaway": "No entry without documentary evidence."},
                {"scene": 2, "titleEn": "Dual Effect in Journal", "titleTa": "குறிப்பேட்டில் இரட்டைப் பதிவு", "visual": "Split screen showing Cash coming in (Debit) and Goods going out (Credit).", "narrationEn": "Under double-entry system, Cash account is debited and Sales account is credited.", "narrationTa": "உள்வரும் ரொக்கக் கணக்கு பற்று வைக்கப்பட்டு, விற்பனைக் கணக்கு வரவு வைக்கப்படுகிறது.", "concept": "Debit and Credit", "takeaway": "Assets increase by Debit; Sales increase by Credit."},
                {"scene": 3, "titleEn": "Financial Destination", "titleTa": "இறுதி நிதிநிலை அறிக்கை", "visual": "Voucher ledger totals moving into the Balance Sheet equation.", "narrationEn": "At year-end, balances flow into Trading, P&L, and Balance Sheet.", "narrationTa": "ஆண்டின் முடிவில் அனைத்துப் பேரேட்டு இருப்புகளும் இறுதி கணக்குகளில் பிரதிபலிக்கின்றன.", "concept": "Accounting Cycle", "takeaway": "Provides clear view of profit and business wealth."}
            ]
        }
    }
]

print("Script template ready")
