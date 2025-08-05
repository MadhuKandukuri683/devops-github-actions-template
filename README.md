# ✅ Goal

Build a DevOps-ready Template Project using GitHub Actions

We’ll create a Node.js Hello World API with CI/CD using GitHub Actions. You’ll be able to:

- Run automated tests
- Lint your code
- Deploy to GitHub Pages (static) or simulate a deploy step

---

## 🧱 Step-by-Step Instructions (No Local Desktop Required)

### 1. Create a GitHub Repository

- Go to [GitHub New Repo](https://github.com/new)
- Name the repo: `devops-github-actions-template`
- Select public or private
- Initialize with a README
- Click **Create repository**

---

### 2. Open in VSCode.dev

- Press `.` on your keyboard from your GitHub repo page  
  **OR**
- Visit: `https://vscode.dev/github/your-username/devops-github-actions-template`

---

### 3. Create Your Project Structure

Inside VSCode.dev, create these files one by one using the sidebar ➕ button:

```
devops-github-actions-template/
├── .github/
│   └── workflows/
│       └── nodejs.yml       <-- GitHub Actions CI/CD
├── src/
│   └── index.js             <-- Hello World App
├── test/
│   └── test.js              <-- Simple test
├── package.json             <-- Project metadata
└── .eslintrc.json           <-- Linting rules
```

---

### 4. Add Node.js Project Files

#### `package.json`

```json
{
  "name": "devops-template",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "node test/test.js",
    "lint": "eslint src/**/*.js"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  }
}
```

#### `src/index.js`

```js
function sayHello() {
  return 'Hello, DevOps!';
}

console.log(sayHello());
module.exports = sayHello;
```

#### `test/test.js`

```js
const assert = require('assert');
const sayHello = require('../src/index');

assert.strictEqual(sayHello(), 'Hello, DevOps!');
console.log('✅ Test passed');
```

#### `.eslintrc.json`

```json
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
}
```

---

### 5. Install Dependencies (via GitHub Codespaces or CI)

- You can’t run `npm install` in vscode.dev, but GitHub Actions will do it for you.

---

### 6. Create GitHub Actions Workflow

#### `.github/workflows/nodejs.yml`

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm install
      - name: Lint code
        run: npm run lint
      - name: Run tests
        run: npm test
```

---

### 7. Commit & Push

- Use the Source Control tab in vscode.dev
- Commit all your files with a message: `initial commit with CI`
- Push the changes

---

### 8. Check GitHub Actions Run

- Go to your GitHub repo
- Click the **Actions** tab
- See the workflow running:
  - ✅ Checkout
  - ✅ Setup Node
  - ✅ Install
  - ✅ Lint
  - ✅ Test

---

### 🎁 Optional: Add Deploy Step (Mock)

To simulate deployment, add to your workflow:

```yaml
- name: Deploy (simulate)
  run: echo "🚀 Deployed successfully!"
```

Or use `gh-pages` or Vercel for actual static hosting if needed.

---

## 🚀 Result

You now have:

- ✅ A GitHub-only Node.js app
- ✅ CI/CD pipeline with:
  - Auto test
  - Auto lint
- ✅ No need for local machine setup
