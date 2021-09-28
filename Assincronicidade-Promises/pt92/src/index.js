let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject) { // promise recebe uma função, promise envia dois paramentros (resolve,reject) elas tbm sao funções. Resolve quando encerrar com sucesso. Reject encerrada com falha
        if (acceleration > 0) {
            velocity += acceleration * 2
            console.log(`Nova velocidade : ${velocity}`)
            resolve(velocity)
        } else {
            console.log("aceleração invalida")
            reject("nao possui aceleração")
        }

    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log("Depois de acelerar:\n", komodoShip)
}).catch(message => { // catch (capturar um erro do reject), "reject("nao possui aceleração")"
    console.log(`Komodo: ${message}`)
})

console.log("execução de Promises")
console.log(komodoShip)


// a execução passa pelo função com promises, contudo o setTimeOut 
// segura a compilação e passa para o ultimo console.log, logo 
// em seguida a execução do Promises é executada e imprimida