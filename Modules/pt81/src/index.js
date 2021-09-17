const Planet = require('./planet')
const planetOperations = require('./planet_operations')

let planets = [
    new Planet("Mercurio", 0.39),
    new Planet("Venus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.72),
    new Planet("Jupiter", 5.2),
    new Planet("Saturno", 9.73),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]

planets.forEach(planet => {
    distanceFromSun = planetOperations.convertAUtoKm(planet.auToSun).toFixed(2)
    console.log(`${planet.name} - ${planet.auToSun}AU - ${distanceFromSun}km`)

})