# 🌐 GlobalJobMatch AI

> Match Indian talent to global opportunities — built for i12 HR Drive & Vibe Coding Hackathon 2026

AI-powered job matching tool that takes a student's skills/resume and returns:
- **Top 3 job matches** with percentage scores and skill gap analysis
- **Personalized skill roadmap** to close the gaps
- **Culture brief** for US and South Korea workplace norms

Built with React (frontend) + FastAPI (backend) + Anthropic Claude API.

---

## 📁 Folder Structure

```
global-job-match/
├── backend/
│   ├── main.py              # FastAPI app entry point
│   ├── requirements.txt     # Python dependencies
│   ├── .env.example         # Copy to .env and add your API key
│   ├── routes/
│   │   ├── health.py        # GET / and /health
│   │   └── match.py         # POST /api/match
│   └── services/
│       ├── matcher.py       # Core AI matching engine
│       ├── roadmap.py       # Skill gap + learning plan generator
│       └── culture.py       # Culture brief data
└── frontend/
    ├── package.json
    ├── public/index.html
    └── src/
        ├── App.js            # Root component + state
        ├── index.js          # React entry point
        ├── index.css         # Global styles
        ├── App.css           # Layout + animations
        ├── components/
        │   ├── Header.js/css
        │   ├── InputForm.js/css
        │   ├── ResultsDashboard.js/css
        │   ├── JobCard.js/css
        │   ├── RoadmapSection.js/css
        │   ├── CultureSection.js/css
        │   └── Footer.js/css
        └── services/
            └── api.js        # Axios API calls
```

---

## 🚀 Quick Start

### 1. Clone & Setup

```bash
git clone https://github.com/yourusername/global-job-match.git
cd global-job-match
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate       # Mac/Linux
# venv\Scripts\activate        # Windows

# Install dependencies
pip install -r requirements.txt

# Set your API key
cp .env.example .env
# Edit .env and add: ANTHROPIC_API_KEY=your_key_here

# Run the server
python main.py
# Server starts at http://localhost:8000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
# Opens at http://localhost:3000
```

---

## 🛠 Running in Different IDEs

### VS Code
1. Open the `global-job-match` folder
2. Install the **Python** and **ES7+ React** extensions
3. Open two terminals: one for backend, one for frontend (see above)
4. Use the built-in debugger for FastAPI by adding `.vscode/launch.json`

### Kiro / Cursor / Windsurf
- Same as VS Code — open the root folder, run backend + frontend in split terminals

### Google AI Studio (Gemini API alternative)
- Replace `anthropic` in `matcher.py` and `roadmap.py` with `google.generativeai`
- Change model calls to `gemini-1.5-pro`
- Everything else stays the same

### Antigravity / Any Cloud IDE
- Backend: `python main.py` (port 8000)
- Frontend: `npm start` (port 3000)
- Make sure ports are exposed/forwarded

---

## 🔑 API Keys

Get your Anthropic API key at: https://console.anthropic.com

Add it to `backend/.env`:
```
ANTHROPIC_API_KEY=sk-ant-...
```

---

## 🧪 Test the API

Once backend is running:

```bash
curl -X POST http://localhost:8000/api/match \
  -H "Content-Type: application/json" \
  -d '{
    "resume": "Python, React, REST APIs, 2 hackathon projects, B.Tech CSE",
    "role": "Software Engineer",
    "country": "South Korea",
    "salary_range": "Entry level"
  }'
```

---

## 📊 Architecture

```
User Input (resume + prefs)
        ↓
   FastAPI Backend
        ↓
   Claude AI (Anthropic)  ← scores jobs from mock DB
        ↓
   ┌────────────────────┐
   │  Job Matches (3)   │
   │  Skill Roadmap (4) │
   │  Culture Brief     │
   └────────────────────┘
        ↓
   React Frontend Dashboard
```

---

## 🏆 Hackathon Notes

- **Event**: i12 HR Drive & Vibe Coding Hackathon 2026
- **Theme**: Open-Source AI Project
- **Target judges**: Callus Company (HR), IIMSTC (India–Korea–US delegation)
- **Demo tip**: Use "Use demo profile" button to fill a sample profile, hit match, show live AI results

---

## 📄 License

MIT — open source, fork it, build on it.
