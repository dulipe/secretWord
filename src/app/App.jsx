import Navbar from "@/components/navbar/Navbar";
import WordGrid from "@/components/wordGrid/WordGrid";
import Keyboard from "@/components/keyboard/Keyboard";
import Modal from "@/components/modal/Modal";

import { useWords } from "@/hooks/useWords";
import { useGameLogic } from "@/hooks/useGameLogic";

import { GAME_OPTIONS } from "@/domain/gameConfig";

function App() {
  const { words } = useWords(GAME_OPTIONS);
  const game = useGameLogic(words, GAME_OPTIONS);

  const isGameFinished = ["solved", "unsolved"].includes(
    game.statusWords[game.selected]
  );

  return (
    <div className="app">
      <Navbar
        options={GAME_OPTIONS}
        selected={game.selected}
        statusWords={game.statusWords}
        onSelect={game.handleSelect}
      />

      <WordGrid
        guesses={game.guesses}
        status={game.statusWords[game.selected]}
      />

      {!isGameFinished && (
        <Keyboard
          onKeyPress={game.handleKeyPress}
          keyStatuses={game.keyStatuses}
          visibleKeys={game.visibleKeys}
        />
      )}

      <Modal
        isOpen={game.isModalOpen}
        title={game.modal.title}
        word={game.modal.word}
        definitions={game.modal.definitions}
        onClose={game.handleClose}
      />
    </div>
  );
}

export default App;