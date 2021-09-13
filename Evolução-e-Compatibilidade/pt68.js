let spaceship = ["Colossus", "artemis", "Fenix"]

console.log(spaceship)
    (3) ["Colossus", "artemis", "Fenix"]
undefined


let spaceship = ["Colossus", "artemis", "Fenix"]

console.log(...spaceship)
Colossus artemis Fenix
// como o "..." expandiu os elemento e considerou como strings
undefined


let spaceship = ["Colossus", "artemis", "Fenix"]

let newSpaceship = [...spaceship, "Puller"]

console.log(newSpaceship)
    (4) ["Colossus", "artemis", "Fenix", "Puller"]
undefined


let spaceship = ["Colossus", "artemis", "Fenix"]

let newSpaceship = [spaceship, "Puller"]

console.log(newSpaceship)
    (3) ["Colossus", "artemis", "Fenix"] 1: "Puller"
undefined


function speedUp(velocity, acceleration) {
    return velocity + acceleration

}

let spaceshipAcceleration = [60, 10]

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)
70
undefined