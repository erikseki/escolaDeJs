class Spaceship {
    constructor(name, crewMax, maxRecommendedValue) {
        this.name = name
        this.crewMax = crewMax
        this.maxRecommendedValue = maxRecommendedValue
        this.currentVelocity = 0

    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedValue) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou podera provocar danos a nave`)
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, crewMax, maxRecommendedValue, maxLoadWeight) {
        super(name, crewMax, maxRecommendedValue)
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration) {
        acceleration /= 2
        alert(`incrementando velocidade em ` + acceleration + `km/s`)
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship(`Transportadora`, 4, 100, 400)
console.log(transportSpaceship)
transportSpaceship.speedUp(210)

TransportSpaceship  {
    name: "Transportadora",
    crewMax: 4,
    maxRecommendedValue: 100,
    currentVelocity: 0,
    maxLoadWeight: 400
}
undefined