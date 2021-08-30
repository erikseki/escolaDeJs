var pilot = prompt(`qual o seu nome piloto`)
undefined

pilot
"erikseki"

var velocity = 0
undefined

var newVelocity = prompt(`velocidade desejada`)
undefined

var confirmVelocity = confirm(`estamos acelerando` + newVelocity + `km/s`)

if (confirmVelocity) {
    velocity = newVelocity 

}
console.log(velocity)
0
undefined

var pilot = prompt(`qual o seu nome piloto`)

var velocity = 0

var newVelocity = prompt(`velocidade desejada`)

var confirmVelocity = confirm(`estamos acelerando ` + newVelocity + `km/s `)

if (confirmVelocity) {
    velocity = newVelocity 

}
console.log(velocity)
50
undefined

var pilot = prompt(`qual o seu nome piloto`)

var velocity = 0

var newVelocity = prompt(`velocidade desejada`)

var confirmVelocity = confirm(`estamos acelerando para ` + newVelocity + `km/s `)

if (confirmVelocity) {
    velocity = newVelocity 

}
console.log(velocity)
50
undefined

velocity
"50"


var pilot = prompt(`qual o seu nome piloto`)

var velocity = 0

var newVelocity = prompt(`velocidade desejada`)

var confirmVelocity = confirm(`estamos acelerando para ` + newVelocity + `km/s `)

if (confirmVelocity) {
    velocity = newVelocity 

}
if (velocity <= 0 ) {
    alert(`Nave está parada, Considere partir e aumentar a velocidade`) 
    }else if (velocity < 40) {
        alert(`Você está devagar. Pode aumentar a velocidade`) 
    }else if (velocity < 80) {
        alert(`Parece uma boa velocidade para manter`)
    }else if (velocity < 100) {
        alert(`velocidade muita alta, diminua`)
    }else {
        alert(`velocidade perigosa. Controle automático forçado.`)
    }
undefined




var pilot = prompt(`qual o seu nome piloto`)

var velocity = 0

var newVelocity = prompt(`velocidade desejada`)

var confirmVelocity = confirm(`estamos acelerando para ` + newVelocity + `km/s `)

if (confirmVelocity) {
    velocity = newVelocity 

}
if (velocity <= 0 ) {
    alert(`Nave está parada, Considere partir e aumentar a velocidade`) 
    }else if (velocity < 40) {
        alert(`Você está devagar. Pode aumentar a velocidade`) 
    }else if (velocity < 80) {
        alert(`Parece uma boa velocidade para manter`)
    }else if (velocity < 100) {
        alert(`velocidade muita alta, diminua`)
    }else {
        alert(`velocidade perigosa. Controle automático forçado.`)
    }
   
alert(`Piloto: ` + pilot + `\nVelocidade` + velocity + `km/s` )
undefined