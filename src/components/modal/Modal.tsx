type ModalProps = {
  isOpen: boolean;
  title: string;
  word: string;
  definitions: string[] | null;
  onClose: () => void;
};

const Modal = ({ isOpen, title, word, definitions, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-100 flex flex-col p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 gap-6">

        <p className="text-2xl font-bold text-center text-gray-800">
          {title}
        </p>

        <div className="bg-white rounded-xl p-5 flex flex-col gap-3 shadow-sm">
          <p className="text-xl font-bold text-center text-gray-800 tracking-widest">
            {word}
          </p>

          {definitions && (
            <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1 max-h-[160px] overflow-y-auto">
              {definitions.map((def, index) => (
                <li key={index}>{def.replaceAll("_", "")}</li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 text-base font-bold rounded-xl cursor-pointer transition-all duration-200 bg-gray-200 hover:bg-gray-300 border border-transparent hover:border-gray-400"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;