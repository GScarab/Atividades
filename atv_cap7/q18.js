// Questão 18
export function filtrarCarrosNovos(carros, anoMinimo) {
    return carros.filter(function(carro) {
        return carro.ano > anoMinimo;
    });
}