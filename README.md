# Secret Word

![Secret Word gameplay](./public/screenshot.png)

> A word guessing game built with React and TypeScript.  
> 🔗 **[Live demo](https://secretword.filipe-santos.dev)**

---

## About

I built Secret Word to practice React architecture and TypeScript while working on something I actually enjoy. It pushed me to think about state management, custom hooks, and how to structure a project that could scale."

Secret Word is a word guessing game inspired by [Palavras Secretas from Geniol](https://www.geniol.com.br/palavras/palavras-secretas/). The goal is to discover the secret word by selecting letters one at a time and reading the color-coded feedback.

The project was built as part of my journey into full stack development, with a focus on clean architecture, TypeScript, and test coverage.

---

## Features

- 🌍 **Bilingual** — Portuguese and English
- 🔡 **Multiple word lengths** — choose between 5 and 10 letters
- 🎨 **Color-coded feedback** — green, yellow, and white hints
- 💾 **Per-word save state** — switch between word lengths without losing progress
- 📱 **Responsive** — works on mobile and desktop
- ✅ **Tested** — unit and integration tests with Vitest and Testing Library

---

## Tech stack

| Technology | Purpose |
|---|---|
| React + TypeScript | UI and type safety |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Vitest + Testing Library | Testing |
| Context API | Global language state |

---

## Getting started

```bash
# Clone the repository
git clone https://github.com/dulipe/secretWord.git

cd secretWord

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Generates the production build |
| `npm run test` | Runs the test suite |
| `npx tsc --noEmit` | Type checks the project |

---

## Project structure

```
src/
├── app/          # Root component
├── components/   # UI components
├── context/      # Language context
├── data/         # Words JSON (PT and EN)
├── domain/       # Game logic, utils, types and config
└── hooks/        # Custom hooks
```

---

## Credits

Inspired by [Palavras Secretas](https://www.geniol.com.br/palavras/palavras-secretas/) from Geniol.

---

## Author

**Filipe Santos** — Full Stack Developer  
🔗 [filipe-santos.dev](https://www.filipe-santos.dev)
