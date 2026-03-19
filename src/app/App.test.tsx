import { render, screen, fireEvent } from "@testing-library/react";

const handleKeyPress = vi.fn();
const handleSelect = vi.fn();
const handleClose = vi.fn();

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules(); 
  });

  it("Renders the keyboard when the game is in progress", async () => {
    vi.doMock("@/hooks/useWords", () => ({
      useWords: () => ({
        words: ["APPLE"],
      }),
    }));

    vi.doMock("@/hooks/useGameLogic", () => ({
      useGameLogic: () => ({
        selected: 0,
        guesses: [[{ letter: "", status: null }]],
        statusWords: ["playing"],
        keyStatuses: {},
        visibleKeys: ["A"],
        isModalOpen: false,
        modal: {},
        handleKeyPress,
        handleSelect,
        handleClose,
      }),
    }));

    const { default: App } = await import("./App");

    render(<App />);

    expect(screen.getByRole("button", { name: "A" })).toBeInTheDocument();
  });

  it("Calls handleKeyPress when the key is clicked", async () => {
    vi.doMock("@/hooks/useWords", () => ({
      useWords: () => ({ words: ["APPLE"] }),
    }));

    vi.doMock("@/hooks/useGameLogic", () => ({
      useGameLogic: () => ({
        selected: 0,
        guesses: [[{ letter: "", status: null }]],
        statusWords: ["playing"],
        keyStatuses: {},
        visibleKeys: ["A"],
        isModalOpen: false,
        modal: {},
        handleKeyPress,
        handleSelect,
        handleClose,
      }),
    }));

    const { default: App } = await import("./App");

    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "A" }));

    expect(handleKeyPress).toHaveBeenCalledWith("A");
  });

  it("renders the grid", async () => {
    vi.doMock("@/hooks/useWords", () => ({
      useWords: () => ({ words: ["APPLE"] }),
    }));

    vi.doMock("@/hooks/useGameLogic", () => ({
      useGameLogic: () => ({
        selected: 0,
        guesses: [
          [
            { letter: "", status: null },
            { letter: "", status: null },
          ],
        ],
        statusWords: ["playing"],
        keyStatuses: {},
        visibleKeys: [],
        isModalOpen: false,
        modal: {},
        handleKeyPress,
        handleSelect,
        handleClose,
      }),
    }));

    const { default: App } = await import("./App");

    render(<App />);

    const cells = document.querySelectorAll("div.w-10.h-10");

    expect(cells.length).toBeGreaterThan(0);
  });

  it("The keyboard is not rendered when the game is finished", async () => {
    vi.doMock("@/hooks/useWords", () => ({
      useWords: () => ({ words: ["APPLE"] }),
    }));

    vi.doMock("@/hooks/useGameLogic", () => ({
      useGameLogic: () => ({
        selected: 0,
        guesses: [[]],
        statusWords: ["solved"],
        keyStatuses: {},
        visibleKeys: ["A"],
        isModalOpen: false,
        modal: {},
        handleKeyPress,
        handleSelect,
        handleClose,
      }),
    }));

    const { default: App } = await import("./App");

    render(<App />);

    expect(
      screen.queryByRole("button", { name: "A" })
    ).not.toBeInTheDocument();
  });

  it("Renders the modal when isModalOpen is true", async () => {
    vi.doMock("@/hooks/useWords", () => ({
      useWords: () => ({ words: ["APPLE"] }),
    }));

    vi.doMock("@/hooks/useGameLogic", () => ({
      useGameLogic: () => ({
        selected: 0,
        guesses: [[]],
        statusWords: ["solved"],
        keyStatuses: {},
        visibleKeys: [],
        isModalOpen: true,
        modal: {
          title: "Parabéns",
          word: "APPLE",
          definitions: ["uma fruta"],
        },
        handleKeyPress,
        handleSelect,
        handleClose,
      }),
    }));

    const { default: App } = await import("./App");

    render(<App />);

    expect(screen.getByText(/parabéns/i)).toBeInTheDocument();
    expect(screen.getByText("APPLE")).toBeInTheDocument();
  });

  it("calls handleSelect when interacting with Navbar", async () => {
    vi.doMock("@/hooks/useWords", () => ({
      useWords: () => ({ words: ["APPLE"] }),
    }));

    vi.doMock("@/hooks/useGameLogic", () => ({
      useGameLogic: () => ({
        selected: 0,
        guesses: [[]],
        statusWords: ["playing"],
        keyStatuses: {},
        visibleKeys: [],
        isModalOpen: false,
        modal: {},
        handleKeyPress,
        handleSelect,
        handleClose,
      }),
    }));

    const { default: App } = await import("./App");

    render(<App />);

    const buttons = screen.getAllByRole("button");

    if (buttons.length > 0) {
      fireEvent.click(buttons[0]);
    }

    expect(handleSelect).toHaveBeenCalled();
  });
});