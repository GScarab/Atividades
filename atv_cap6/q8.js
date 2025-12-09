export function demonstrarEscopoBloco() {
    console.log("=== QUESTÃO 8 - ESCOPO DE BLOCO ===");
    
    let mensagemFora = "Fora do bloco";
    var mensagemVarFora = "Var fora do bloco";
    
    console.log("Antes do bloco:");
    console.log("let:", mensagemFora);
    console.log("var:", mensagemVarFora);
    
    // Bloco de código real
    if (true) {
        const mensagemConst = "Dentro do bloco com const";
        let mensagemLet = "Dentro do bloco com let";
        var mensagemVar = "Dentro do bloco com var";
        
        console.log("Dentro do bloco:");
        console.log("const:", mensagemConst);
        console.log("let:", mensagemLet);
        console.log("var:", mensagemVar);
    }
    
    console.log("Fora do bloco:");
    console.log("var:", mensagemVar);
    console.log("let:", mensagemFora);
    
    return {
        acessiveisFora: {
            mensagemVar,
            mensagemFora,
            mensagemVarFora
        }
    };
}