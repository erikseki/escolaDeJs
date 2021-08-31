function greetPilot(name, message) {
    alert(message + `,` + name)
}

greetPilot(`erikseki`, `seja bem-vindo`)
undefined



function greetPilot(name, message = `Olá`) {
    alert(message + `,` + name)
}

greetPilot(`erikseki`)
undefined