import React from "react";

const WordGrid = ({ guesses, status }) => {
  const isFinished = status === "solved" || status === "unsolved";

  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      {guesses.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex gap-2">
            {row.map((cell, colIndex) => {
              // cor individual da letra
              let bg = "bg-gray-200 text-gray-800"; // default

              if (cell.status === "correct") bg = "bg-green-500 text-white";
              else if (cell.status === "present") bg = "bg-yellow-500 text-white";

              // se toda palavra finalizada, deixa mais apagado
              const finishedClass = isFinished
                ? "opacity-50 pointer-events-none select-none"
                : "";

              return (
                <div
                  key={colIndex}
                  className={`w-10 h-10 flex items-center justify-center font-bold rounded ${bg} ${finishedClass}`}
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