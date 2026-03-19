import { isLastAttempt } from "@/domain/gameUtils";

type Cell = {
  letter: string;
  status: "correct" | "present" | "absent" | null;
};

type ModalMessage = {
  title: string;
  word: string;
  definitions: string[];
};

type GameRoundResult =
  | { status: "win"; modal: ModalMessage }
  | { status: "lose"; modal: ModalMessage }
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
}: BuildModalMessageParams): ModalMessage {
  return {
    title: isWin ? "Acertou! ✔️" : "Errou! ❌",
    word: secretWord,
    definitions,
  };
}