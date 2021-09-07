// por padrao, quando uma classe nao tem herança ela esta herdando do object

class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedvelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentvelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou pedera provocar danos a nave`)
        }
    }
}
undefined



class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedvelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentvelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou pedera provocar danos a nave`)
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert(`Recolhendo armas e parando a nave de batalha`)
    }
}

class DiscoveySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert(`recolhendo equipamento de amostra e parando nave de descoberta`)
    }
}

let darwin = new DiscoveySpaceship(`Dawin`, 10, 200)
let fenix = new BattleSpaceship(`Fenix`, 8, 240)

console.log(darwin)
console.log(fenix)
DiscoveySpaceship  {
    name: "Dawin",
    maxCrew: 10,
    maxRecommendedvelocity: 200,
    currentVelocity: 0
}
currentVelocity: 0 maxCrew: 10 maxRecommendedvelocity: 200 name: "Dawin"


BattleSpaceship  {
    name: "Fenix",
    maxCrew: 8,
    maxRecommendedvelocity: 240,
    currentVelocity: 0
}
currentVelocity: 0 maxCrew: 8 maxRecommendedvelocity: 240 name: "Fenix"
undefined



class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou pedera provocar danos a nave`)
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert(`Recolhendo armas e parando a nave de batalha`)
    }
}

class DiscoveySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert(`recolhendo equipamento de amostra e parando nave de descoberta`)
    }
}

let darwin = new DiscoveySpaceship(`Dawin`, 10, 200)
let fenix = new BattleSpaceship(`Fenix`, 8, 240)

darwin.speedUp(210)
fenix.speedUp(230)
undefined



class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert(`Velocidade maxima ultrapassada\n Diminua ou pdera provocar danos a nave`)
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert(`Recolhendo armas e parando a nave de batalha`)
    }
}

class DiscoveySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert(`recolhendo equipamento de amostra e parando nave de descoberta`)
    }
}

let darwin = new DiscoveySpaceship(`Dawin`, 10, 200)
let fenix = new BattleSpaceship(`Fenix`, 8, 240)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()
undefined