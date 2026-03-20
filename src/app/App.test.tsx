import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageContext } from "@/context/LanguageContext";
import { WordStatus, CellStatus, ModalState } from "@/domain/types";

const handleKeyPress = vi.fn();
const handleSelect = vi.fn();
const handleClose = vi.fn();

const mockGame: {
  selected: number;
  guesses: { letter: string; status: CellStatus }[][];
  statusWords: Record<number, WordStatus>;
  keyStatuses: Record<string, CellStatus>;
  visibleKeys: string[];
  isModalOpen: boolean;
  modal: ModalState;
  handleKeyPress: ReturnType<typeof vi.fn>;
  handleSelect: ReturnType<typeof vi.fn>;
  handleClose: ReturnType<typeof vi.fn>;
} = {
  selected: 5,
  guesses: [[{ letter: "", status: null }]],
  statusWords: {},
  keyStatuses: {},
  visibleKeys: ["A"],
  isModalOpen: false,
  modal: { title: "", word: "", definitions: [] },
  handleKeyPress,
  handleSelect,
  handleClose,
};

vi.mock("@/hooks/useWords", () => ({
  useWords: () => ({ words: {} }),
}));

vi.mock("@/hooks/useGameLogic", () => ({
  useGameLogic: () => mockGame,
}));

import App from "./App";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <LanguageContext.Provider value={{ language: "pt" }}>
    {children}
  </LanguageContext.Provider>
);

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGame.visibleKeys = ["A"];
    mockGame.isModalOpen = false;
    mockGame.statusWords = {};
    mockGame.guesses = [[{ letter: "", status: null }]];
    mockGame.modal = { title: "", word: "", definitions: [] };
  });

  it("Renders the keyboard when the game is in progress", () => {
    render(<App language="pt" />, { wrapper });
    expect(screen.getByRole("button", { name: "A" })).toBeInTheDocument();
  });

  it("Calls handleKeyPress when the key is clicked", () => {
    render(<App language="pt" />, { wrapper });
    fireEvent.click(screen.getByRole("button", { name: "A" }));
    expect(handleKeyPress).toHaveBeenCalledWith("A");
  });

  it("renders the grid", () => {
    mockGame.guesses = [[{ letter: "", status: null }, { letter: "", status: null }]];
    mockGame.visibleKeys = [];
    render(<App language="pt" />, { wrapper });
    const cells = document.querySelectorAll("div.w-10.h-10");
    expect(cells.length).toBeGreaterThan(0);
  });

  it("The keyboard is not rendered when the game is finished", () => {
    mockGame.statusWords = { 5: "solved" };
    mockGame.visibleKeys = ["A"];
    render(<App language="pt" />, { wrapper });
    expect(screen.queryByRole("button", { name: "A" })).not.toBeInTheDocument();
  });

  it("Renders the modal when isModalOpen is true", () => {
    mockGame.isModalOpen = true;
    mockGame.statusWords = { 5: "solved" };
    mockGame.modal = { title: "Parabéns", word: "APPLE", definitions: ["uma fruta"] };
    render(<App language="pt" />, { wrapper });
    expect(screen.getByText(/parabéns/i)).toBeInTheDocument();
    expect(screen.getAllByText("APPLE").length).toBeGreaterThan(0);
  });

  it("calls handleSelect when interacting with Game Menu", () => {
    mockGame.statusWords = {};
    mockGame.visibleKeys = [];
    render(<App language="pt" />, { wrapper });
    const button = screen.getByRole("button", { name: /5 letras/i });
    fireEvent.click(button);
    expect(handleSelect).toHaveBeenCalled();
  });
});