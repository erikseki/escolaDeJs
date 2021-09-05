// nao esta conseguindo entender a posição "2" como propriedade porq o js entende como um number
let spacialStation = {
    name:'Fenix',
    platformsQUantity:10,
    "new name" : "Estelar",
    true: false,
    2: "Descoberta"
}

console.log(spacialStation.2)

Uncaught SyntaxError: missing ) after argument list
undefined


// podem os utilizar esse metodo " console.log(spacialStation["2"]) ou"
let spacialStation = {
    name:'Fenix',
    platformsQUantity:10,
    "new name" : "Estelar",
    true: false,
    2: "Descoberta"
}

console.log(spacialStation["2"])
Descoberta
undefined

// esse metodo " console.log(spacialStation["new name"]) "
let spacialStation = {
    name:'Fenix',
    platformsQUantity:10,
    "new name" : "Estelar",
    true: false,
    2: "Descoberta"
}

console.log(spacialStation["new name"])
Estelar
undefined

// a maneira correta para evitar possiveis erros é adicionar propriedades como variáveis padrões sem espaços e começando com minúsculos.