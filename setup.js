// setup.js
const fs = require("fs");
const path = require("path");

const structure = {
  javascript: [
    "Closures",
    "Scopes & Hoisting",
    "This, Call, Apply, Bind",
    "Prototypes & Inheritance",
    "Promises & Async/Await",
    "Event Loop",
    "Functional Patterns (Currying, Memoization)",
    "Modules (CommonJS, ESM)",
    "Error Handling",
    "ES6+ Features"
  ],
  css: [
    "Flexbox & Grid",
    "Responsive Design",
    "Animations & Transitions",
    "Utility CSS / Tailwind",
    "Accessibility (A11y)",
    "Modern CSS (Container Queries, Aspect Ratio)"
  ],
  react: [
    "Core Hooks",
    "Advanced Hooks",
    "Component Patterns",
    "State Management",
    "React Performance",
    "Testing React Apps"
  ],
  nextjs: [
    "Routing (Pages vs App)",
    "Rendering Models (SSR, SSG, CSR, ISR)",
    "Data Fetching Methods",
    "API Routes",
    "Server Components",
    "Edge Middleware"
  ],
  optimization: [
    "Core Web Vitals",
    "Code Splitting",
    "Caching Strategies",
    "Lazy Loading"
  ],
  testing: [
    "Unit Testing (Jest)",
    "Integration Testing (RTL)",
    "E2E Testing (Cypress)",
    "Mocking APIs"
  ],
  git: [
    "Git Basics",
    "Branching Strategies",
    "Rebase, Stash, Cherry-Pick",
    "Git Hooks (Husky)",
    "GitHub Workflow & CI"
  ]
};

function createCategoryReadme(folder, topics) {
  let content = `# 📘 ${folder.toUpperCase()}\n\n`;

  topics.forEach(topic => {
    content += `## 🔹 ${topic}\n`;
    content += `### 📘 Overview\n- \n\n`;
    content += `### 🧪 Practice Tasks\n- [ ] \n\n`;
    content += `### 🧠 Key Takeaways\n- \n\n---\n\n`;
  });

  const folderPath = path.join(".", folder);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  const readmePath = path.join(folderPath, "README.md");
  fs.writeFileSync(readmePath, content);
}

function generateVault(structure) {
  Object.entries(structure).forEach(([folder, topics]) => {
    createCategoryReadme(folder, topics);
  });
}

generateVault(structure);
console.log("✅ Vault structure with topic READMEs created!");
