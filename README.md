# DevFlow — AI-Powered Browser IDE ⚡

DevFlow is a blazing-fast, AI-integrated web IDE that runs entirely in your browser. It combines real-time code execution, an intelligent AI assistant, and multi-stack project templates — all inside a modern developer-first interface.

Built with Next.js App Router, WebContainers, Monaco Editor, and local LLMs via Ollama, DevFlow enables you to code, run, and debug projects without leaving the browser.

---

# 🚀 Features

### 🔐 Authentication

* OAuth login using Google & GitHub
* Secure authentication with NextAuth
* Session-based access control

### 🎨 Modern Developer UI

* Built using TailwindCSS + ShadCN UI
* Clean, minimal developer-first layout
* Fully responsive design

### 🌗 Theme Support

* Dark / Light mode toggle
* System theme detection
* Persistent user preference

### 🧱 Project Templates

Start instantly with pre-configured stacks:

* React
* Next.js
* Express
* Hono
* Vue
* Angular

### 🗂️ File Explorer

* Create files & folders
* Rename & delete
* Drag-and-drop support
* Tree-based structure

### 🖊️ Monaco Editor Integration

* Syntax highlighting
* IntelliSense support
* Code formatting
* Keyboard shortcuts
* Multiple file tabs

### 💡 AI Code Suggestions

* Powered by Ollama local models
* Offline AI completions
* Smart code generation
* Context-aware suggestions

**Shortcuts**

* Ctrl + Space → Trigger AI
* Double Enter → Trigger AI
* Tab → Accept suggestion

### ⚙️ WebContainers Runtime

* Run frontend & backend apps instantly
* No local Node.js installation required
* In-browser sandbox environment

### 💻 Embedded Terminal

* Powered by xterm.js
* Fully interactive shell
* Run npm, node, git commands
* Live project output

### 🤖 AI Chat Assistant

* Ask coding questions
* Refactor code
* Debug errors
* Explain files
* Multi-file context support

---

# 🧱 Tech Stack

| Layer          | Technology                 |
| -------------- | -------------------------- |
| Framework      | Next.js 15 (App Router)    |
| Language       | TypeScript                 |
| Styling        | TailwindCSS + ShadCN UI    |
| Editor         | Monaco Editor              |
| Runtime        | WebContainers              |
| Terminal       | xterm.js                   |
| AI             | Ollama (Local LLMs)        |
| Authentication | NextAuth (Google + GitHub) |
| Database       | MongoDB                    |
| Deployment     | Vercel / Netlify           |

---

# 🛠️ Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/your-username/devflow.git
cd devflow
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Setup Environment Variables

Create `.env.local`

```bash
cp .env.example .env.local
```

Fill in values:

```
AUTH_SECRET=your_auth_secret

AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret

AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret

DATABASE_URL=your_mongodb_connection_string

NEXTAUTH_URL=http://localhost:3000
```

---

## 4. Start Ollama Model

Make sure Ollama (and Docker if required) is installed.

```bash
ollama run codellama
```

Or use any supported model:

```
codellama
deepseek-coder
phi
mistral
```

---

## 5. Run Dev Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 📁 Project Structure

```
devflow
│
├── app/                # Next.js App Router
├── components/         # UI components
├── editor/             # Monaco + Terminal + Explorer
├── utils/              # WebContainer + AI helpers
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
├── .env.example
└── README.md
```

---

# ⌨️ Keyboard Shortcuts

| Shortcut     | Action                |
| ------------ | --------------------- |
| Ctrl + Space | Trigger AI suggestion |
| Double Enter | Trigger AI            |
| Tab          | Accept AI completion  |
| /            | Open command palette  |

---

# ✨ Roadmap

* [x] OAuth Authentication
* [x] Multiple Templates
* [x] Monaco Editor
* [x] AI Code Suggestions
* [x] WebContainers Runtime
* [x] Terminal Integration
* [x] AI Chat Assistant
* [ ] GitHub Repo Import
* [ ] Save Projects to DB
* [ ] Real-time Collaboration
* [ ] Plugin System
* [ ] One-click Deploy
* [ ] Multi-file AI editing
* [ ] Team Workspaces

---

# 🧠 AI Powered By

* Ollama Local Models
* CodeLlama
* DeepSeek Coder
* Mistral
* Phi

---

# 🌍 Why DevFlow?

* No setup required
* Runs entirely in browser
* Offline AI coding
* Real-time execution
* Multi-stack support
* Developer-first UI

---

# 📸 Preview

Add screenshots here

```
/public/preview.png
```

---

# 🤝 Contributing

Contributions are welcome!

```bash
fork → create branch → commit → push → PR
```

---

# 📄 License

MIT License

---

# ⭐ Support

If you like DevFlow, consider giving it a star ⭐
