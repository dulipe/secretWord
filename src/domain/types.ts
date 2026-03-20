export type CellStatus = "correct" | "present" | "absent" | null;

export type Cell = {
  letter: string;
  status: CellStatus;
};

export type WordStatus = "solved" | "unsolved" | "playing";

export type KeyStatus = "correct" | "present" | "absent";

export type WordEntry = {
  word: string;
  definitions: string[];
};

export type ModalState = {
  title: string;
  word: string;
  definitions: string[];
};

export type SavedGame = {
  guesses: Cell[][];
  keyStatuses: Record<string, CellStatus>;
  visibleKeys: string[];
  modal: ModalState;
};