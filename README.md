# <img src="./public/logo.svg" alt="Code Canvas Logo" width="30" height="30"> Code Canvas – AI-Powered Web App Builder  

**Canvas for Code: Sketch, Prompt, Ship**  
*Your imagination is the sketch. Code Canvas brings it to life.*  

🚀 **[Live Demo](https://code-canvas-ivory.vercel.app/)**  

Code Canvas is an **AI-powered web app builder** that transforms natural language prompts into fully functional websites.  
It provides an **interactive coding experience** with a dual-panel interface:  
- **Chatbot-style prompt panel** on the left  
- **Website view** on the right, with two tabs:  
  - **Code** – complete source code with a file explorer and folder structure  
  - **Demo** – a live, running version of the generated app inside a secure Docker sandbox  

The platform is designed for **experimentation with modern full-stack technologies, AI coding agents, and secure cloud sandboxes.**  

---

## ✨ Features  

- 🔹 **AI-driven coding agent** powered by OpenAI GPT-4 that generates Next.js applications.  
- 🔹 **Secure execution environment** with [E2B sandboxes](https://e2b.dev), enabling real-time app previews with live URLs.  
- 🔹 **Background job orchestration** via [Inngest](https://www.inngest.com/) to handle long-running code generation tasks.  
- 🔹 **Project dashboard** where users can revisit their previous “Canvases,” view source code, and run live demos.  
- 🔹 **Full authentication system** using Clerk for sign-in/sign-up.  
- 🔹 **Dark mode support** throughout the application.  
- 🔹 **Docker-powered custom sandbox templates** for different runtime environments.  
- 🔹 **Postgres (via Neon)** for storing generated projects and user data.  

---

## 🛠️ Tech Stack  

This project is built with some of the latest technologies in web development and cloud infrastructure:  

- **Frontend / Frameworks**  
  - [Next.js 15](https://nextjs.org/) with **Server Components** and **SSR**  
  - [React 19](https://react.dev/)  

- **Styling & UI**  
  - [TailwindCSS v4](https://tailwindcss.com/)  
  - [shadcn/ui](https://ui.shadcn.com/)  

- **Backend / API**  
  - [tRPC](https://trpc.io/) with [TanStack Query](https://tanstack.com/query) for type-safe full-stack APIs  
  - [Prisma ORM](https://www.prisma.io/)  

- **Database & Storage**  
  - [Postgres (Neon)](https://neon.tech/)  

- **Authentication**  
  - [Clerk](https://clerk.dev/)  

- **Infrastructure**  
  - [Inngest](https://www.inngest.com/) for background jobs and AI agent orchestration  
  - [E2B Sandbox](https://e2b.dev/) for secure cloud execution of AI-generated code  
  - [Docker](https://www.docker.com/) for sandbox templates  
  - [Vercel](https://vercel.com/) for deployment  

- **AI & Agents**  
  - [OpenAI GPT-4](https://openai.com/) for code generation and agent reasoning  

---

## 🎥 Demo Video  

👉 [Watch Demo Video](https://your-video-link.com)  

---

## 📸 Screenshots  

| Home Page | Code View | Live Demo View |  
|--------------|--------------|----------------------------|  
| ![Prompt Screenshot](./assets/home-page.png) | ![Project Screenshot](./assets/code-view.png) | ![Demo Screenshot](./assets/live-demo-view.png) |  

---

## 📂 Project Structure  

```bash
├── public/
│   └── logo.svg
├── sandbox-templates/
│   └── nextjs/           # Docker + scripts for secure sandboxing
├── src/
│   ├── app/              # Next.js App Router (home, auth, projects)
│   │   ├── (home)/       # Home, pricing, auth pages
│   │   ├── api/          # API routes (Inngest, tRPC)
│   │   ├── projects/     # Project detail pages
│   ├── components/       # Shared UI (file explorer, code view, etc.)
│   ├── inngest/          # Background job functions & client
│   ├── lib/              # Database & utility functions
│   ├── modules/          # Feature modules (home, projects, messages, usage)
│   ├── trpc/             # API layer (routers, client, server)
│   └── types.ts          # Shared TypeScript types
└── prisma/
    └── schema.prisma     # Database schema
```

---

## 🚀 Getting Started  

### 1. Clone the repo

```bash
git clone https://github.com/your-username/code-canvas.git
cd code-canvas
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Setup environment variables

Rename `env.name` to `.env` and fill in the required values:

```bash
# List of required environment variables
DATABASE_URL
NEXT_PUBLIC_APP_URL

# OpenAI
OPENAI_API_KEY

# E2B
E2B_API_KEY

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
```

### 4. Run the development server and inngest development server

```bash
npm run dev
npx inngest-cli@ dev 
```

Your app will be running at http://localhost:3000 and the inngest server will be running at http://localhost:8288 🎉.

---

## 🧑‍💻 What I Learned

- Building **AI-driven developer tools** with GPT-4 and agent-based workflows.
- Orchestrating **background jobs** and multi-step processes with Inngest.
- Deploying and previewing code inside **secure, isolated sandboxes** using E2B and Docker.
- Designing a **full-stack application with type safety** using Next.js, tRPC, Prisma, and TypeScript.
- Managing authentication and user sessions with Clerk.
- Leveraging modern styling frameworks like TailwindCSS v4 and shadcn/ui.
- Cloud-native deployment with Vercel and Neon.

---

## 📌 Future Improvements

- Support for additional frameworks (e.g., SvelteKit, Astro).
- Collaborative editing and shared projects.
- Fine-tuned AI models for faster and more reliable code generation.
- Export to GitHub integration.

---

## 📄 License

This project is for demonstration and educational purposes.

---
