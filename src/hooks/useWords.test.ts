import { renderHook, waitFor } from "@testing-library/react";
import { useWords } from "./useWords";
import { vi } from "vitest";
import { GameOption } from "@/domain/gameConfig";

vi.mock("@/data/words.json", () => ({
  default: [
    { word: "APPLE", definitions: ["A fruit"] },
    { word: "BANANA", definitions: ["Yellow fruit"] },
  ],
}));

const options: GameOption[] = [
  { label: "5 Letters", value: 5 },
  { label: "6 Letters", value: 6 },
];

describe("useWords hook", () => {
  it("correctly filters words by size", async () => {
    const { result } = renderHook(() => useWords(options));

    await waitFor(() => {
      expect(result.current.words).toBeDefined();
      });

    expect(result.current.words[5].word).toBe("APPLE");
    expect(result.current.words[6].word).toBe("BANANA");
  });
});