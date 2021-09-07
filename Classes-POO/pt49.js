class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        console.log(`Bang`)
        this.shotsLeft -= 1
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()

Bang
undefined


class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        console.log(`Bang`)
        this.shotsLeft -= 1
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)
Bang
Bang
Bang
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: 2
}
identifier: 10 shotsLeft: 2
undefined


class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        console.log(`Bang`)
        this.shotsLeft -= 1
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
Bang
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: -1
}
undefined


class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        if (this.shotsLeft > 0) {
            console.log(`Bang`)
            this.shotsLeft -= 1
        } else {
            throw new Error(`Arma ` + this.identifier + `Sem Munição`) // clausula para error após sem munição.
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot() // 5 munição para 6 tiros e clausula de erro disparada
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
Uncaught Error: Arma 10 Sem Munição