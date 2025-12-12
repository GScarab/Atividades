// Questão 2 - Torre de Hanoi com 4 discos
export function resolverTorreHanoi4Discos() {
    const sequenciaMovimentos = [
        { movimento: 1, descricao: "Mover disco 1 da Haste A para a Haste B" },
        { movimento: 2, descricao: "Mover disco 2 da Haste A para a Haste C" },
        { movimento: 3, descricao: "Mover disco 1 da Haste B para a Haste C" },
        { movimento: 4, descricao: "Mover disco 3 da Haste A para a Haste B" },
        { movimento: 5, descricao: "Mover disco 1 da Haste C para a Haste A" },
        { movimento: 6, descricao: "Mover disco 2 da Haste C para a Haste B" },
        { movimento: 7, descricao: "Mover disco 1 da Haste A para a Haste B" },
        { movimento: 8, descricao: "Mover disco 4 da Haste A para a Haste C" },
        { movimento: 9, descricao: "Mover disco 1 da Haste B para a Haste C" },
        { movimento: 10, descricao: "Mover disco 2 da Haste B para a Haste A" },
        { movimento: 11, descricao: "Mover disco 1 da Haste C para a Haste A" },
        { movimento: 12, descricao: "Mover disco 3 da Haste B para a Haste C" },
        { movimento: 13, descricao: "Mover disco 1 da Haste A para a Haste B" },
        { movimento: 14, descricao: "Mover disco 2 da Haste A para a Haste C" },
        { movimento: 15, descricao: "Mover disco 1 da Haste B para a Haste C" }
    ];
    
    const algoritmoRecursivo = `
ALGORITMO TorreDeHanoi4Discos
INÍCIO
    // Chamar a função recursiva para 4 discos
    moverDiscos(4, "A", "C", "B")
FIM

FUNÇÃO moverDiscos(n, origem, destino, auxiliar)
INÍCIO
    SE n = 1 ENTÃO
        ESCREVA "Mover disco 1 de " + origem + " para " + destino
    SENÃO
        // Passo 1: Mover n-1 discos de origem para auxiliar
        moverDiscos(n-1, origem, auxiliar, destino)
        
        // Passo 2: Mover o disco maior de origem para destino
        ESCREVA "Mover disco " + n + " de " + origem + " para " + destino
        
        // Passo 3: Mover n-1 discos de auxiliar para destino
        moverDiscos(n-1, auxiliar, destino, origem)
    FIMSE
FIMFUNÇÃO`;
    
    return {
        enunciado: "Escreva um algoritmo para resolver o jogo da Torre de Hanoi com 4 discos.",
        totalDiscos: 4,
        totalMovimentos: 15,
        formula: "2^n - 1 (onde n = 4 discos)",
        estrategia: "Solução recursiva: mover 3 discos superiores de A para B, depois mover disco 4 de A para C, finalmente mover 3 discos de B para C",
        sequencia: sequenciaMovimentos,
        algoritmo: algoritmoRecursivo,
        explicacao: "A solução para 4 discos segue o mesmo princípio recursivo, demonstrando como um problema maior pode ser decomposto em instâncias menores do mesmo problema."
    };
}