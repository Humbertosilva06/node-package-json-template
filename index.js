import {countries} from "./countries.js";

// no front, esse console.log seria exibido no console do navegador, aqui usamos o comando node index.js no terminal, ele interpretara o codigo js e exibira no terminal:


console.log ("ola mano")

//exemplo de process.argv
// o nome será o input que passaremos no terminal, entao o indice 0 é o node, o indice 1 o arquivo index.js e o 2 o nome que queremos passar pelo terminal, ficaria assim o comando: node index.js humberto
// se eu colocar só o node index.js sem o argumento que seria o indice 2 do process.argv aparecera olá, meu nome é undefined pois ele esperava o argumento e não foi passado:

// const nome = process.argv[2] // 

// console.log ("ola, meu nome é " + nome)

// pratica guiada 1
// process.argv - vamos criar uma palicação  donode que receberá  o nome de um país pelo terminal e  o budcará em uma lista
// primeiramente, criaremos o package json (é um arquivo que é basicamento um resumo do nosso software, contendo as informações do que esta sendo usado por exemplo). podemos fazer com o npm init -y (automaticamente traz as configurações padrão ) ou npm init -y (perguntara como queremos as configurações, é algo mais)
// importar o o arquivo countries
// se eu der o console.log em countries dara um erro de modulo, temos que especificar o tipo de modulo no package json, se não não da pra importar (coloquei na primeira chave, embaixo da main)
//Obs: usei aqui o console table que mostra em formato de tabela


//console.table (countries)

// vamos fazer uma veriricação pra ver se o país existe, caso não, voltar alguma mensagem para não dar undefined
const pais = process.argv[2]

if(!pais){
    console.log("insira um valor")

}else{
    const listaFiltrada = countries.filter((item)=>{
        //filtra a variavel countries (array de objetos com varios paises, se o nome de cada item do array incluir o calor que passaremos no terminal, ela retorna a lsita dos paises)
        return item.name.toLowerCase().includes(pais.toLowerCase())
    })

    console.table(listaFiltrada)

    }

// console.log(pais)


//PRATICA GUIADA 2 SCRIPTS PERSONALIZADOS

// No react, tinhamos o npm run start, que rodava a aplicação, mas por tras disso existia varios putros comandos que o react abstraia pra gente
// podemos fazer scripts no nosso projeto, alterqando a area de scripts do arquivo package json, podemos adicionar varios scripts, com diferentes comandos em cada um

// vamos criar 3 scripts personalizados: um que sempres retorne o brasil; um que retorne todos os paises que comecem com a letra B e um que vai adicionar um pais na lista

// no package json criei na parte de scripts um "buscaPorBrazil": "node index.js Brazil" e um "buscaPorLetraB": "node index.js B"

// no meu index o que eu tenho é a verificação com if, o script ta fazendo o process.argv que a gente estava fazendo no terminal

// para o terceiro script, faremos um novo arquvio chamado add.js, as explicações continuam la

//OBS: o arquivo countries é algo fixo, não da pra adicionar nada, esta tudo sendo feito na memoria, se eu adicionar outro ele substituira o wakanda que acabei de colocar.


// EXERCICIO FIXAÇÃO (sera feito no arquvio fixação js)


