import { render, screen, fireEvent } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Keyboard", () => {
  it("The function is called when a key is pressed.", () => {
    const handleKeyPress = vi.fn();

    render(
      <Keyboard
        onKeyPress={handleKeyPress}
        keyStatuses={{}}
        visibleKeys={["A"]}
      />
    );

    const buttonA = screen.getByRole("button", { name: "A" });

    fireEvent.click(buttonA);

    expect(handleKeyPress).toHaveBeenCalledWith("A");
  });

  it("Applies the correct key style.", () => {
    render(
      <Keyboard
        onKeyPress={() => {}}
        visibleKeys={["A"]}
        keyStatuses={{ A: "correct" }}
      />
    );

    const buttonA = screen.getByRole("button", { name: "A" });

    expect(buttonA.className).toMatch("bg-green-600");
  });
});