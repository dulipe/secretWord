import { MAX_ATTEMPTS } from "@/domain/gameConfig";

export function initializeGuesses(wordLength) {
  return Array.from({ length: MAX_ATTEMPTS }, () =>
    Array.from({ length: wordLength }, () => ({
      letter: "",
      status: "",
    }))
  );
}

export function getLetterStatus(secretWord, letter, index) {
  if (!secretWord) return "";

  if (secretWord[index] === letter) {
    return "correct";
  }

  if (secretWord.includes(letter)) {
    return "present";
  }

  return "";
}

export function isLastAttempt(guesses) {
  const filledRows = guesses.filter((row) =>
    row.every((c) => c.letter !== "")
  ).length;

  return filledRows === MAX_ATTEMPTS;
}

export function getKeysToShow(row) {
  return row
    .filter((c) => c.status === "correct" || c.status === "present")
    .map((c) => c.letter);
}