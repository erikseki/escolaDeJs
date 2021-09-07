class Spaceship {
    constructor(name, crewMax, maxRecommendedVelocity) {
        this.name = name
        this.crewMax = crewMax
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0

    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou podera provocar danos a nave`)
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert(`Naves de transporte so aumentam a velocidade em 1km/s`)
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship(`Transportadora`, 4, 100)
transportSpaceship.speedUp()
undefined



class Spaceship {
    constructor(name, crewMax, maxRecommendedVelocity) {
        this.name = name
        this.crewMax = crewMax
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0

    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou podera provocar danos a nave`)
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert(`Naves de transporte so aumentam a velocidade em 1km/s`)
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship(`Transportadora`, 4, 100)
transportSpaceship.speedUp()
console.log(transportSpaceship)

TransportSpaceship  {
    name: "Transportadora",
    crewMax: 4,
    maxRecommendedVelocity: 100,
    currentVelocity: 1
}
undefined



class Spaceship {
    constructor(name, crewMax, maxRecommendedVelocity) {
        this.name = name
        this.crewMax = crewMax
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0

    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou podera provocar danos a nave`)
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert(`Naves de transporte so aumentam a velocidade em 1km/s`)
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship(`Transportadora`, 4, 100)
transportSpaceship.speedUp(130)
console.log(transportSpaceship)

TransportSpaceship  {
    name: "Transportadora",
    crewMax: 4,
    maxRecommendedVelocity: 100,
    currentVelocity: 1
}
undefined