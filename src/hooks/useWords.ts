import { useState, useEffect } from "react";
import wordsDataPt from "@/data/words-pt.json";
import wordsDataEn from "@/data/words-en.json";
import { GameOption } from "@/domain/gameConfig";
import { WordEntry } from "@/domain/types";

type Language = "pt" | "en";

const wordsData: Record<Language, WordEntry[]> = {
  pt: wordsDataPt as WordEntry[],
  en: wordsDataEn as WordEntry[],
};

export function useWords(options: GameOption[], language: Language) {
  const [words, setWords] = useState<Record<number, WordEntry>>({});

  useEffect(() => {
    const grouped: Record<number, WordEntry> = {};
    const data = wordsData[language];

    options.forEach((opt) => {
      const filtered = data.filter(
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
  }, [options, language]);

  return { words };
}