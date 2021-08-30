let warpCount = 0 
let chosenOption = ""
let spaceship = prompt("Digite o nome da name")

chosenOption = prompt("Deseja entrar em dobra espacial ?\n1- Sim\n2- Nao")

while (chosenOption == 1 ) {
    warpCount += 1 
    chosenOption = prompt("Deseja realizar a proxima dobra ?\n1- Sim\n2- Nao")
    
}
alert ("Nave " + spaceship + "\nQuantidade de dobras: " + warpCount)

undefined