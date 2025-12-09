export function calcularQuadrado(numeros) {
    console.log("=== QUESTÃO 6 - QUADRADO DE NÚMEROS ===");
    console.log("Números recebidos:", numeros);
    
    const resultados = numeros.map(num => {
        const quadrado = num * num;
        console.log(`${num}² = ${quadrado}`);
        return { numero: num, quadrado };
    });
    
    return {
        numerosOriginais: numeros,
        quadrados: resultados
    };
}