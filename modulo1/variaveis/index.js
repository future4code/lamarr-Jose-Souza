// Exercícios de interpretação de código.

/*
 questao 1
let a = 10
let b = 10
console.log(b) imprime (10)

b = 5
console.log(a, b) imprime (10, 5)
*/

/*
questao 2
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c) imprime (20, 10, 10)
*/

/* 
questao 3
let p = prompt("Quantas horas você trabalha por dia?") 
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

p = horasTrabalha
t = quantoRecebe
*/

// Exercicio de escrita de codigo.

// Questao 1.




let nome = null;
let idade = null;
console.log(typeof nome)
console.log(typeof idade)
// esse tipo foi impresso pois nome igual string, e idade igual number.


// Antes a idade veio como Number, porem agora esta como String, por isso terei que fazer uma conversao.

prompt("Qual seu nome?")
prompt("Qual sua idade?")


nome = prompt("Qual seu nome?")
idade = Number(prompt("Qual sua idade?"))

console.log("NOME:", typeof nome)
console.log("IDADE:", typeof idade)

console.log("Ola", nome,", voce tem" ,idade, "anos.")


// Questao 2.


prompt("Voce esta vivo, Sim ou Nao?")
prompt("Voce esta de bone, Sim ou Nao?")
prompt("Voce esta sentado, Sim ou Nao?")

let vivo = null;
let bone = null;
let sentado = null;

vivo = prompt("Voce esta vivo, Sim ou Nao?")
bone = prompt("Voce esta de bone, Sim ou Nao?")
sentado = prompt("Voce esta sentado, Sim ou Nao?")

console.log("Voce esta vivo, Sim ou Nao?", vivo,)
console.log("Voce esta de bone, Sim ou Nao?", bone,)
console.log("Voce esta sentado, Sim ou Nao?", sentado,)


// Questao 3.

let a = 10
let b = 25
// agora vamos inverter os valores das variaveis;

let c = null

// estou utilizando uma variavel de valor nulo para me axiliar no armazenamento de uma das variaveis para que eu nao perca o valor no decorrer do processo.

c = a
a = b
b = c



console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio.

prompt("Escolha um numero para corresponder ao numero1")
prompt("Escolha outro numero para corresponder ao numero2")

const numero1 = Number(prompt("Escolha um numero para corresponder ao numero1"))
const numero2 = Number(prompt("Escolha outro numero para corresponder ao numero2"))

/* 

1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.

*/


console.log("A seguir o resultado de X", numero1 + numero2)
console.log("A seguir o resultado de Y", numero1 * numero2)


/*
A principio o resultado nao estava vindo correto, entao identifiquei que as variaveis dos numeros,
estava retornando como string e por isso a funcao de soma nao estava sendo executada corretamente.
 */