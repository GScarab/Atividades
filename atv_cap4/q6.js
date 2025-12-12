export function demonstrarTiposDados() {
    const numeroInteiro = 42;
    const numeroDecimal = 3.14159;
    
    return {
        inteiro: `Variável 'numeroInteiro': ${numeroInteiro}, Tipo: ${typeof numeroInteiro}`,
        decimal: `Variável 'numeroDecimal': ${numeroDecimal}, Tipo: ${typeof numeroDecimal}`
    };
}