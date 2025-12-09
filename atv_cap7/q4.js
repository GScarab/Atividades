// Questão 4
export function criarProduto(nome, preco, quantidade) {
    return {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };
}

export function calcularValorTotal(preco, quantidade) {
    return preco * quantidade;
}