import { useLanguage } from "@/context/LanguageContext";

const Instructions = () => {
  const { language } = useLanguage();
  const pt = language === "pt";

  return (
    <section className="mt-8 mb-10 w-full px-6 text-x1 text-black">
      <h2 className="text-x1 font-bold text-black mb-3">
        {pt ? "Como jogar" : "How to play"}
      </h2>

      <ul className="space-y-3 list-disc ml-4">
        <li>
          {pt
            ? "Escolha a quantidade de letras da palavra secreta no menu (de 5 a 10 letras)."
            : "Choose the number of letters of the secret word in the menu (from 5 to 10 letters)."}
        </li>
        <li>
          {pt
            ? <>Clique em uma letra do teclado virtual para verificar se ela está presente na palavra secreta.<br /> Em seguida, analise a cor de fundo da letra escolhida:</>
            : <>Click on a letter of the virtual keyboard to check if it is present in the secret word.<br /> Then, analyze the background color of the chosen letter:</>}
          <ul className="mt-2 space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded bg-white shrink-0 mt-0.5" />
              <span>
                {pt
                  ? "Se for branca, significa que a letra escolhida não está presente na palavra secreta."
                  : "If white, the chosen letter is not present in the secret word."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded bg-yellow-500 shrink-0 mt-0.5" />
              <span>
                {pt
                  ? "Se for amarela, significa que a letra está presente na palavra, mas ela não está na posição correta."
                  : "If yellow, the letter is present in the word, but not in the correct position."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded bg-green-500 shrink-0 mt-0.5" />
              <span>
                {pt
                  ? "Se for verde, significa que a letra está presente e está na posição correta da palavra secreta."
                  : "If green, the letter is present and in the correct position of the secret word."}
              </span>
            </li>
          </ul>
        </li>
        <li>
          {pt
            ? "Você tem até 7 tentativas para descobrir cada uma das palavras."
            : "You have up to 7 attempts to discover each word."}
        </li>
        <li>
          {pt
            ? "A cada tentativa você deve escolher X letras, onde X é o número de letras da palavra secreta."
            : "Each attempt must have X letters, where X is the number of letters of the secret word."}
        </li>
        <li>
          {pt
            ? "O objetivo é descobrir cada palavra secreta usando o menor número possível de tentativas."
            : "The goal is to discover each secret word using the fewest attempts possible."}
        </li>
        <li>
          {pt
            ? "Letras que forem usadas e não estiverem presentes na palavra secreta são removidas automaticamente."
            : "Letters that are used and not present in the secret word are automatically removed."}
        </li>
        <li>
          {pt
            ? "O jogo termina quando você descobre a palavra secreta ou quando se esgotam as tentativas."
            : "The game ends when you discover the secret word or when the attempts run out."}
        </li>
        <li>
          {pt
            ? "Cada letra aparece no máximo uma vez na palavra secreta."
            : "Each letter appears at most once in the secret word."}
        </li>
        <li>
          {pt
            ? "Acentos e cedilha não são considerados neste jogo."
            : "Accents and special characters are not considered in this game."}
        </li>
      </ul>
    </section>
  );
};

export default Instructions;