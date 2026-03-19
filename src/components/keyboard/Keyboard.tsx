import { KEYBOARD_LAYOUT } from "@/domain/gameConfig";

type KeyStatus = "correct" | "present" | "absent" | null;

type KeyboardProps = {
  onKeyPress: (letter: string) => void;
  keyStatuses: Record<string, KeyStatus>;
  visibleKeys?: string[];
};

const Keyboard = ({ onKeyPress, keyStatuses, visibleKeys = [] }: KeyboardProps) => {
  const keySize =
    "w-8 h-10 text-xs sm:w-10 sm:h-12 sm:text-sm md:w-12 md:h-14 md:text-base";

  const baseKeyClasses =
    "flex items-center justify-center font-bold rounded-md border-none cursor-pointer transition-colors duration-200 text-center";

  const getKeyStyle = (letter: string): string => {
    let base = `${baseKeyClasses} ${keySize}`;

    if (keyStatuses[letter] === "correct")
      return `${base} bg-green-600 text-white`;

    if (keyStatuses[letter] === "present")
      return `${base} bg-yellow-500 text-white`;

    return `${base} bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-500`;
  };

  const getPlaceholderStyle = (): string => `${keySize} invisible`;

  return (
    <div className="flex flex-col items-center gap-2 mt-20 px-4 w-full max-w-[600px] mx-auto">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-[4px] sm:gap-[6px]"
        >
          {row.map((letter) =>
            visibleKeys.includes(letter) ? (
              <button
                key={letter}
                className={getKeyStyle(letter)}
                onClick={() => onKeyPress(letter)}
              >
                {letter}
              </button>
            ) : (
              <div key={letter} className={getPlaceholderStyle()} />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;