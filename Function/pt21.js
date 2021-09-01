let doubleSpeed = function(velocity) {
    return velocity * 2
}

let newVelocity = doubleSpeed(40)

console.log(newVelocity)
80
undefined

console.log(speedUp(60, 10))
console.log(doubleSpeed(50))

// chamando funções dentro de variáveis 

let doubleSpeed = function(velocity) {
    return velocity * 2
}

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}
70
100
undefined