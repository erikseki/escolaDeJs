// lembrar que a interpolação n é um recurso disponivel 
// em todas as linguagens de programação, existe linguagem 
// que pra juntar string é necessario fazer a concatenação padrão

let spaceshipName = "Colossus"

console.log("Nome da nave" + spaceshipName)
Nome da naveColossus
undefined

let spaceshipName = "Colossus"

console.log(`Nome da nave ` + spaceshipName)
Nome da nave Colossus
undefined

let spaceshipName = "Colossus"

console.log(`Nome da nave ${spaceshipName}`)
Nome da nave Colossus
undefined

let spaceshipName = "Colossus"

let newName = `Nome da nave : ${spaceshipName}`

console.log(newName)
Nome da nave: Colossus
undefined

let spaceshipName = "Colossus"

let newName = `Nome da nave : ${spaceshipName}`

console.log(spaceshipName)
Colossus
undefined

let velocity = 50

console.log(`Velocidade da nave ${velocity}`)
Velocidade da nave 50
undefined

let velocity = 50

console.log(`Velocidade da nave ${velocity}km/s`)
Velocidade da nave 50 km / s
undefined

let velocity = 50

console.log(`Velocidade da nave ${velocity * 2} km/s`)
Velocidade da nave 100 km / s
undefined