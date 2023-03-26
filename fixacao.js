//1- Crie um programa que receba seu nome e idade. apos recebr os valores, imprima no console uma mensagem que siga esta estrutura: ""ola (nome)!, voce tem (idade) anos. Emsete anos voce tera (nova idade)
//2- fiz um script pra rodar tbm

const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(idade) +7


console.log ("ola ", nome, "voce tem ", idade, "anos. Em sete anos voce tera: ", novaIdade)
