export function respostaVarLetConst() {
    return {
        pergunta: "Qual é a diferença entre as palavras-chave var, let e const em JavaScript?",
        resposta: `var tem escopo de função ou global e é içada (hoisted) e inicializada com undefined. Seu uso não é mais recomendado em código moderno.

let tem escopo de bloco ({}) e é usada para variáveis cujo valor pode ser alterado (reatribuído) posteriormente.

const também tem escopo de bloco, mas é usada para declarar constantes, ou seja, variáveis que não podem ser reatribuídas após a inicialização.`
    };
}