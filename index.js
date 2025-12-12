//Capítulo 2 - Questão 1
import { resolverTorreHanoi3Discos } from './atv_cap2/q1.js';
console.log("=== QUESTÃO 1 ===");
console.log("Torre de Hanoi com 3 discos\n");

const solucao3Discos = resolverTorreHanoi3Discos();
console.log(`Enunciado: ${solucao3Discos.enunciado}`);
console.log(`\nTotal de discos: ${solucao3Discos.totalDiscos}`);
console.log(`Total de movimentos necessários: ${solucao3Discos.totalMovimentos}`);
console.log(`Fórmula: ${solucao3Discos.formula}`);
console.log(`\nExplicação: ${solucao3Discos.explicacao}`);

console.log("\nSequência de movimentos:");
solucao3Discos.sequencia.forEach(passo => {
    console.log(`  ${passo.movimento}. ${passo.descricao}`);
});

console.log("\nAlgoritmo em pseudocódigo:");
console.log(solucao3Discos.algoritmo);

//Capítulo 2 - Questão 2
import { resolverTorreHanoi4Discos } from './atv_cap2/q2.js';
console.log("\n\n=== QUESTÃO 2 ===");
console.log("Torre de Hanoi com 4 discos\n");

const solucao4Discos = resolverTorreHanoi4Discos();
console.log(`Enunciado: ${solucao4Discos.enunciado}`);
console.log(`\nTotal de discos: ${solucao4Discos.totalDiscos}`);
console.log(`Total de movimentos necessários: ${solucao4Discos.totalMovimentos}`);
console.log(`Fórmula: ${solucao4Discos.formula}`);
console.log(`Estratégia: ${solucao4Discos.estrategia}`);
console.log(`\nExplicação: ${solucao4Discos.explicacao}`);

console.log("\nSequência de movimentos:");
solucao4Discos.sequencia.forEach(passo => {
    console.log(`  ${passo.movimento}. ${passo.descricao}`);
});

console.log("\nAlgoritmo recursivo em pseudocódigo:");
console.log(solucao4Discos.algoritmo);






//Capítulo 3 - Questão 1
import { caracteristicasJavaScript } from './atv_cap3/q1.js';
const caracteristicas = caracteristicasJavaScript();
console.log(caracteristicas.titulo);
caracteristicas.lista.forEach(item => console.log(`- ${item}`));

//Capítulo 3 - Questão 2
import { diferencaJavaScriptECMAScript } from './atv_cap3/q2.js';
const diferenca = diferencaJavaScriptECMAScript();
console.log(diferenca.javascript);
console.log(diferenca.ecmascript);
console.log(diferenca.relacao);

//Capítulo 3 - Questão 3
import { ambientesExecucaoJavaScript } from './atv_cap3/q3.js';
const ambientes = ambientesExecucaoJavaScript();
console.log(ambientes.titulo);
ambientes.lista.forEach(ambiente => console.log(`- ${ambiente}`));

//Capítulo 3 - Questão 4
import { caracteristicasBun } from './atv_cap3/q4.js';
const bunCaracteristicas = caracteristicasBun();
console.log(bunCaracteristicas.titulo);
bunCaracteristicas.lista.forEach(item => console.log(`- ${item}`));

//Capítulo 3 - Questão 5
import { funcaoConsoleLog } from './atv_cap3/q5.js';
const consoleLogInfo = funcaoConsoleLog();
console.log(consoleLogInfo.descricao);

//Capítulo 3 - Questão 6
import { comandoOláMundoQuestao6 } from './atv_cap3/q6.js';
const cmdHello6 = comandoOláMundoQuestao6();
console.log(`Resposta: ${cmdHello6}`);

//Capítulo 3 - Questão 7
import { comandoOláMundoQuestao7 } from './atv_cap3/q7.js';
const cmdHello7 = comandoOláMundoQuestao7();
console.log(`Resposta: ${cmdHello7}`);

//Capítulo 3 - Questão 8
import { extensoesVSCode } from './atv_cap3/q8.js';
const extensoes = extensoesVSCode();
console.log(extensoes.titulo);
extensoes.lista.forEach(extensao => console.log(extensao));

//Capítulo 3 - Questão 9
import { configuracoesVSCode } from './atv_cap3/q9.js';
const configs = configuracoesVSCode();
console.log(configs.titulo);
Object.entries(configs.configuracoes).forEach(([chave, valor]) => {
    console.log(`"${chave}": ${valor}`);
});






//Capítulo 4 - Questão 1
import { respostaVariavel } from './atv_cap4/q1.js';
const resposta1 = respostaVariavel();
console.log(resposta1.pergunta);
console.log(resposta1.resposta);

//Capítulo 4 - Questão 2
import { respostaTipagemDinamica } from './atv_cap4/q2.js';
const resposta2 = respostaTipagemDinamica();
console.log(resposta2.pergunta);
console.log(resposta2.resposta);

//Capítulo 4 - Questão 3
import { respostaNomesDescritivos } from './atv_cap4/q3.js';
const resposta3 = respostaNomesDescritivos();
console.log(resposta3.pergunta);
console.log(resposta3.resposta);

//Capítulo 4 - Questão 4
import { programaBoasVindas } from './atv_cap4/q4.js';
console.log(programaBoasVindas());

//Capítulo 4 - Questão 5
import { respostaVarLetConst } from './atv_cap4/q5.js';
const resposta5 = respostaVarLetConst();
console.log(resposta5.pergunta);
console.log(resposta5.resposta);

//Capítulo 4 - Questão 6
import { demonstrarTiposDados } from './atv_cap4/q6.js';
const tiposDados = demonstrarTiposDados();
console.log(tiposDados.inteiro);
console.log(tiposDados.decimal);

//Capítulo 4 - Questão 7
import { demonstrarComentarios } from './atv_cap4/q7.js';
console.log(demonstrarComentarios());

//Capítulo 4 - Questão 8
import { solicitarNomeUsuario } from './atv_cap4/q8.js';
console.log(solicitarNomeUsuario());

//Capítulo 4 - Questão 9
import { solicitarIdadeUsuario } from './atv_cap4/q9.js';
console.log(solicitarIdadeUsuario());

//Capítulo 4 - Questão 10
import { solicitarNomeIdade } from './atv_cap4/q10.js';
console.log(solicitarNomeIdade());

//Capítulo 4 - Questão 11
import { converterComParseInt } from './atv_cap4/q11.js';
const conversaoParseInt = converterComParseInt();
console.log(`Entrada simulada: "${conversaoParseInt.entrada}"`);
console.log(conversaoParseInt.resultado);

//Capítulo 4 - Questão 12
import { converterComParseFloat } from './atv_cap4/q12.js';
const conversaoParseFloat = converterComParseFloat();
console.log(`Entrada simulada: "${conversaoParseFloat.entrada}"`);
console.log(conversaoParseFloat.resultado);

//Capítulo 4 - Questão 13
import { converterComNumber } from './atv_cap4/q13.js';
const conversaoNumber = converterComNumber();
console.log(`Primeira entrada: "${conversaoNumber.primeira.entrada}"`);
console.log(conversaoNumber.primeira.resultado);
console.log(`\nSegunda entrada (exemplo adicional): "${conversaoNumber.segunda.entrada}"`);
console.log(conversaoNumber.segunda.resultado);






//Capítulo 5 - Questão 1
import { soma } from './atv_cap5/q1.js';
const resultadoSoma = soma(25, 17);
console.log(resultadoSoma);

//Capítulo 5 - Questão 2
import { subtracao } from './atv_cap5/q2.js';
const resultadoSubtracao = subtracao(250, 100);
console.log(resultadoSubtracao);

//Capítulo 5 - Questão 3
import { multiplicacao } from './atv_cap5/q3.js';
const resultadoMultiplicacao = multiplicacao(9, 6);
console.log(resultadoMultiplicacao);

//Capítulo 5 - Questão 4
import { divisao } from './atv_cap5/q4.js';
const resultadoDivisao = divisao(144, 12);
console.log(resultadoDivisao);

//Capítulo 5 - Questão 5
import { restoDivisao } from './atv_cap5/q5.js';
const resultadoResto = restoDivisao(55, 6);
console.log(resultadoResto);

//Capítulo 5 - Questão 6
import { incremento } from './atv_cap5/q6.js';
const resultadoIncremento = incremento(10);
console.log(resultadoIncremento);

//Capítulo 5 - Questão 7
import { decrementoDuplo } from './atv_cap5/q7.js';
const resultadoDecremento = decrementoDuplo(5);
console.log(resultadoDecremento);

//Capítulo 5 - Questão 8
import { operacaoComposta } from './atv_cap5/q8.js';
const resultadoComposto = operacaoComposta(10, 5, 3, 2);
console.log(resultadoComposto);

//Capítulo 5 - Questão 9
import { media } from './atv_cap5/q9.js';
const resultadoMedia = media(8, 7.5, 10);
console.log(resultadoMedia);

//Capítulo 5 - Questão 10
import { operacoesEncadeadas } from './atv_cap5/q10.js';
const resultadoEncadeado = operacoesEncadeadas(20, 5);
console.log(resultadoEncadeado);

//Capítulo 5 - Questão 11
import { maiorQue } from './atv_cap5/q11.js';
const resultadoMaior = maiorQue(10, 7);
console.log(resultadoMaior);

//Capítulo 5 - Questão 12
import { menorOuIgual } from './atv_cap5/q12.js';
const resultadoMenor = menorOuIgual(5, 3);
console.log(resultadoMenor);

//Capítulo 5 - Questão 13
import { comparacoesIguais } from './atv_cap5/q13.js';
const resultadoComparacoes = comparacoesIguais(7, '7');
console.log(resultadoComparacoes);

//Capítulo 5 - Questão 14
import { comparacoesDiferentes } from './atv_cap5/q14.js';
const resultadoDiferentes = comparacoesDiferentes(10, '10');
console.log(resultadoDiferentes);

//Capítulo 5 - Questão 15
import { andLogico } from './atv_cap5/q15.js';
const resultadoAnd = andLogico(5 > 3, 8 < 10);
console.log(resultadoAnd);

//Capítulo 5 - Questão 16
import { orLogico } from './atv_cap5/q16.js';
const resultadoOr = orLogico(5 < 3, 8 === 8);
console.log(resultadoOr);

//Capítulo 5 - Questão 17
import { notLogico } from './atv_cap5/q17.js';
const resultadoNot = notLogico(7 > 2);
console.log(resultadoNot);

//Capítulo 5 - Questão 18
import { precedenciaOperadores } from './atv_cap5/q18.js';
const resultadoPrecedencia = precedenciaOperadores(4, 3, 2);
console.log(resultadoPrecedencia);

//Capítulo 5 - Questão 19
import { potencia } from './atv_cap5/q19.js';
const resultadoPotencia = potencia(2, 4);
console.log(resultadoPotencia);

//Capítulo 5 - Questão 20
import { operacaoComplexa } from './atv_cap5/q20.js';
const resultadoComplexo = operacaoComplexa(10, 2, 2);
console.log(resultadoComplexo);

//Capítulo 5 - Questão 21
import { comparacaoResultados } from './atv_cap5/q21.js';
const resultadoComparacao = comparacaoResultados(4, 4, 2, 4);
console.log(resultadoComparacao);

//Capítulo 5 - Questão 22
import { multiplasComparacoes } from './atv_cap5/q22.js';
const resultadoMultiplas = multiplasComparacoes(5 == '5', !(3 == 4), 7 == 8);
console.log(resultadoMultiplas);

//Capítulo 5 - Questão 23
import { multiplosOr } from './atv_cap5/q23.js';
const resultadoMultiplosOr = multiplosOr(2 !== 3, 5 !== 4, 8 > 2, 1 === 1);
console.log(resultadoMultiplosOr);

//Capítulo 5 - Questão 24
import { ordemOperacoes } from './atv_cap5/q24.js';
const resultadoOrdem = ordemOperacoes(5, 3, 2, 2);
console.log(resultadoOrdem);

//Capítulo 5 - Questão 25
import { operacoesSequenciais } from './atv_cap5/q25.js';
const resultadoSequencial = operacoesSequenciais(3, 2, 4);
console.log(resultadoSequencial);

//Capítulo 5 - Questão 26
import { concatenaStrings } from './atv_cap5/q26.js';
const resultadoString = concatenaStrings("Ana", "Silva");
console.log(resultadoString);

//Capítulo 5 - Questão 27
import { comparacaoCoercao } from './atv_cap5/q27.js';
const resultadoCoercao = comparacaoCoercao("5", 5);
console.log(resultadoCoercao);

//Capítulo 5 - Questão 28
import { precedenciaLogica } from './atv_cap5/q28.js';
const resultadoPrecedenciaLogica = precedenciaLogica(true, false, true);
console.log(resultadoPrecedenciaLogica);

//Capítulo 5 - Questão 29
import { comparacaoComposta } from './atv_cap5/q29.js';
const resultadoComposta = comparacaoComposta(3, 2, 4, "10");
console.log(resultadoComposta);

//Capítulo 5 - Questão 30
import { expressaoFinal } from './atv_cap5/q30.js';
const resultadoFinal = expressaoFinal(10, 5, 2, 30, false);
console.log(resultadoFinal);







// Capítulo 6 - Questão 1
import { demonstrarFuncoesPredefinidas } from './atv_cap6/q1.js';

const dadosQuestao1 = {
    entradaSaida: {
        consoleLog: "Exemplo de saída no console",
        alert: "Mensagem de alerta na tela", 
        prompt: "Digite seu nome:",
        confirm: "Deseja continuar?"
    },
    strings: {
        texto: " JavaScript "
    }
};

const questao1 = demonstrarFuncoesPredefinidas(dadosQuestao1);

// Capítulo 6 - Questão 2
import { explorarFuncoes } from './atv_cap6/q2.js';
const questao2 = explorarFuncoes(
    [10, 20, 30, 40],
    { nome: "Lucas", idade: 21 },
    new Date()
);

// Capítulo 6 - Questão 3
import { calcularMediaComPredefinidas } from './atv_cap6/q3.js';
const questao3 = calcularMediaComPredefinidas([8, 7.5, 9]);

// Capítulo 6 - Questão 4
import { exibirMensagem } from './atv_cap6/q4.js';
const questao4 = exibirMensagem("Olá! Esta é uma mensagem exibida pela função.");

// Capítulo 6 - Questão 5
import { calcularMediaComParametros } from './atv_cap6/q5.js';
const questao5 = calcularMediaComParametros([7, 8, 9]);

// Capítulo 6 - Questão 6
import { calcularQuadrado } from './atv_cap6/q6.js';
const questao6 = calcularQuadrado([4, 7, 5, 9]);

// Capítulo 6 - Questão 7
import { demonstrarEscopo } from './atv_cap6/q7.js';
const questao7 = demonstrarEscopo("Maria");

// Capítulo 6 - Questão 8
import { demonstrarEscopoBloco } from './atv_cap6/q8.js';
const questao8 = demonstrarEscopoBloco();

// Capítulo 6 - Questão 9
import { demonstrarArrowFunctions } from './atv_cap6/q9.js';
const questao9 = demonstrarArrowFunctions(
    [5, 10, 15],
    8,
    "Mensagem com arrow function"
);

// Capítulo 6 - Questão 10
import { calcularMediaDoisNumeros } from './atv_cap6/q10.js';
const questao10 = calcularMediaDoisNumeros([
    [25, 35],
    [10, 20],
    [7.5, 8.5]
]);

// Capítulo 6 - Questão 11
import { executarCalculadora } from './atv_cap6/q11.js';
const questao11 = executarCalculadora([
    { n1: 15, n2: 3, op: "*" },
    { n1: 10, n2: 5, op: "+" },
    { n1: 20, n2: 4, op: "-" },
    { n1: 15, n2: 3, op: "/" }
]);

// Capítulo 6 - Questão 12
import { executarConversorMoeda } from './atv_cap6/q12.js';
const questao12 = executarConversorMoeda(
    [100, 250, 50, 1000],
    5.2
);

// Capítulo 6 - Questão 13
import { calcularIMCs } from './atv_cap6/q13.js';
const questao13 = calcularIMCs([
    { peso: 70, altura: 1.75 },
    { peso: 55, altura: 1.65 },
    { peso: 90, altura: 1.80 }
]);

// Capítulo 6 - Questão 14
import { executarJogoAdivinhacao } from './atv_cap6/q14.js';
const questao14 = executarJogoAdivinhacao([50, 75, 25, 60, 70, 65, 63, 64, 62]);







//Capítulo 7 - Questão 1
import { criarAluno } from './atv_cap7/q1.js';
const aluno = criarAluno("Ana Silva", 25, "Engenharia de Software", [9.5, 8.0, 7.5]);
console.log("Nome:", aluno.nome);
console.log("Idade:", aluno.idade);
console.log("Curso:", aluno.curso);
console.log("Notas:", aluno.notas);

//Capítulo 7 - Questão 2
import { criarCarro } from './atv_cap7/q2.js';
const carro = criarCarro("Chevrolet", "Onix", 2024);
console.log("Marca do carro:", carro.marca);

//Capítulo 7 - Questão 3
import { criarLivro } from './atv_cap7/q3.js';
const livro = criarLivro("Aprenda Programar com JavaScript", "Jesiel Viana", 2025);
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);

//Capítulo 7 - Questão 4
import { criarProduto, calcularValorTotal } from './atv_cap7/q4.js';
const produto = criarProduto("Mouse Sem Fio", 45.90, 10);
const valorTotalEstoque = calcularValorTotal(produto.preco, produto.quantidade);
console.log("Produto:", produto.nome);
console.log("Valor Total do Estoque:", valorTotalEstoque);

//Capítulo 7 - Questão 5
import { adicionarElementos } from './atv_cap7/q5.js';
let numeros = [10, 20, 30];
adicionarElementos(numeros, 40, 50);
console.log(numeros);

//Capítulo 7 - Questão 6
import { removerUltimoElemento } from './atv_cap7/q6.js';
let numeros2 = [5, 10, 15, 20];
let elementoRemovido = removerUltimoElemento(numeros2);
console.log(numeros2);
console.log(elementoRemovido);

//Capítulo 7 - Questão 7
import { removerPrimeiroElemento } from './atv_cap7/q7.js';
let numeros3 = [1, 2, 3, 4, 5];
let elementoRemovido2 = removerPrimeiroElemento(numeros3);
console.log(numeros3);
console.log(elementoRemovido2);

//Capítulo 7 - Questão 8
import { adicionarElementosInicio } from './atv_cap7/q8.js';
let cores = ['vermelho', 'verde'];
adicionarElementosInicio(cores, 'azul', 'amarelo');
console.log(cores);

//Capítulo 7 - Questão 9
import { combinarArrays } from './atv_cap7/q9.js';
let frutas = ['maçã', 'banana'];
let maisFrutas = ['laranja', 'pera'];
let todasAsFrutas = combinarArrays(frutas, maisFrutas);
console.log(todasAsFrutas);

//Capítulo 7 - Questão 10
import { fatiarArray } from './atv_cap7/q10.js';
let animais = ['cachorro', 'gato', 'pássaro', 'peixe'];
let novosAnimais = fatiarArray(animais, 1, 3);
console.log(novosAnimais);

//Capítulo 7 - Questão 11
import { removerElementos } from './atv_cap7/q11.js';
let cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza'];
removerElementos(cidades, 2, 2);
console.log(cidades);

//Capítulo 7 - Questão 12
import { ordenarArray } from './atv_cap7/q12.js';
let numeros4 = [50, 10, 1, 30, 20, 2];
ordenarArray(numeros4);
console.log(numeros4);

//Capítulo 7 - Questão 13
import { adicionarFilmes } from './atv_cap7/q13.js';
let filmes = [];
adicionarFilmes(filmes, 
    prompt('Digite o nome do primeiro filme:'),
    prompt('Digite o nome do segundo filme:'),
    prompt('Digite o nome do terceiro filme:'),
    prompt('Digite o nome do quarto filme:'),
    prompt('Digite o nome do quinto filme:')
);
console.log(filmes);

//Capítulo 7 - Questão 14
import { exibirComFor } from './atv_cap7/q14.js';
exibirComFor(filmes);

//Capítulo 7 - Questão 15
import { exibirComForOf } from './atv_cap7/q15.js';
exibirComForOf(filmes);

//Capítulo 7 - Questão 16
import { imprimirComForEach } from './atv_cap7/q16.js';
let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirComForEach(numeros5);

//Capítulo 7 - Questão 17
import { dobrarNumeros } from './atv_cap7/q17.js';
let numeros6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosDobrados = dobrarNumeros(numeros6);
console.log(numerosDobrados);

//Capítulo 7 - Questão 18
import { filtrarCarrosNovos } from './atv_cap7/q18.js';
let carros = [
    { modelo: "Gol", ano: 2008 },
    { modelo: "Onix", ano: 2015 },
    { modelo: "Kwid", ano: 2019 },
    { modelo: "Palio", ano: 2005 }
];
let carrosNovos = filtrarCarrosNovos(carros, 2010);
console.log(carrosNovos);

//Capítulo 7 - Questão 19
import { verificarPresenca } from './atv_cap7/q19.js';
let frutas2 = ['banana', 'laranja', 'maçã', 'uva'];
let temMaca = verificarPresenca(frutas2, 'maçã');
console.log(temMaca);

//Capítulo 7 - Questão 20
import { encontrarMaiorDeIdade } from './atv_cap7/q20.js';
let pessoas = [
    { nome: "Pedro", idade: 17 },
    { nome: "Maria", idade: 22 },
    { nome: "João", idade: 18 },
    { nome: "Ana", idade: 15 }
];
let maiorDeIdade = encontrarMaiorDeIdade(pessoas, 18);
console.log(maiorDeIdade);

//Capítulo 7 - Questão 21
import { contarCaracteres } from './atv_cap7/q21.js';
let meuNome = "Moacir";
let numeroDeCaracteres = contarCaracteres(meuNome);
console.log(numeroDeCaracteres);

//Capítulo 7 - Questão 22
import { imprimirPrimeiroEUltimoNome } from './atv_cap7/q22.js';
imprimirPrimeiroEUltimoNome("Ana Maria da Silva");

//Capítulo 7 - Questão 23
import { imprimirPrimeiroNome } from './atv_cap7/q23.js';
imprimirPrimeiroNome("Carlos Eduardo Pereira");

//Capítulo 7 - Questão 24
import { converterParaMaiusculas } from './atv_cap7/q24.js';
let frase = "aprender javascript é divertido";
let fraseMaiuscula = converterParaMaiusculas(frase);
console.log(fraseMaiuscula);






//Capítulo 8 - Questão 1
import { vantagensModularizacao } from './atv_cap8/q1.js';
const vantagens = vantagensModularizacao();
vantagens.forEach(v => console.log(v));

//Capítulo 8 - Questão 2
import { comparacaoModulos } from './atv_cap8/q2.js';
const comparacao = comparacaoModulos();
console.log(comparacao.commonjs);
console.log(comparacao.esmodules);
console.log(comparacao.recomendacao);

//Capítulo 8 - Questão 3
const q3 = require('./atv_cap8/q3.js');
const operacoesCJS = q3.operacoesMatematicas();
console.log(operacoesCJS.soma);
console.log(operacoesCJS.subtracao);
console.log(operacoesCJS.multiplicacao);
console.log(operacoesCJS.divisao);
console.log(operacoesCJS.divisaoPorZero);
console.log(operacoesCJS.exponenciacao);

//Capítulo 8 - Questão 4
import { operacoesMatematicasESM } from './atv_cap8/q4.js';
const operacoesESM = operacoesMatematicasESM();
console.log(operacoesESM.soma);
console.log(operacoesESM.subtracao);
console.log(operacoesESM.multiplicacao);
console.log(operacoesESM.divisao);
console.log(operacoesESM.divisaoPorZero);
console.log(operacoesESM.exponenciacao);

//Capítulo 8 - Questão 5
import { gerenciarUsuarios } from './atv_cap8/q5.js';
const usuariosGerenciados = gerenciarUsuarios();
console.log(usuariosGerenciados.inicial);
console.log(usuariosGerenciados.atualizado);
console.log(usuariosGerenciados.final);

//Capítulo 8 - Questão 6
import { calcularLogaritmos } from './atv_cap8/q6.js';
const logaritmos = calcularLogaritmos();
console.log(logaritmos.log10);
console.log(logaritmos.loge);

//Capítulo 8 - Questão 7
import { realizarTodasConversoes } from './atv_cap8/q7.js';
const conversoes = realizarTodasConversoes();
console.log(conversoes.tempo);
console.log(conversoes.dados);






//Capítulo 9 - Questão 1
import { demonstrarRedeSocial } from './atv_cap9/q1.js';
const resultadosRedeSocial = demonstrarRedeSocial();
console.log(`Seguidores do Carlos: ${resultadosRedeSocial.seguidoresUsuario2}`);
console.log(`Pessoas que Ana segue: ${resultadosRedeSocial.seguindoUsuario1}`);
console.log(`Curtidas na publicação: ${resultadosRedeSocial.curtidasPublicacao}`);
console.log(`Comentários na publicação: ${resultadosRedeSocial.comentariosPublicacao}`);
console.log(`Descrição atual: ${resultadosRedeSocial.descricaoAtual}`);
console.log(`Texto do comentário: ${resultadosRedeSocial.textoComentario}`);

//Capítulo 9 - Questão 2
import { demonstrarBiblioteca } from './atv_cap9/q2.js';
const resultadosBiblioteca = demonstrarBiblioteca();
console.log(`Total de livros: ${resultadosBiblioteca.totalLivros}`);
console.log(`Total de usuários: ${resultadosBiblioteca.totalUsuarios}`);
console.log(`Livros disponíveis: ${resultadosBiblioteca.livrosDisponiveis}`);
console.log(`Livros emprestados: ${resultadosBiblioteca.livrosEmprestados}`);
console.log(`Livros com Maria: ${resultadosBiblioteca.livrosMaria}`);
console.log(`"1984" disponível: ${resultadosBiblioteca.disponibilidade1984}`);
console.log(`"Dom Casmurro" disponível: ${resultadosBiblioteca.disponibilidadeDomCasmurro}`);

//Capítulo 9 - Questão 3
import { demonstrarAplicativoMusicas } from './atv_cap9/q3.js';
const resultadosMusicas = demonstrarAplicativoMusicas();
console.log(`Total de artistas: ${resultadosMusicas.totalArtistas}`);
console.log(`Músicas do Queen: ${resultadosMusicas.totalMusicasArtista1}`);
console.log(`Músicas dos Beatles: ${resultadosMusicas.totalMusicasArtista2}`);
console.log(`Músicas na playlist: ${resultadosMusicas.musicasPlaylist}`);
console.log(`Música atual: ${resultadosMusicas.musicaAtual}ª da playlist`);
console.log(`Música tocando: ${resultadosMusicas.musicaTocando}`);
console.log(`Artista da música atual: ${resultadosMusicas.nomeArtistaMusicaAtual}`);