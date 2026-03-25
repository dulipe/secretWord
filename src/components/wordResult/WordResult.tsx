type WordResultProps = {
    word: string;
    definitions: string[] | null;
};

const WordResult = ({ word, definitions }: WordResultProps) => {
    return (
        <div className="flex flex-col items-center mt-20 mb-20 px-6 py-5 gap-4 max-w-xl w-full mx-auto rounded-md border-2  text-sm sm:text-base font-semibold bg-gray-300 text-gray-500 border-gray-400">
            <p className="text-xl font-bold text-black tracking-widest">
                {word}
            </p>

            {definitions && (
                <ul className="text-sm text-black list-disc pl-5 space-y-1 max-h-48 overflow-y-auto overflow-x-hidden w-full">
                    {definitions.flatMap((def, index) =>
                        def.split("\n").map((part, partIndex) => (
                            <li key={`${index}-${partIndex}`}>
                                {part.replaceAll("_", "")}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default WordResult;