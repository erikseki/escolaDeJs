let spaceship = prompt("Digite um nome da nave")
let charToReplace = prompt("  qual caractere voce deseja substituir")
let replacementChar = prompt("Por qual caractere voce deseja substituir")

console.log(spaceship, charToReplace, replacementChar)
Elemental e h
undefined


let spaceship = prompt("Digite um nome da nave")
let charToReplace = prompt("  qual caractere voce deseja substituir")
let replacementChar = prompt("Por qual caractere voce deseja substituir")
let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if (spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar 
    }else {
        newSpaceship += spaceship[pos]
}
}
alert("O novo nome da nave e " + newSpaceship)


undefined
Elemental 
Elhmhntal

let spaceship = prompt("Digite um nome da nave")
let charToReplace = prompt("  qual caractere voce deseja substituir")
let replacementChar = prompt("Por qual caractere voce deseja substituir")
let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if (spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar 
    }else {
        newSpaceship += spaceship[pos]
}
}
alert("O novo nome da nave e " + newSpaceship)

undefined
Helmet 
Hilmit



// trocar todos os e por h 

// pos = 1  E  e  newSpaceship = E 
// pos = 2  l  e  newSpaceship = El
// pos = 3  e  e  newSpaceship = Elh 
// ...

// pos = 8  l  e  newSpaceship = Elhmhntal 