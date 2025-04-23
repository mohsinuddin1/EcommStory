```md
# Vite React Storybook + Chromatic

## Overview
This project uses **Vite**, **React**, **Storybook**, and **Chromatic** for UI component development and visual regression testing.

## Tech Stack
- **Vite**: Fast build tool for React.
- **React**: JavaScript library for building UIs.
- **Storybook**: Develop and showcase UI components in isolation.
- **Chromatic**: Visual regression tracking and automated previews.

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run Storybook locally:**
   ```bash
   npm run storybook
   ```

4. **Create Component Stories:**
   - Add `.stories.js` files under `src/components/` (e.g., Button, Modal).
   - Example story:
     ```js
     import Button from './Button';
     export default { title: 'Button' };
     export const Default = () => <Button label="Click Me" />;
     ```

---

## Chromatic Setup

1. **Install Chromatic:**
   ```bash
   npm install --save-dev chromatic
   ```

2. **Link Chromatic:**
   ```bash
   npx chromatic --project-token=<your_project_token>
   ```

3. **CI Integration (GitHub Actions)**:
   Create `.github/workflows/chromatic.yml`:
   ```yaml
   name: Chromatic

   on:
     push:
       branches:
         - main

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

4. **Add Chromatic Token to GitHub Secrets**: Add `CHROMATIC_PROJECT_TOKEN` to GitHub secrets.

---

## Contribution Guide

1. Fork the repo and create a new branch.
2. Add components in `src/components/` and create `*.stories.js` files.
3. Push changes and create a pull request.

---

## Useful Commands

- **Run Storybook locally**:
  ```bash
  npm run storybook
  ```
- **Build Storybook** (for deployment):
  ```bash
  npm run build-storybook
  ```
- **Run Chromatic**:
  ```bash
  npx chromatic --project-token=<your_token>
  ```

## License
MIT License - see [LICENSE](LICENSE) for details.
```
