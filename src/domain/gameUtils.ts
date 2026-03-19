import { MAX_ATTEMPTS } from "@/domain/gameConfig";
import { Cell, CellStatus } from "@/domain/types";

export function initializeGuesses(wordLength: number): Cell[][] {
  return Array.from({ length: MAX_ATTEMPTS }, () =>
    Array.from({ length: wordLength }, () => ({
      letter: "",
      status: null,
    }))
  );
}

export function getLetterStatus(
  secretWord: string,
  letter: string,
  index: number
): CellStatus {
  if (!secretWord) return null;

  if (secretWord[index] === letter) return "correct";

  if (secretWord.includes(letter)) return "present";

  return null;
}

export function isLastAttempt(guesses: Cell[][]): boolean {
  const filledRows = guesses.filter((row) =>
    row.every((c) => c.letter !== "")
  ).length;

  return filledRows === MAX_ATTEMPTS;
}

export function getKeysToShow(row: Cell[]): string[] {
  return row
    .filter((c) => c.status === "correct" || c.status === "present")
    .map((c) => c.letter);
}