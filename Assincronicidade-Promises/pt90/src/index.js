let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    new Promise(function(resolve, reject) { // promise recebe uma função, promise envia dois paramentros (resolve,reject) elas tbm sao funções. Resolve quando encerrar com sucesso. Reject encerrada com falha
        setTimeout(() => {
            if (acceleration > 0) {
                velocity + acceleration * 2
                console.log(`Nova velocidade : ${velocity}`)
                resolve(velocity)
            } else {
                console.log("aceleração invalida")
                reject("nao possui aceleração")
            }

        }, 1000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)

console.log("execução de Promises")

// a execução passa pelo função com promises, contudo o setTimeOut 
// segura a compilação e passa para o ultimo console.log, logo 
// em seguida a execução do Promises é executada e imprimida