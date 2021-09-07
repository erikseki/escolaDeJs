class Spaceship {
    static get decelerationRate() {
        return 0.15
    }
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate)) // decelerationRate como metodo get podemos chamar como se fosse uma variavel.
    }
}

let spaceship = new Spaceship(`Apollo`)

spaceship.speedUp(100)
console.log(spaceship)

Spaceship  {
    name: "Apollo",
    currentVelocity: 85
}
undefined