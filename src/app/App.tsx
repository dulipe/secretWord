import Navbar from "@/components/navbar/Navbar";
import GameMenu from "@/components/gameMenu/GameMenu";
import WordGrid from "@/components/wordGrid/WordGrid";
import Keyboard from "@/components/keyboard/Keyboard";
import WordResult from "@/components/wordResult/WordResult";
import Modal from "@/components/modal/Modal";
import Instructions from "@/components/instructions/Instructions";
import Footer from "@/components/footer/Footer";

import { useWords } from "@/hooks/useWords";
import { useGameLogic } from "@/hooks/useGameLogic";

import { GAME_OPTIONS } from "@/domain/gameConfig";
import { JSX} from "react";

import { LanguageContext } from "@/context/LanguageContext";

type AppProps = {
  language: "pt" | "en";
};

function App({ language }: AppProps): JSX.Element {

  const { words } = useWords(GAME_OPTIONS, language ?? "pt");
  const game = useGameLogic(words, GAME_OPTIONS);

  const isGameFinished = ["solved", "unsolved"].includes(
    game.statusWords[game.selected]
  );

  return (
    <LanguageContext.Provider value={{ language }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex flex-col lg:flex-row flex-1 bg-gray-300">
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

            {!isGameFinished ? (
              <Keyboard
                onKeyPress={game.handleKeyPress}
                keyStatuses={game.keyStatuses}
                visibleKeys={game.visibleKeys}
              />
            ) : (
              <WordResult
                word={game.modal.word}
                definitions={game.modal.definitions}
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

          <aside className="w-full lg:w-1/2 px-8 py-10 flex justify-center pointer-events-none">
            <Instructions />
          </aside>
        </div>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;