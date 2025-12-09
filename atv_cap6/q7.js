export function demonstrarEscopo(nomeLocal) {
    console.log("=== QUESTÃO 7 - ESCOPO DE VARIÁVEIS ===");
    
    const nomeGlobal = "Rayara";
    
    console.log("Variável global:", nomeGlobal);
    console.log("Variável local:", nomeLocal);
    
    function saudacao() {
        const nomeFuncao = "João";
        console.log("Dentro da função - Global:", nomeGlobal);
        console.log("Dentro da função - Local:", nomeLocal);
        console.log("Variável da função:", nomeFuncao);
        
        return { 
            global: nomeGlobal, 
            local: nomeLocal, 
            funcao: nomeFuncao 
        };
    }
    
    const resultadoInterno = saudacao();
    
    console.log("Fora da função - Global:", nomeGlobal);
    console.log("Fora da função - Local:", nomeLocal);
    
    return {
        escopoGlobal: { nomeGlobal },
        escopoLocal: { nomeLocal },
        escopoFuncao: resultadoInterno
    };
}