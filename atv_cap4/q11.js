export function converterComParseInt() {
    const entrada = "123.45";
    const numeroConvertido = parseInt(entrada);
    
    return {
        entrada: entrada,
        resultado: `Convertido com parseInt(): ${numeroConvertido}, Tipo: ${typeof numeroConvertido}`
    };
}