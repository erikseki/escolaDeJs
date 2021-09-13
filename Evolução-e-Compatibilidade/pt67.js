// segundo o site do mozilla a desestruturação é uma expressão
// do javascript que possibilita extrair dados de arrays ou objeto
// em variaveis distintas.

let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false

}

let spaceshipName = spaceship.name
let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)
Colossus 10
undefined


let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false

}


let { name: spaceshipName, crewQuantity: crewQuantity } = spaceship
//let spaceshipName = spaceship.name
//let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)
Colossus 10
undefined


let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false

}


let { name: spaceshipName, crewQuantity } = spaceship
//let spaceshipName = spaceship.name
//let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)
Colossus 10
undefined


let spaceships = ["Colossus", "Artemis", "Fenix"]

let [colossus, artemis] = spaceships
//let colossus = spaceship[0]
//let artemis = spaceship[1]

console.log(colossus, artemis)
Colossus Artemis
undefined


let spaceships = ["Colossus", "Artemis", "Fenix"]

let [colossus, artemis, fenix, puller] = spaceships
//let colossus = spaceship[0]
//let artemis = spaceship[1]

console.log(colossus, artemis, fenix, puller)
Colossus Artemis Fenix undefined
undefined


let spaceships = ["Colossus", "Artemis", "Fenix"]

let [colossus, artemis, fenix, puller] = spaceships

function printSpaceships([colossus, artemis, fenix, puller]) {
    console.log(colossus, artemis, fenix, puller)
}

printSpaceships(spaceships)
Colossus Artemis Fenix undefined
undefined