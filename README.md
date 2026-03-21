# Secret Word

### About

A word guessing game inspired by [Palavras Secretas from Geniol](https://www.geniol.com.br/palavras/palavras-secretas/). The goal is to discover the secret word by choosing letters one at a time and interpreting the color hints.

### How to play

- Choose the word length (5 to 10 letters) from the top menu
- Click the letters on the virtual keyboard to guess the word
- You have up to **7 attempts**
- Colors indicate each letter's status:
  - 🟢 **Green** — letter is in the correct position
  - 🟡 **Yellow** — letter is present but in the wrong position
  - ⬜ **White** — letter is not in the word

### Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

### Running locally

```bash
# Clone the repository
git clone https://github.com/dulipe/secretWord.git

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
| `npm run test` | Runs the tests |
| `npx tsc --noEmit` | Type checks the project |

### Credits

Inspired by [Palavras Secretas](https://www.geniol.com.br/palavras/palavras-secretas/) from Geniol.
