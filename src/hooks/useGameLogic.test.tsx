import { renderHook } from "@testing-library/react";
import { useGameLogic } from "./useGameLogic";
import { GameOption } from "@/domain/gameConfig";
import { LanguageContext } from "@/context/LanguageContext";

const mockWords: Record<number, { word: string; definitions: string[] }> = {
  5: { word: "APPLE", definitions: ["A fruit"] },
};

const options: GameOption[] = [{ value: 5 }];

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <LanguageContext.Provider value={{ language: "pt" }}>
    {children}
  </LanguageContext.Provider>
);

describe("useGameLogic", () => {
  it("initializes the game correctly", () => {
    const { result } = renderHook(
      () => useGameLogic(mockWords, options),
      { wrapper }
    );

    expect(result.current.selected).toBe(5);
    expect(result.current.guesses.length).toBe(7);
    expect(result.current.guesses[0].length).toBe(5);
  });
});