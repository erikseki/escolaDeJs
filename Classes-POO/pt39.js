// tanto o metodo normal e o metodo construtor, eles vao seguir as mesmas regras pra definir uma function (parametro.)

class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0

    }
    speedUp(acceleration) {
        this.velocity += acceleration
    }

}

// sem nenhum valor adicionado para a velocity 
let artemis = new Spaceship(`Artemis`)
console.log(artemis)

Spaceship  { name: "Artemis", velocity: 0 }
name: "Artemis"
velocity: 0
undefined


class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0

    }
    speedUp(acceleration) {
        this.velocity += acceleration
    }

}

// adicionando valores novos de soma para a velocity 
let artemis = new Spaceship(`Artemis`)
artemis.speedUp(10)
artemis.speedUp(15)
console.log(artemis)

Spaceship  { name: "Artemis", velocity: 25 }
name: "Artemis"
velocity: 25
undefined