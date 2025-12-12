export function calcularLogaritmos() {
    const numero1 = 10;
    const numero2 = 2.71828; // Aproximação de e
    
    const resultado1 = Math.log(numero1);
    const resultado2 = Math.log(numero2);
    
    return {
        log10: `O logaritmo natural (ln) de ${numero1} é: ${resultado1}`,
        loge: `O logaritmo natural (ln) de ${numero2} (≈e) é: ${resultado2}`
    };
}