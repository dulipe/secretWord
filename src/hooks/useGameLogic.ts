import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

import {
  initializeGuesses,
  getLetterStatus,
  getKeysToShow,
} from "@/domain/gameUtils";

import { resolveGameRound } from "@/domain/gameLogic";
import { ALPHABET, GameOption } from "@/domain/gameConfig";
import { Cell, CellStatus, WordStatus, ModalState, SavedGame, WordEntry } from "@/domain/types";

type KeyStatuses = Record<string, CellStatus>;

export function useGameLogic(
  words: Record<number, WordEntry>,
  options: GameOption[]
) {
  const [selected, setSelected] = useState<number>(options[0].value);
  const [guesses, setGuesses] = useState<Cell[][]>([]);
  const [keyStatuses, setKeyStatuses] = useState<KeyStatuses>({});
  const [visibleKeys, setVisibleKeys] = useState<string[]>(ALPHABET);
  const [statusWords, setStatusWords] = useState<Record<number, WordStatus>>({});
  const [savedGames, setSavedGames] = useState<Record<number, SavedGame>>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalState>({
    title: "",
    word: "",
    definitions: [],
  });

  const { language } = useLanguage();

  const secretWord = words[selected]?.word;
  const definitions = words[selected]?.definitions;

  useEffect(() => {
    if (savedGames[selected]) {
      setGuesses(savedGames[selected].guesses);
      setKeyStatuses(savedGames[selected].keyStatuses);
      setVisibleKeys(savedGames[selected].visibleKeys);
      setModal(savedGames[selected].modal);
    } else {
      setGuesses(initializeGuesses(selected));
      setKeyStatuses({});
      setVisibleKeys(ALPHABET);
      setModal({ title: "", word: "", definitions: [] });
    }
  }, [selected, savedGames]);

  const saveCurrentGame = (currentModal: ModalState) => {
    setSavedGames((prev) => ({
      ...prev,
      [selected]: { guesses, keyStatuses, visibleKeys, modal: currentModal },
    }));
  };

  const handleKeyPress = (letter: string) => {
    const newGuesses = [...guesses];

    const rowIndex = guesses.findIndex((row) =>
      row.some((c) => c.letter === "")
    );

    if (rowIndex === -1) return;

    const row = newGuesses[rowIndex];
    const colIndex = row.findIndex((c) => c.letter === "");

    if (colIndex === -1) return;

    const status = getLetterStatus(secretWord, letter, colIndex);

    row[colIndex] = { letter, status };

    setKeyStatuses((prev) => {
      const current = prev[letter];

      if (current === "correct") return prev;
      if (current === "present" && status === null) return prev;

      return { ...prev, [letter]: status };
    });

    setGuesses([...newGuesses]);

    setVisibleKeys((prev) => prev.filter((k) => k !== letter));

    if (colIndex === selected - 1) {
      const formedWord = row.map((c) => c.letter).join("");

      const result = resolveGameRound({
        formedWord,
        secretWord,
        guesses: newGuesses,
        definitions,
        language
      });

      if (result.status !== "continue") {
        setModal(result.modal);
        setIsModalOpen(true);

        setStatusWords((prev) => ({
          ...prev,
          [selected]: result.status === "win" ? "solved" : "unsolved",
        }));

        saveCurrentGame(result.modal);
      } else {
        const keysToShow = getKeysToShow(row);

        setVisibleKeys((prev) => [
          ...new Set([...prev, ...keysToShow]),
        ]);
      }
    }
  };

  const handleSelect = (value: number) => {
    saveCurrentGame(modal);
    setSelected(value);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return {
    selected,
    guesses,
    keyStatuses,
    visibleKeys,
    statusWords,
    isModalOpen,
    modal,
    handleKeyPress,
    handleSelect,
    handleClose,
  };
}