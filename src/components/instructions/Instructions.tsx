const Instructions = () => {
    return (
      <section className="mt-8 mb-10 w-full px-6 text-x1 text-gray-600">
        <h2 className="text-x1 font-bold text-gray-800 mb-3">
          Como jogar
        </h2>
  
        <ul className="space-y-3 list-disc ml-4">
          <li>Escolha a quantidade de letras da palavra secreta no menu (de 5 a 10 letras).</li>
          <li>
            Clique em uma letra do teclado virtual para verificar se ela está presente na palavra secreta.<br /> Em seguida, analise a cor de fundo da letra escolhida:
            <ul className="mt-2 space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded bg-white shrink-0 mt-0.5" />
                <span>Se for branca, significa que a letra escolhida não está presente na palavra secreta.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded bg-yellow-500 shrink-0 mt-0.5" />
                <span>Se for amarela, significa que a letra está presente na palavra, mas ela não está na posição correta.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded bg-green-500 shrink-0 mt-0.5" />
                <span>Se for verde, significa que a letra está presente e está na posição correta da palavra secreta.</span>
              </li>
            </ul>
          </li>
          <li>Você tem até 7 tentativas para descobrir cada uma das palavras.</li>
          <li>A cada tentativa você deve escolher X letras, onde X é o número de letras da palavra secreta.</li>
          <li>O objetivo é descobrir cada palavra secreta usando o menor número possível de tentativas.</li>
          <li>Letras que forem usadas e não estiverem presentes na palavra secreta são removidas automaticamente.</li>
          <li>O jogo termina quando você descobre a palavra secreta ou quando se esgotam as tentativas.</li>
          <li>Cada letra aparece no máximo uma vez na palavra secreta.</li>
          <li>Acentos e cedilha não são considerados neste jogo.</li>
        </ul>
      </section>
    );
  };
  
  export default Instructions;