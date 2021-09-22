let timeoutId = setTimeout(() => { // executa *uma vez* apos um tempo determinado
    console.log("Executando apos 2 segundos")
}, 2000)

clearTimeout(timeoutId)

let seconds = 0
let intervalId = setInterval(() => { // setInterval vai adicionando a cada tempo 
    seconds += 2
    console.log(`Executando apos ${seconds} segundos`)
    if (seconds >= 10) clearTimeout(intervalId) // para aos 10 segundos 
}, 2000)