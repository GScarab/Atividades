module.exports = {
    operacoesMatematicas: function() {
        const soma = (5 + 3);
        const subtracao = (10 - 4);
        const multiplicacao = (6 * 7);
        const divisao = (20 / 5);
        const divisaoPorZero = "Erro: Divisão por zero!";
        const exponenciacao = Math.pow(2, 3);
        
        return {
            soma: `Soma (5 + 3): ${soma}`,
            subtracao: `Subtração (10 - 4): ${subtracao}`,
            multiplicacao: `Multiplicação (6 * 7): ${multiplicacao}`,
            divisao: `Divisão (20 / 5): ${divisao}`,
            divisaoPorZero: `Divisão por zero: ${divisaoPorZero}`,
            exponenciacao: `Exponenciação (2^3): ${exponenciacao}`
        };
    }
};