// As propriedades do objeto tambem pode receber funções e quando isso acontece, é chamado de metodos; (outras propriedades que nao obtem funções, sao chamadas de metodos).

let spaceship = {
    name:"Deméter", //atributo
    type:'Estracao', //atributo
    maxCrew:20, //atributo
    turnOn : function() {
        alert("Preparando propulsao ")
        alert("Ligando computador de bordo ")
    } // método
    
}

spaceship.turnOn()
undefined


let spaceship = {
    name:"Deméter", //atributo
    type:'Estracao', //atributo
    maxCrew:20, //atributo
    turnOn : function() {
        alert("Preparando propulsao ")
        alert("Ligando computador de bordo ")
    } // método
    
}


// o metodo this serve para nao precisar colocar o parametro dentro da função e futuramente chamar o objeto novamente (evitar conflito)
// temos um parametro (speedUp) dentro de um objeto (spaceship), e quando chamamos ele la em baixo no "spaceship.speedUp(spaceship, 10) " precisamos colocar o proprio objeto novamente
spaceship.velocity = 0 
spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {  
    spaceshipToSpeedUp.velocity += acceleration
}
console.log(spaceship)
spaceship.speedUp(spaceship, 10) 
console.log(spaceship)


maxCrew: 20
name: "Deméter"
speedUp: ƒ (spaceshipToSpeedUp, acceleration)
turnOn: ƒ ()
type: "Estracao"
velocity: 10


maxCrew: 20
name: "Deméter"
speedUp: ƒ (spaceshipToSpeedUp, acceleration)
turnOn: ƒ ()
type: "Estracao"
velocity: 10
undefined


// adicionando metodo "this" 
let spaceship = {
    name:"Deméter", //atributo
    type:'Estracao', //atributo
    maxCrew:20, //atributo
    turnOn : function() {
        alert("Preparando propulsao ")
        alert("Ligando computador de bordo ")
    } // método
    
}

spaceship.velocity = 0 
spaceship.speedUp = function(acceleration) { 
    this.velocity += acceleration // <<< adicionando o metodo this.velocity que antes ja tinhamos acrescentado logo acima.(facilitando o compreendimento do codigo)
}
console.log(spaceship)
spaceship.speedUp(10)
console.log(spaceship)



maxCrew: 20
name: "Deméter"
speedUp: ƒ (acceleration)
turnOn: ƒ ()
type: "Estracao"
velocity: 10


maxCrew: 20
name: "Deméter"
speedUp: ƒ (acceleration)
turnOn: ƒ ()
type: "Estracao"
velocity: 10
undefined


let spaceship = {
    name:"Deméter", //atributo
    type:'Estracao', //atributo
    maxCrew:20, //atributo
    turnOn : function() {
        alert("Preparando propulsao ")
        alert("Ligando computador de bordo ")
        console.log(this.name)
    } // método
    
}

spaceship.velocity = 0 
spaceship.speedUp = function(acceleration) {
    this.velocity += acceleration
}
console.log(spaceship)
spaceship.speedUp(10)
console.log(spaceship)


maxCrew: 20
name: "Deméter"
speedUp: ƒ (acceleration)
turnOn: ƒ ()
type: "Estracao"
velocity: 10


maxCrew: 20
name: "Deméter"
speedUp: ƒ (acceleration)
turnOn: ƒ ()
type: "Estracao"
velocity: 10
undefined