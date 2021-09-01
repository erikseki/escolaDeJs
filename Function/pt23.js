function doubleVelocity(velocity, printer) {
    console.log(`Entrei em doubleVelocity`)
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    console.log(`Nova velocidade: ` + velocity + `km/s`)
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)

Entrei em doubleVelocity
Nova velocidade: 120 km / s
120
undefined

//declarar uma high order function onde vai receber uma outra function anonima dentro de uma variável

function doubleVelocity(velocity, printer) {
    console.log(`Entrei em doubleVelocity`)
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let anotherVelocity = doubleVelocity(50, velocity => {
    console.log(`outra velocidade ` + velocity)
})

Entrei em doubleVelocity
outra velocidade 100
undefined

// variavel "anotherVelocity" vai receber doubleVelocity e vai imprimir o log do doubleVelocity,
// vai receber 50 do "velocity" e vai chamar a callback do printer com o console.log dentro,
// printando no console o texto com o valor da multiplicação