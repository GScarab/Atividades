export function demonstrarFuncoesPredefinidas(dados) {
    console.log("=== QUESTÃO 1 - FUNÇÕES PREDEFINIDAS EM JAVASCRIPT ===");
    
    // Entrada e Saída de Dados
    console.log("\n--- ENTRADA E SAÍDA DE DADOS ---");
    console.log("console.log:", dados.entradaSaida.consoleLog);
    console.log("alert:", dados.entradaSaida.alert);
    console.log("prompt:", dados.entradaSaida.prompt);
    console.log("confirm:", dados.entradaSaida.confirm);
    
    // Manipulação de Strings
    console.log("\n--- MANIPULAÇÃO DE STRINGS ---");
    console.log("Texto original:", dados.strings.texto);
    console.log("toUpperCase():", dados.strings.texto.toUpperCase());
    console.log("toLowerCase():", dados.strings.texto.toLowerCase());
    console.log("charAt(2):", dados.strings.texto.charAt(2));
    console.log("substring(0, 4):", dados.strings.texto.substring(0, 4));
    console.log('replace("Java", "Type"):', dados.strings.texto.replace("Java", "Type"));
    console.log('split(" "):', dados.strings.texto.split(" "));
    console.log("trim():", dados.strings.texto.trim());
    
    // Manipulação de Números
    console.log("\n--- MANIPULAÇÃO DE NÚMEROS ---");
    console.log('parseInt("10.9"):', parseInt("10.9"));
    console.log('parseFloat("10.9"):', parseFloat("10.9"));
    console.log('Number("42"):', Number("42"));
    console.log('isNaN("abc"):', isNaN("abc"));
    console.log("(3.14159).toFixed(2):", (3.14159).toFixed(2));
    
    // Matemática (objeto Math)
    console.log("\n--- MATEMÁTICA (OBJETO MATH) ---");
    console.log("Math.sqrt(16):", Math.sqrt(16));
    console.log("Math.pow(2, 3):", Math.pow(2, 3));
    console.log("Math.round(4.6):", Math.round(4.6));
    console.log("Math.floor(4.9):", Math.floor(4.9));
    console.log("Math.ceil(4.1):", Math.ceil(4.1));
    console.log("Math.random():", Math.random());
    
    // Datas (objeto Date)
    console.log("\n--- DATAS (OBJETO DATE) ---");
    const data = new Date();
    console.log("Data atual:", data);
    console.log("getFullYear():", data.getFullYear());
    console.log("getMonth():", data.getMonth());
    console.log("getDate():", data.getDate());
    console.log("getHours():", data.getHours());
    
    // Controle de Tempo
    console.log("\n--- CONTROLE DE TEMPO ---");
    console.log("setTimeout() - Executa função após delay");
    console.log("setInterval() - Executa função repetidamente");
    console.log("clearInterval() - Para a execução do setInterval");
    
    return {
        categorias: [
            "Entrada e Saída de Dados",
            "Manipulação de Strings", 
            "Manipulação de Números",
            "Matemática (Math)",
            "Datas (Date)",
            "Controle de Tempo"
        ],
        totalFuncoes: 25,
        dadosUtilizados: dados
    };
}