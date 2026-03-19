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
};

type BuildModalMessageParams = {
  isWin: boolean;
  secretWord: string;
  definitions: string[];
};

export function resolveGameRound({
  formedWord,
  secretWord,
  guesses,
  definitions,
}: ResolveGameRoundParams): GameRoundResult {
  if (formedWord === secretWord) {
    return {
      status: "win",
      modal: buildModalMessage({ isWin: true, secretWord, definitions }),
    };
  }

  if (isLastAttempt(guesses)) {
    return {
      status: "lose",
      modal: buildModalMessage({ isWin: false, secretWord, definitions }),
    };
  }

  return {
    status: "continue",
    modal: null,
  };
}

export function buildModalMessage({
  isWin,
  secretWord,
  definitions,
}: BuildModalMessageParams): ModalState {
  return {
    title: isWin ? "Acertou! ✔️" : "Errou! ❌",
    word: secretWord,
    definitions,
  };
}