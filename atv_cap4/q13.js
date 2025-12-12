export function converterComNumber() {
    const entrada = "45";
    const idadeConvertida = Number(entrada);
    
    // Exemplo adicional com entrada não numérica
    const entradaInvalida = "abc";
    const invalidaConvertida = Number(entradaInvalida);
    
    return {
        primeira: {
            entrada: entrada,
            resultado: `Convertido com Number(): ${idadeConvertida}, Tipo: ${typeof idadeConvertida}`
        },
        segunda: {
            entrada: entradaInvalida,
            resultado: `Convertido com Number(): ${invalidaConvertida}, Tipo: ${typeof invalidaConvertida}`
        }
    };
}