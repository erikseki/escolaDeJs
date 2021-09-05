// utilizando o Object (parecido com o array) com os valores 
let spaceship = {
    name:"Fenix",
    crewQuantity : "7",
    type:"Batalha"
}
console.log(spaceship) 

{name:"Fenix", crewQuantity:"7", type:"Batalha"}
undefined


// variável.chave para imprimir o valor especificado ex: "console.log(spaceship.type)"  
let spaceship = {
    name:"Fenix",
    crewQuantity : "7",
    type:"Batalha"
}
console.log(spaceship.type)

Batalha
undefined


// da pra utilizar desta maneira tbm ex: "console.log(spaceship["name"])"
let spaceship = {
    name:"Fenix",
    crewQuantity : "7",
    type:"Batalha"
}
console.log(spaceship["name"])

Fenix
undefined


// duas maneiras de colocar chaves e seus valores 
// ex : "  spaceship.isHitched = false , spaceship["shieldLevel"] = 100 "
let spaceship = {
    name:"Fenix",
    crewQuantity : "7",
    type:"Batalha"
}
spaceship.isHitched = false 
spaceship["shieldLevel"] = 100
console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

false
100
undefined

// da pra deixar a variável sem objeto e se necessário utilizar os comando de inserção de tal 
let spaceship = {

}
console.log(spaceship)
spaceship.isHitched = false 
spaceship["shieldLevel"] = 100
console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

{}
isHitched: false
shieldLevel: 100

false
100
undefined


// outra maneira de atribuir um novo objeto a variável 
// ex: " let spaceship = new Object() "
let spaceship = new Object()

console.log(spaceship)
spaceship.isHitched = false 
spaceship["shieldLevel"] = 100
console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

{}
isHitched: false 
shieldLevel: 100

false
100
undefined