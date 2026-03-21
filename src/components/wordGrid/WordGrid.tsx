import { Cell, WordStatus } from "@/domain/types";

type WordGridProps = {
  guesses: Cell[][];
  status: WordStatus;
};

const WordGrid = ({ guesses, status }: WordGridProps) => {
  const isFinished = status === "solved" || status === "unsolved";

  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      {guesses.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex gap-2">
            {row.map((cell, colIndex) => {
              let bg = "bg-white text-gray-800";

              if (cell.status === "correct") bg = "bg-green-500 text-white";
              else if (cell.status === "present") bg = "bg-yellow-500 text-white";

              const finishedClass = isFinished
                ? "opacity-50 pointer-events-none select-none"
                : "";

              return (
                <div
                  key={colIndex}
                  className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center font-bold rounded select-none ${bg} ${finishedClass}`}
                >
                  {cell.letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordGrid;