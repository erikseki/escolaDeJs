// ferramenta Node descrevendo formato JSON

let planet_json = `{
    ... "name": "Terra",
    ... "physicalCharacteriscts":{
    ..... "surfaceArea": 410072000,
    ..... "equatorialDiameter": 12756.2
    ..... },
    ... "colors": ["Azul", "Branco", "Marrom"],
    ... "startRotation" : "00:00",
    ... "finishRotation" : "23:59"
    ... }`

console.log(planet_json) {
    "name": "Terra",
    "physicalCharacteriscts": {
        "surfaceArea": 410072000,
        "equatorialDiameter": 12756.2
    },
    "colors": ["Azul", "Branco", "Marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
}
undefined
    >
    let planet = JSON.parse(planet_json)
undefined
    >
    console.log(planet) {
        name: 'Terra',
        physicalCharacteriscts: { surfaceArea: 410072000, equatorialDiameter: 12756.2 },
        colors: ['Azul', 'Branco', 'Marrom'],
        startRotation: '00:00',
        finishRotation: '23:59'
    }
undefined
    >
    planet.name 'Terra' >
    planet.physicalCharacteriscts { surfaceArea: 410072000, equatorialDiameter: 12756.2 }