export function resolverTorreHanoi3Discos() {
    const sequenciaMovimentos = [
        { movimento: 1, descricao: "Mover disco 1 da Haste A para a Haste C" },
        { movimento: 2, descricao: "Mover disco 2 da Haste A para a Haste B" },
        { movimento: 3, descricao: "Mover disco 1 da Haste C para a Haste B" },
        { movimento: 4, descricao: "Mover disco 3 da Haste A para a Haste C" },
        { movimento: 5, descricao: "Mover disco 1 da Haste B para a Haste A" },
        { movimento: 6, descricao: "Mover disco 2 da Haste B para a Haste C" },
        { movimento: 7, descricao: "Mover disco 1 da Haste A para a Haste C" }
    ];
    
    const algoritmo = `
ALGORITMO TorreDeHanoi3Discos
INÍCIO
    // Hastes: A (origem), B (auxiliar), C (destino)
    // Discos: 1 (menor), 2 (médio), 3 (maior)
    
    // Movimento 1: Disco 1 de A para C
    ESCREVA "Mover disco 1 de A para C"
    
    // Movimento 2: Disco 2 de A para B
    ESCREVA "Mover disco 2 de A para B"
    
    // Movimento 3: Disco 1 de C para B
    ESCREVA "Mover disco 1 de C para B"
    
    // Movimento 4: Disco 3 de A para C
    ESCREVA "Mover disco 3 de A para C"
    
    // Movimento 5: Disco 1 de B para A
    ESCREVA "Mover disco 1 de B para A"
    
    // Movimento 6: Disco 2 de B para C
    ESCREVA "Mover disco 2 de B para C"
    
    // Movimento 7: Disco 1 de A para C
    ESCREVA "Mover disco 1 de A para C"
    
    ESCREVA "Problema resolvido! Todos os 3 discos estão na Haste C."
FIM`;
    
    return {
        enunciado: "Escreva um algoritmo para resolver o jogo da Torre de Hanoi com 3 discos.",
        totalDiscos: 3,
        totalMovimentos: 7,
        formula: "2^n - 1 (onde n = 3 discos)",
        sequencia: sequenciaMovimentos,
        algoritmo: algoritmo,
        explicacao: "O problema é resolvido movendo recursivamente os discos menores para criar espaço para mover os discos maiores. A sequência garante que um disco maior nunca fique sobre um menor."
    };
}