# Vite + Vue + Workbox PWA

This project demonstrates how to use **Service Workers** with **Vite**, **Vue 3**, and **Workbox** to enable smarter asset caching, offline capabilities, and performance optimization.

---

##  Getting Started

### 1. Install dependencies:

```bash
npm install

### 2. Run in development mode:
npm run dev

⚠️ Note:
Service Workers only work in production mode by default.
If you want to test them locally, you must build the project and serve it using a static file server (like vite preview or serve).
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.
Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

Production Build:

npm run build
npm run preview

npm run build generates the optimized production files.
npm run preview serves your built app with a local server (simulates production).

Folder Structure:
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── sw.ts  # Your Workbox setup
│   └── main.ts
├── vite.config.ts
└── ...
