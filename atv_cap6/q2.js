export function explorarFuncoes(arrayExemplo, objetoExemplo, dataExemplo) {
    console.log("=== QUESTÃO 2 - EXPLORAR FUNÇÕES ===");
    
    // Usando funções reais de Array
    console.log("Array original:", arrayExemplo);
    console.log("includes(20):", arrayExemplo.includes(20));
    console.log("indexOf(30):", arrayExemplo.indexOf(30));
    console.log("join(' - '):", arrayExemplo.join(" - "));
    
    // Usando funções reais de Date
    console.log("Data original:", dataExemplo);
    console.log("toISOString():", dataExemplo.toISOString());
    console.log("toLocaleDateString():", dataExemplo.toLocaleDateString());
    
    // Usando funções reais de JSON
    console.log("Objeto original:", objetoExemplo);
    console.log("JSON.stringify():", JSON.stringify(objetoExemplo));
    
    return {
        array: arrayExemplo,
        objeto: objetoExemplo,
        data: dataExemplo
    };
}