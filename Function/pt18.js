function speedUp(velocity, acceleration, unit) {
    let newVelocity = velocity + acceleration
    console.log(`nova velocidade : ` + newVelocity)
    return newVelocity
}

let velocity = 80
let acceleration = 5

console.log(velocity)

velocity = speedUp(velocity, acceleration)

console.log(velocity)
80
nova velocidade: 85
85
undefined

function speedUp(velocity, acceleration, unit) {
    let newVelocity = velocity + acceleration
    console.log(`nova velocidade : ` + newVelocity)
    return newVelocity
}

let velocity = 80
let acceleration = 5

console.log(speedUp(90, 10))
nova velocidade: 100
100
undefined

function speedUp(velocity, acceleration, unit) {
    let newVelocity = velocity + acceleration
    console.log(`nova velocidade : ` + newVelocity)
    return newVelocity
}

let velocity = 80
let acceleration = 5

speedUp(100, 90)
nova velocidade: 190
190