import { isLastAttempt } from "@/domain/gameUtils";
import { Cell, ModalState } from "@/domain/types";

type GameRoundResult =
  | { status: "win"; modal: ModalState }
  | { status: "lose"; modal: ModalState }
  | { status: "continue"; modal: null };

type ResolveGameRoundParams = {
  formedWord: string;
  secretWord: string;
  guesses: Cell[][];
  definitions: string[];
  language: "pt" | "en";
};

type BuildModalMessageParams = {
  isWin: boolean;
  secretWord: string;
  definitions: string[];
  language: "pt" | "en";
};

export function resolveGameRound({
  formedWord,
  secretWord,
  guesses,
  definitions,
  language,
}: ResolveGameRoundParams): GameRoundResult {
  if (formedWord === secretWord) {
    return {
      status: "win",
      modal: buildModalMessage({ isWin: true, secretWord, definitions, language }),
    };
  }

  if (isLastAttempt(guesses)) {
    return {
      status: "lose",
      modal: buildModalMessage({ isWin: false, secretWord, definitions, language }),
    };
  }

  return { status: "continue", modal: null };
}

export function buildModalMessage({
  isWin,
  secretWord,
  definitions,
  language,
}: BuildModalMessageParams): ModalState {
  const title = isWin
    ? language === "pt" ? "Acertou! ✔️" : "You got it! ✔️"
    : language === "pt" ? "Errou! ❌" : "Game over! ❌";

  return {
    title,
    word: secretWord,
    definitions,
  };
}