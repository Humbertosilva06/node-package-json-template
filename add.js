import { countries } from "./countries.js"

//faremos a logica do terceiro script, que adiciona outro país e sigla a lista
// o indice 2 é o nome do pais que colocaremos no terminal e o 3 a sigla (o 0 e 1 são o node add.js que esta no package json)

//a afunção se não colocarmos nada retorna insira os valores, se colocarmos os dois argumentos  ele cria um objeto novo pais com os valores e da um push para o array countries, por fim mostra a lista no terminal. entao rodamos o npm run addPais nome do pais e sigla do pais

const nomeDePais = process.argv[2]
const sigla = process.argv[3]

if(!nomeDePais && !sigla){
    console.log("insira valores")

}else{
    
    const novopais = {

        name:  nomeDePais ,
        code: sigla
    }

    countries.push(novopais)
    console.table(countries)

    }