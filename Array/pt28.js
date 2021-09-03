// ----------MÉTODO SPLICE-----------
// comando variavel.splice(posição, novos valores )

let spaceshipNames = [`Elemental`, `Darwin`, `Artemis`, `Supernova`]
console.log(spaceshipNames)
removedSpaceships = spaceshipNames.splice(1, 2, `Deméter`, `Puller`, `Golias`)
console.log(spaceshipNames)
console.log(removedSpaceships)

(4) ["Elemental", "Darwin", "Artemis", "Supernova"]
(5) ["Elemental", "Deméter", "Puller", "Golias", "Supernova"]
(2) ["Darwin", "Artemis"]
undefined


// da pra fazer tambem a exclusão de certos valores apenas
// comando variavel.splice(posição)
let spaceshipNames = [`Elemental`, `Darwin`, `Artemis`, `Supernova`]
console.log(spaceshipNames)
removedSpaceships = spaceshipNames.splice(1, 2)
console.log(spaceshipNames)
console.log(removedSpaceships)

(4) ["Elemental", "Darwin", "Artemis", "Supernova"]
(2) ["Elemental", "Supernova"]
(2) ["Darwin", "Artemis"]
undefined


// -----------MÉTODO SLICE-----------
// metodo utilizado para extrair algum valor ou info. 
// comando variavelqualquer.slice(valores) 

let spaceshipNames = [`Elemental`, `Darwin`, `Artemis`, `Supernova`]
let extractedNames = spaceshipNames.slice(1, 3)
console.log(spaceshipNames)
console.log(extractedNames)

(4) ["Elemental", "Darwin", "Artemis", "Supernova"]
(2) ["Darwin", "Artemis"]
undefined