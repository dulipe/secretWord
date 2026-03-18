import { render, screen } from "@testing-library/react";
import WordGrid from "./WordGrid";

describe("WordGrid", () => {
  it("renderiza as letras corretamente", () => {
    const guesses = [
      [
        { letter: "A", status: null },
        { letter: "P", status: null },
      ],
    ];

    render(<WordGrid guesses={guesses} status="playing" />);

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("P")).toBeInTheDocument();
  });

  it("applies the correct class to the correct letters", () => {
    const guesses = [
      [
        { letter: "A", status: "correct" },
        { letter: "P", status: "present" },
      ],
    ];
  
    render(<WordGrid guesses={guesses} status="playing" />);
  
    const letterA = screen.getByText("A");
    const letterP = screen.getByText("P");
  
    expect(letterA.className).toMatch("bg-green-500");
    expect(letterP.className).toMatch("bg-yellow-500");
  });

  it("applies finished game style", () => {
    const guesses = [
      [{ letter: "A", status: "correct" }],
    ];
  
    render(<WordGrid guesses={guesses} status="solved" />);
  
    const letterA = screen.getByText("A");
  
    expect(letterA.className).toMatch("opacity-50");
  });
});