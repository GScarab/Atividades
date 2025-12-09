export function calcularMediaComPredefinidas(numeros) {
    console.log("=== QUESTÃO 3 - CALCULAR MÉDIA COM FUNÇÕES PREDEFINIDAS ===");
    console.log("Números recebidos:", numeros);
    
    // Processamento real usando funções predefinidas
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    const mediaArredondada = Math.round(media);
    
    console.log("Soma usando reduce:", soma);
    console.log("Média calculada:", media);
    console.log("Arredondamento com Math.round:", mediaArredondada);
    console.log("A média arredondada é:", mediaArredondada);
    
    return {
        numeros,
        soma,
        media,
        mediaArredondada
    };
}