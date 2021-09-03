const hitchedSpaceships = [
    [`Fenix`, 0, true],
    [`Golias`, 10, true],
    [`Helmet`, 5, false],
    [`Elemental`, 3, true],
    [`Darwin`, 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = `Espaçonaves com mais de 9 Tripulantes ` + crewGreaterThan9.join(`, `)
message += `\nPlataforma com processo de engate: ` + (ongoingHitchPlatform + 1) // +1 porq o index dos elementos começa pelo 0 (acrescenta um para na hora que imprimir sair correto.)
message += `\nEspaçonaves Destacadas ` + highlightedSpaceships.join(`, `)

alert(message)
undefined