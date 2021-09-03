// array bidimensional = arrays englobando outras arrays dentro. 
// exemplos de capsula e metodos posição de chamada como (console.log(hitchedSpaceship[3][1][0])) 

let hitchedSpaceship = [
    [`Elemental`, 7],
    [`Helmet`, 13],
    [`Golias`, 5],
    [`Supernova`, 10]
]
console.log(hitchedSpaceship[0])
    (2) ["Elemental", 7]
undefined


let hitchedSpaceship = [
    [`Elemental`, 7],
    [`Helmet`, 13],
    [`Golias`, 5],
    [`Supernova`, 10]
]
hitchedSpaceship.push([`Colossus`, 8])
console.log(hitchedSpaceship)
    (2) ["Elemental", 7](2) ["Helmet", 13](2) ["Golias", 5](2) ["Supernova", 10](2) ["Colossus", 8]
undefined


let hitchedSpaceship = [
    [`Elemental`, 7],
    [`Helmet`, 13],
    [`Golias`, 5],
    [`Supernova`, 10]
]
console.log(hitchedSpaceship[3][0])
Supernova
undefined


let hitchedSpaceship = [
    [`Elemental`, 7],
    [`Helmet`, 13],
    [`Golias`, 5],
    [`Supernova`, [true, false]]
]
console.log(hitchedSpaceship[3][1][0])
true
undefined