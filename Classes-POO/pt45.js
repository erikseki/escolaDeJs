// METODO SET

class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0



    }


    set velocity(newVelocity) { // recebeu 130 como parametro
        if (newVelocity > 120) { // se 130 for mais que 120 ent, recebeu 120 
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity

        }
    }

}

let spaceship = new TransportSpaceship(`Transportador`)
spaceship.velocity = 130
console.log(spaceship)


TransportSpaceship  {
    name: "Transportador",
    currentVelocity: 120
}
currentVelocity: 120 name: "Transportador"
undefined


// METODO GET

class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation(`Gaia`, 500)
console.log(resourceProcessor.weeklyProcessedLoad)

125
undefined


class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation(`Gaia`, 500)
console.log(resourceProcessor.weeklyProcessedLoad)
resourceProcessor.monthlyProcessedLoad = 600
console.log(resourceProcessor.weeklyProcessedLoad)

125
150
undefined