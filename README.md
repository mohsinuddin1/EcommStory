# 📘 Vite + React + Storybook + Chromatic

A modern UI component library setup using **Vite**, **React**, **Storybook**, and **Chromatic** for isolated development, design consistency, and automated visual testing.

---

## ⚙️ Project Workflow

### ✅ Initialization
- Set up **Storybook** in the existing React (Vite) project.
- Install required dependencies:
  ```bash
  npm install
  npm run storybook
  ```

### 📁 Story Structure
- Create `.stories.js/.ts` for at least 5 reusable components:
  - `Button`, `Card`, `Modal`, `Header`, `Input`
- Organize stories:
  ```
  src/
  └── components/
      └── Button/
          ├── Button.jsx
          └── Button.stories.js
  ```

### 🎨 Theming
- Align Storybook styles with the main application for a seamless dev/design experience.

---

## 🌈 Chromatic Integration

### 🔄 Visual Regression & Previews
- Install Chromatic:
  ```bash
  npm install --save-dev chromatic
  ```
- Publish Storybook:
  ```bash
  npx chromatic --project-token=<your_token>
  ```
- View published build:  
  [🔗 Chromatic Build Preview](https://www.chromatic.com/build?appId=6808d88c436966fe263ce7ea&number=1)

### 🧪 GitHub Actions (CI/CD)
- Add `.github/workflows/chromatic.yml`:
  ```yaml
  name: Chromatic
  on:
    push:
      branches: [main]
  jobs:
    chromatic:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - run: npm install
        - uses: chromaui/action@v1
          with:
            projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
  ```

---




## 🤝 Contributing

1. Fork the repo and create a feature branch
2. Add your component + `.stories.js`
3. Push and open a PR

---

## 📄 License

MIT
```
