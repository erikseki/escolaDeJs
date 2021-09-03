// Iteração do array,comandos (forEach,map,filter e find)

// forEach (comando para acrescentar em cada um dos valores uma respectiva info)
let hitchedSpaceships = [`Deméter`, `Darwin`, `Supernova`, `Fenix`, `Puller`]

hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log(`Nave ` + currentSpaceship + `\nIndice ` + index)
})
Nave Deméter
Indice 0
Nave Darwin
Indice 1
Nave Supernova
Indice 2
Nave Fenix
Indice 3
Nave Puller
Indice 4
undefined

// map (comando para imprimir todos os valores) ps : foi introduzido outro comando de toUpperCase para maiusculo
let hitchedSpaceships = [`Deméter`, `Darwin`, `Supernova`, `Fenix`, `Puller`]
let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})
console.log(upcasedSpaceships)

(5) ["DEMÉTER", "DARWIN", "SUPERNOVA", "FENIX", "PULLER"]
undefined


// filter (comando para filtrar entre os elementos + outro comando para saber frases de maior caractere,etc.)
let hitchedSpaceships = [`Deméter`, `Darwin`, `Supernova`, `Fenix`, `Puller`]
let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7 })
console.log(with7Chars)

(2) ["Deméter", "Supernova"]
undefined


// find (comando para encontrar o primeiro elemento + algum outro comando especifico como length.)
let hitchedSpaceships = [`Deméter`, `Darwin`, `Supernova`, `Fenix`, `Puller`]
let with7Chars = hitchedSpaceships.find(element => { return element.length >= 7 })
console.log(with7Chars)

Deméter
undefined