testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function() {
        console.log(this.name) // função padrao mesmo sendo anonima, vai obedecer ao escopo do objeto
    },
    arrowFunction: () => {
        console.log(this.name)
    }

}

testingArrow.normalFunction()
Escola de Javascript
undefined


testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name) // a arrow function sempre vai estar inserida no contexto onde ela vai ser chamada
    }

}

testingArrow.arrowFunction()

undefined

// imprimindo apenas com "this"

// imprimindo a normalFunction que retorna o proprio objeto
testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function() {
        console.log(this)
    },
    arrowFunction: () => {
        console.log(this.name)
    }

}

testingArrow.normalFunction() {
    name: "Escola de Javascript",
    normalFunction: ƒ,
    arrowFunction: ƒ
}
arrowFunction: () => { console.log(this.name) }
name: "Escola de Javascript"

undefined


testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function() {
        console.log(this)
    },
    arrowFunction: () => {
        console.log(this)
    }

}

testingArrow.arrowFunction()

// retorna o contexto do navegador, (objeto complexo com uma caracteristica name)

undefined