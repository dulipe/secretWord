import { useState, useEffect } from "react";
import wordsData from "@/data/words.json";

export function useWords(options) {
  const [words, setWords] = useState({});

  useEffect(() => {
    const grouped = {};

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