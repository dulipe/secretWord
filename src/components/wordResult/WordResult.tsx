type WordResultProps = {
    word: string;
    definitions: string[] | null;
};

const WordResult = ({ word, definitions }: WordResultProps) => {
    return (
        <div className="flex flex-col items-center mt-20 mb-20 px-6 py-5 gap-4 max-w-xl w-full mx-auto rounded-xl shadow-sm bg-gray-300 border border-gray">
            <p className="text-xl font-bold text-black tracking-widest">
                {word}
            </p>

            {definitions && (
                <ul className="text-sm text-black list-disc ml-10 space-y-1 max-h-[160px]  w-full">
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