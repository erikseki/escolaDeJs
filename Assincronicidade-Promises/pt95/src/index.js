// promise para acrescentar velocidade, se a velocidade for
// menor que 0 Reject, se for maior, Resolve (dividido por 0.9 para a velocidade receber uma taxa menor de 10%)
const increaseVelocity = function(velocityToIncrease) {
    return new Promise((resolve, reject) => {
        if (velocityToIncrease <= 0) {
            reject("Frenagem acionada")
        } else {
            resolve(velocityToIncrease / 0.9)
        }
    })
}

// promise de novo consumo de bateria (velocidade atual e a velocidade que quer acrementar)
// somar a velocidade atual com o que vai acrescentar e dividir por 10.000
const newBatteryConsumption = function(currentVelocity, velocityToIncrease) {
    return new Promise((resolve, reject) => {
        let newBatteryConsumption = (currentVelocity + velocityToIncrease) / 10000
        if (newBatteryConsumption > 0) {
            resolve(newBatteryConsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}

let velocity = 70

let velocityIncreased = increaseVelocity(velocity)
let batteryConsumption = newBatteryConsumption(80, velocity)

// executar de forma atomica (ou as duas passam ou nenhuma )

Promise.all([velocityIncreased, batteryConsumption]).then(results => {
    console.log(results)
}).catch(errors => {
    console.log(errors)
})