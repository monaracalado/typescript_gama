"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 24;
var idade2 = 2.4;
// String
var nome = 'Monara Calado';
// Array 
var idades = [21, 57, 35, 87];
var idades2 = [25, 67, 87, 12, 24];
// Tuple - para uma quantidade predeterminada e tipos expecificos num array
var jogadores;
jogadores = ['Monara', 2, true];
// Enum - faz um map das informações 
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Apovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Apovado;
// Any - literalmente qualquer coisa
var retornoDaAPI = [123, 'Monara', false];
var retornoDaAPI2 = {
// .....
};
// Void - utilizados em funções, quando uma função não retorna nada
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var nu = null;
var un = undefined;
// Object
function criar(obejeto) {
    // .....
}
criar({
    propriedade: 1
});
// Never - uma função que nunca acaba
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types - pode ter mais de um tipo
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
console.log(10);
console.log('10');
var funcionarios = [{
        nome: 'Monara',
        sobrenome: 'Calado',
        dataNascimento: new Date()
    }, {
        nome: 'Samara',
        sobrenome: 'Rocha',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionario: " + funcionario.nome);
    }
}
// Campos opcionas é representado por '?'
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Monara',
    telefone: '4544542',
};
// Type Assertion - define explicitamente no codigo o tipo da variavel depois de determinado momento
var minhaIdade = 24;
minhaIdade.toString();
// (<number>minhaIdade).toString(); 
// const input = document.getElementById('numero1') as HTMLInputElement;
var input = document.getElementById('numero1');
console.log(input.value);
