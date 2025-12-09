// Questão 20
export function encontrarMaiorDeIdade(pessoas, idadeMinima) {
    return pessoas.find(function(pessoa) {
        return pessoa.idade > idadeMinima;
    });
}