//Funções do array (Push, para adicionar uma string na ultima posição)
//Funções do array (Pop, para excluir uma string na ultima posição) dá pra ver qual string foi excluida 
//Funções do array (Shift, para excluir uma string na primeira posição)
//Funções do array (Unshift, para adicionar uma string na primeira posição)
//Funções do array (Length, para ver quantas strings tem)
//Funções do array (indexOf, saber a posição de uma determinada string)


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
console.log(hitchedSpaceship)
hitchedSpaceship.push(`Supernova`)
console.log(hitchedSpaceship)
    (3) ["Colossus", "Elemental", "Helmet"]
    (4) ["Colossus", "Elemental", "Helmet", "Supernova"]
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
console.log(hitchedSpaceship)
hitchedSpaceship.pop()
console.log(hitchedSpaceship)
    (3) ["Colossus", "Elemental", "Helmet"]
    (2) ["Colossus", "Elemental"]
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
console.log(hitchedSpaceship)
let removeSpaceship = hitchedSpaceship.pop()
console.log(removeSpaceship)
    (3) ["Colossus", "Elemental", "Helmet"]
Helmet
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
console.log(hitchedSpaceship)
let removeSpaceship = hitchedSpaceship.shift()
console.log(removeSpaceship)
console.log(hitchedSpaceship)
    (3) ["Colossus", "Elemental", "Helmet"]
Colossus
    (2) ["Elemental", "Helmet"]
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
console.log(hitchedSpaceship)
hitchedSpaceship.unshift(`Fenix`)
console.log(hitchedSpaceship)
    (3) ["Colossus", "Elemental", "Helmet"]
    (4) ["Fenix", "Colossus", "Elemental", "Helmet"]
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
console.log(hitchedSpaceship.length)
3
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
let elementalPos = hitchedSpaceship.indexOf(`Elemental`)
console.log(elementalPos)
1
undefined


let hitchedSpaceship = [`Colossus`, `Elemental`, `Helmet`]
let elementalPos = hitchedSpaceship.indexOf(`Golias`)
console.log(elementalPos) -
    1
undefined