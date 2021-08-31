function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(` nova velocidade` + newVelocity)
}

speedUp(60, 10)

nova velocidade70
undefined

// função com nome speedUp, dentro da função recebem 2 parâmetros
// variavel newVelocity recebe a soma entre os 2 param e dps imprime no
// console o resultado.


function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(` nova velocidade ` + newVelocity)
}

speedUp(60, 10)

speedUp(40, 20)

speedUp(70, 5)

nova velocidade 70
nova velocidade 60
nova velocidade 75
undefined

// 3 solicitações com diferentes valores do Velocity + Acceleratio, e
// seus respectivos resultados