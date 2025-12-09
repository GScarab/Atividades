// Questão 23
export function imprimirPrimeiroNome(nomeCompleto) {
    let indiceDoEspaco = nomeCompleto.indexOf(' ');
    let primeiroNome = nomeCompleto.slice(0, indiceDoEspaco);
    console.log("Primeiro Nome:", primeiroNome);
}