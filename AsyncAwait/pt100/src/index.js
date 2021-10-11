import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

async function adjustPosition(x, y, z) {
    if(z > 90) {
        return Promise.reject("Angulo Z Invalido para arma")
    }
    laserGun.currentPosition = [x, y, z]
    return ([x, y, z])
}

async function fire(x, y, z) {
    laserGun.firing = true
    return ([x, y, z])
}

async function moveAndFire(x, y, z) {
    try { // try catch utilizado para pegar o reject da promise ao inves de disparar um Error em vermelho.
    let newCoordinates = await adjustPosition(x,y,z) // retorno da Async Function do Await direto para a variavel do newCoordinates
    console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
    let fireCoord = await fire(...newCoordinates)
    console.log(`Começando a atirar nas coordenadas (${fireCoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`)
    }catch(error) {
        console.log(error)
    }
}

moveAndFire(20, 40, 90)

// SO PODEMOS UTILIZAR O AWAIT DENTRO DE UMA ASYNC FUNCTION PRA PODER CHAMAR OUTRO ASYNC FUNCTION OU UMA OUTRA PROMISE.