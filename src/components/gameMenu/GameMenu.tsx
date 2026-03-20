import { GameOption } from "@/domain/gameConfig";
import { WordStatus } from "@/domain/types";

type GameMenuProps = {
  onSelect: (value: number) => void;
  selected: number;
  statusWords: Record<number, WordStatus>;
  options: GameOption[];
};

const GameMenu = ({ onSelect, selected, statusWords, options }: GameMenuProps) => {
  return (
    <nav className="flex justify-center mx-auto p-4 sm:p-6 mt-6 mb-8 max-w-full w-full px-4">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-3 list-none w-full">
        {options.map(({ label, value }) => {
          const isActive = selected === value;
          const status = statusWords[value];

          const isFinished = status === "solved" || status === "unsolved";

          const statusIcon =
            status === "solved" ? "✔️" : status === "unsolved" ? "❌" : "";

          return (
            <li key={value} className="flex-none min-w-[100px]">
              <button
                onClick={() => onSelect(value)}
                className={`w-full flex justify-center items-center whitespace-nowrap px-4 py-2 text-base font-semibold rounded-md border-2 cursor-pointer transition-all duration-200
                  
                  ${
                    isFinished
                      ? "bg-gray-200 text-gray-500 border-transparent cursor-not-allowed"
                      : isActive
                      ? "bg-gray-300 border-gray-400"
                      : "bg-white hover:bg-gray-200 border-transparent"
                  }
                `}
              >
                <span className="flex items-center gap-1">
                  <span>{label}</span>

                  <span className="text-xs w-4 text-center inline-block">
                    {statusIcon}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GameMenu;