// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 24;
const idade2: number = 2.4;

// String
const nome: string = 'Monara Calado';

// Array 
const idades: number[] = [21, 57, 35, 87];
const idades2: Array<number> = [25, 67, 87, 12, 24];

// Tuple - para uma quantidade predeterminada e tipos expecificos num array
let jogadores: [string, number, boolean];
jogadores = ['Monara', 2, true];

// Enum - faz um map das informações 
enum statusAprovacao {
    Apovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.Apovado;

// Any - literalmente qualquer coisa
const retornoDaAPI: any[] = [123, 'Monara', false];
const retornoDaAPI2: any = {
    // .....
};

// Void 
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const nu: null = null;
const un: undefined = undefined;

// Object
function criar(obejeto: object) {
    // .....
}
criar({
    propriedade: 1
})

// Never - uma função que nunca acaba
function loopInfinito(): never {
    while (true) {}
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou')
}

// Union Types - pode ter mais de um tipo
const nota: string | number = 5;
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}

console.log(10);
console.log('10');