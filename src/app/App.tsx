import Navbar from "@/components/navbar/Navbar";
import GameMenu  from "@/components/gameMenu/GameMenu";
import WordGrid from "@/components/wordGrid/WordGrid";
import Keyboard from "@/components/keyboard/Keyboard";
import Modal from "@/components/modal/Modal";
import Instructions from "@/components/instructions/Instructions";

import { useWords } from "@/hooks/useWords";
import { useGameLogic } from "@/hooks/useGameLogic";

import { GAME_OPTIONS } from "@/domain/gameConfig";
import { JSX } from "react";

function App(): JSX.Element {
  const { words } = useWords(GAME_OPTIONS);
  const game = useGameLogic(words, GAME_OPTIONS);

  const isGameFinished = ["solved", "unsolved"].includes(
    game.statusWords[game.selected]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
  
      <div className="flex flex-col lg:flex-row flex-1 bg-gray-50">
        <main className="flex flex-col items-center w-full lg:w-1/2">
          <GameMenu
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
        </main>
  
        <aside className="w-full lg:w-1/2 px-8 py-10 flex justify-center">
          <Instructions />
        </aside>
      </div>
    </div>
  );
}

export default App;