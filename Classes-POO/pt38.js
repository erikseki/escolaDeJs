class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation(`Observatorio`, 40)

console.log(observatory)

SpacialStation { name: "Observatorio", platformsQuantity: 40 }
name: "Observatorio"
platformsQuantity: 40
undefined


class Spaceship {
    constructor(name, type = `Descoberta`) {
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship(`Darwin`)
let helmet = new Spaceship(`Helmet`, `Batalha`)
console.log(darwin)
console.log(helmet)

Spaceship  { name: "Darwin", type: "Descoberta" }
Spaceship  { name: "Helmet", type: "Batalha" }
undefined