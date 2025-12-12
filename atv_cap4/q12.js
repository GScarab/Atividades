export function converterComParseFloat() {
    const entrada = "1.75";
    const alturaConvertida = parseFloat(entrada);
    
    return {
        entrada: entrada,
        resultado: `Convertido com parseFloat(): ${alturaConvertida}, Tipo: ${typeof alturaConvertida}`
    };
}