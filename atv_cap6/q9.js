export function demonstrarArrowFunctions(dadosMedia, numeroQuadrado, mensagem) {
    console.log("=== QUESTÃO 9 - ARROW FUNCTIONS ===");
    
    // Arrow functions reais
    const calcularMediaArrow = (n1, n2, n3) => {
        const media = Math.round((n1 + n2 + n3) / 3);
        console.log(`Média de ${n1}, ${n2}, ${n3} = ${media}`);
        return media;
    };
    
    const quadradoArrow = numero => {
        const resultado = numero * numero;
        console.log(`${numero}² = ${resultado}`);
        return resultado;
    };
    
    const exibirMensagemArrow = (msg) => {
        console.log(msg);
        return msg;
    };
    
    const mediaResultado = calcularMediaArrow(...dadosMedia);
    const quadradoResultado = quadradoArrow(numeroQuadrado);
    const mensagemResultado = exibirMensagemArrow(mensagem);
    
    return {
        arrowFunctions: {
            media: mediaResultado,
            quadrado: quadradoResultado,
            mensagem: mensagemResultado
        }
    };
}