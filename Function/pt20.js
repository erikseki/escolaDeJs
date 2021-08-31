// exemplos de erros com escopos de functions,
// utilizando var e let  

function setSpaceshipDetails() {
    let velocity = 50
    if (velocity == 50) {
        velocity = 60
        var spaceshipName = `Elemental`
        let spaceshipType = `Discovery`
    }

    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}

setSpaceshipDetails


function setSpaceshipDetails() {
    let velocity = 50
    if (velocity == 50) {
        velocity = 60
        var spaceshipName = `Elemental`
        let spaceshipType = `Discovery`
    }

    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}

setSpaceshipDetails()
60
Elemental
Uncaught ReferenceError:


    function setSpaceshipDetails() {
        console.log(spaceshipName)
        console.log(spaceshipType)
        var spaceshipName = `Elemental`
        let spaceshipType = `Discovery`
        console.log(spaceshipName)
        console.log(spaceshipType)

    }

setSpaceshipDetails()
VM1436: 2 undefined