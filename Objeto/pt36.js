let spaceship = {
    velocity: 0,
    speedUp : function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship () {
    spaceship.name = prompt('Informe o nome da nave ')
    spaceship.type = prompt('Informe o tipo da nave ')
    spaceship.maxVelocity = Number(prompt('Informe a velocidade maxima da nave (km/s)')) // pegar a string do usuario e transformar em tipo Number.
}

function acelerate() {
    let acceleration = Number(prompt("quanto vc quer acelerar ? (km/s) "))
    spaceship.speedUp(acceleration)

    if(spaceship.velocity > spaceship.maxVelocity) {
        alert('Velocidade maxima ultrapassada! ' + 
                '\nVelocidade da Nave: ' + spaceship.velocity + "km/s\n" + 
                    'velocidade maxima da nave ' + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert("Nome " + spaceship.name + "\nTipo : " + spaceship.type + "\nVelocidade da nave : " + 
        spaceship.velocity + "\nVelocidade maxima da nave : " + spaceship.maxVelocity )
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption 
    do {
       chosenOption = prompt("Voce deseja:\n1- Acelerar\n2- Parar") 
    switch (chosenOption) {
        case "1": 
            acelerate()
            break   
        case "2":
            stop()
            break
        default: 
            alert('Opcao Invalida')           


        }
    } while (chosenOption != "2")            
} 

registerSpaceship()
showMenu()