function speedUp(velocity, unit = `km/s`, acceleration) {
    let newVelocity = velocity + acceleration
    alert(`Nova velocidade: ` + newVelocity + unit)

}

speedUp(50, `mi/s`, 20)
undefined

// colocar os valores "50, `mi/s`, 20" na msm sequencia que os parametros ou 

function speedUp(velocity, acceleration, unit = `km/s`) {
    let newVelocity = velocity + acceleration
    alert(`Nova velocidade: ` + newVelocity + unit)

}

speedUp(50, 20)
undefined

// inverter a ordem e deixar o unit no final