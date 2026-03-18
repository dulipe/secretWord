import { renderHook } from "@testing-library/react";
import { useGameLogic } from "./useGameLogic";

const mockWords = {
  5: { word: "APPLE", definitions: ["A fruit"] },
};

const options = [{ label: "5 Letters", value: 5 }];

describe("useGameLogic", () => {
  it("initializes the game correctly", () => {
    const { result } = renderHook(() =>
      useGameLogic(mockWords, options)
    );

    expect(result.current.selected).toBe(5);
    expect(result.current.guesses.length).toBe(7);
    expect(result.current.guesses[0].length).toBe(5);
  });
});