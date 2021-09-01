function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert(`nave parada. As Comportas podem ser abertas. `)
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log(`velocidade atual: ` + velocity)
})

//parametro de repetição de desaceleração de 150 para 0 ou proximo a 0.
//velocity recebe "spaceshipVelocity = 150";e printer recebe HOF com console.log e variavel velocity com seu 
//respectivo valor. (cada desaceleração, é imprimido no console os valores).