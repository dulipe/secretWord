const Modal = ({ isOpen, title, word, definitions, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-100 flex flex-col justify-between p-8 rounded-2xl shadow-2xl max-w-md w-full min-h-[500px]">
        <div className="flex flex-col items-center justify-start flex-1">
          <p className="text-2xl font-semibold whitespace-pre-line mb-4">
            {title}
          </p>
        </div>

        <div className="flex flex-col items-center justify-start flex-1">
          <p className="text-2xl font-semibold whitespace-pre-line mb-4">
            {word}
          </p>

          {definitions && (
            <ul className="text-base text-left ml-4 list-disc list-inside space-y-1 max-h-[200px] overflow-y-auto mb-6">
              {definitions.map((def, index) => (
                <li key={index}>{def.replaceAll("_", "")}</li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-[200px] py-2 text-base sm:text-lg md:text-xl font-bold rounded-lg border border-transparent cursor-pointer transition-all duration-200 bg-gray-200 hover:bg-gray-300 hover:border-gray-400 mx-auto"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;