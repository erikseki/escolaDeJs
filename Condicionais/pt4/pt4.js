var departureDateEntry = prompt(`Digite a data de partida (formata DD/MM/YYYY)`)

let departureDate = moment(departureDateEntry, `DD/MM/YYYY`)

let today = moment()

let dateDiff= today - departureDate

let chosenOption = prompt("Escolha como gostartia de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de Voo: " + secondsOfDeparture + " segundos")
}else if (chosenOption == "2") {
    let minutesOfDepartures = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de voo: "+ minutesOfDepartures + " minutos") 
}else if (chosenOption == "3") {
    let hoursOfDepartures = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de voo: "+ hoursOfDepartures + " horas") 
}else if (chosenOption == "4") {
    let daysOfDepartures = Math.round(dateDiff / 1000 / 3600 /24)
    alert("Tempo de voo: "+ daysOfDepartures + " dias") 
}else {
    alert("Opcao invalida")
}
