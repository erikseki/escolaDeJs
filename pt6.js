let distanceInLy = prompt (`digite a distancia em anos-luz`)

let chosenOption = prompt(`para qual unidade deseja converter?\n1- Parsec(pc)\n2- Unidade Astronomica\n3- quilometros\n\n(Digite o numero da opcao desejada)`)

let chosenUnity 
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = `parsec`
        convertedDistance = distanceInLy * 0.306601
    break
    case `2`:
        chosenUnity = `Unidade Astronomica`
        convertedDistance = distanceInLy * 63241.1
    break
    case `3`:
        chosenUnity = `Quilometros`
        convertedDistance = distanceInLy * 9.5 * Math.pow(10,12)
    break
    default:
        chosenUnity = `Unidade nao identificada`
        convertedDistance = `conversao fora do escopo`
} 

alert(`Distancia em anos-luz: ` + distanceInLy + `\n` + chosenUnity + `: ` + convertedDistance)


undefined