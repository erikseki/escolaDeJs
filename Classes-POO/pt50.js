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

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 5 munição para 6 tiros e clausula de erro disparada
} catch (e) { //parametro do "throw new Error"
}
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: 0
}
undefined // 5 tiros feitos e 0 restantes 


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

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 5 munição para 6 tiros e clausula de erro disparada
} catch (e) { //parametro do "throw new Error"
    console.log(e.message)
    fenixWeapon.reload()
}
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
Arma 10 Sem Munição
SpaceshipWeapon  {
    ident
    shotsLeft: 5
}
identifier: 10 shotsLeft: 5
undefined // 5 tiros feitos e 5 recarregados


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

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 5 munição para 6 tiros e clausula de erro disparada
} catch (e) { //parametro do "throw new Error"
    console.log(e.message)
}
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
Arma 10 Sem Munição
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: 0
}
undefined // 6 de 5 tiros feitos e parou no erro


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

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 5 munição e 5 tiros
} catch (e) { //parametro do "throw new Error"
    console.log(e.message)
}
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: 0
}
undefined // 5 tiros feitos e 0 restantes 


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
            throw new Error(`Arma ` + this.identifier + ` Sem Munição`) // clausula para error após sem munição.
        }
    }

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 5 munição para 6 tiros e clausula de erro disparada
} catch (e) { //parametro do "throw new Error"
    console.log(e.message)
    fenixWeapon.reload()
} finally {
    console.log(`Arma deu bons tiros`)
}
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
Arma deu bons tiros
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: 0
}
undefined // 5 tiros e imprimir 


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
            throw new Error(`Arma ` + this.identifier + ` Sem Munição`) // clausula para error após sem munição.
        }
    }

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 5 munição para 6 tiros e clausula de erro disparada
} catch (e) { //parametro do "throw new Error"
    console.log(e.message)
    fenixWeapon.reload()
} finally {
    console.log(`Arma deu bons tiros`)
}
console.log(fenixWeapon)
Bang
Bang
Bang
Bang
Bang
Arma 10 Sem Munição
Arma deu bons tiros
SpaceshipWeapon  {
    identifier: 10,
    shotsLeft: 5
}
undefined // 5 tiros feitos e no final imprimir texto de bons tiros