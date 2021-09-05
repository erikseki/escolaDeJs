// Objetos e Arrays são estruturas diferentes porém tem acessos bem parecidos 

// Objetos são uma estrutura Chave-Valor para quando precisamos mapear propriedades ou atributos 
// Os Arrays sao uma estrutura de lista sequencial para quando precisamos armazenar uma sequencia de elementos 

//
let spaceStation = {
    name:"Receptora",
    platformsQuantity : "25",
    shape: "Esferica"
}

console.log(spaceStation.name.toUpperCase())

RECEPTORA
undefined

// A DIFERENÇA DE : 

// Objetic com uma variavel e suas propriedades
let spaceStation = {
    name:"Receptora",
    platformsQuantity : "25",
    shape: "Esferica"
}

// Array com uma lista de nomes de naves
let spaceshipNames = ["Fenix", "Puller", 'Golias']
console.log(spaceshipNames[0].toUpperCase())

FENIX
undefined