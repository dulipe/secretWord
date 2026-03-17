import { isLastAttempt } from "@/domain/gameUtils";

export function resolveGameRound({
  formedWord,
  secretWord,
  guesses,
  definitions,
}) {
  if (formedWord === secretWord) {
    return {
      status: "win",
      modal: buildModalMessage({
        isWin: true,
        secretWord,
        definitions,
      }),
    };
  }

  if (isLastAttempt(guesses)) {
    return {
      status: "lose",
      modal: buildModalMessage({
        isWin: false,
        secretWord,
        definitions,
      }),
    };
  }

  return {
    status: "continue",
    modal: null,
  };
}

export function buildModalMessage({ isWin, secretWord, definitions }) {
  return {
    title: isWin ? "Acertou! ✔️" : "Errou! ❌",
    word: secretWord,
    definitions,
  };
}