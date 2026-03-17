import { useState, useEffect } from "react";

import {
  initializeGuesses,
  getLetterStatus,
  getKeysToShow,
} from "@/domain/gameUtils";

import { resolveGameRound } from "@/domain/gameLogic";
import { ALPHABET } from "@/domain/gameConfig";

export function useGameLogic(words, options) {
  const [selected, setSelected] = useState(options[0].value);
  const [guesses, setGuesses] = useState([]);
  const [keyStatuses, setKeyStatuses] = useState({});
  const [visibleKeys, setVisibleKeys] = useState(ALPHABET);
  const [statusWords, setStatusWords] = useState({});
  const [savedGames, setSavedGames] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    word: "",
    definitions: [],
  });

  const secretWord = words[selected]?.word;
  const definitions = words[selected]?.definitions;

  useEffect(() => {
    if (savedGames[selected]) {
      setGuesses(savedGames[selected].guesses);
      setKeyStatuses(savedGames[selected].keyStatuses);
      setVisibleKeys(savedGames[selected].visibleKeys);
    } else {
      setGuesses(initializeGuesses(selected));
      setKeyStatuses({});
      setVisibleKeys(ALPHABET);
    }
  }, [selected, savedGames]);

  const saveCurrentGame = () => {
    setSavedGames((prev) => ({
      ...prev,
      [selected]: { guesses, keyStatuses, visibleKeys },
    }));
  };

  const handleKeyPress = (letter) => {
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
      if (current === "present" && status === "") return prev;

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
      });

      if (result.status !== "continue") {
        setModal(result.modal);
        setIsModalOpen(true);

        setStatusWords((prev) => ({
          ...prev,
          [selected]: result.status === "win" ? "solved" : "unsolved",
        }));

        saveCurrentGame();
      } else {
        const keysToShow = getKeysToShow(row);

        setVisibleKeys((prev) => [
          ...new Set([...prev, ...keysToShow]),
        ]);
      }
    }
  };

  const handleSelect = (value) => {
    saveCurrentGame();
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