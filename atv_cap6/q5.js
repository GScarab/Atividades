export function calcularMediaComParametros(numeros) {
    console.log("=== QUESTÃO 5 - MÉDIA COM PARÂMETROS ===");
    console.log("Parâmetros recebidos:", numeros);
    
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    
    console.log("Quantidade de números:", numeros.length);
    console.log("Soma total:", soma);
    console.log("Média:", media.toFixed(2));
    console.log(`A média dos ${numeros.length} números é: ${media.toFixed(2)}`);
    
    return {
        parametros: numeros,
        quantidade: numeros.length,
        soma,
        media: parseFloat(media.toFixed(2))
    };
}