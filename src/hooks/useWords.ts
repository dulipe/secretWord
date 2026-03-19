import { useState, useEffect } from "react";
import wordsData from "@/data/words.json";
import { GameOption } from "@/domain/gameConfig";
import { WordEntry } from "@/domain/types";

export function useWords(options: GameOption[]) {
  const [words, setWords] = useState<Record<number, WordEntry>>({});

  useEffect(() => {
    const grouped: Record<number, WordEntry> = {};

    options.forEach((opt) => {
      const filtered = wordsData.filter(
        (w) => w.word.length === opt.value
      );

      if (filtered.length > 0) {
        const random =
          filtered[Math.floor(Math.random() * filtered.length)];

        grouped[opt.value] = {
          word: random.word.toUpperCase(),
          definitions: random.definitions,
        };
      }
    });

    setWords(grouped);
  }, [options]);

  return { words };
}