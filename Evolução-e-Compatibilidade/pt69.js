function greetCrew(message, name) {
    console.log(`${ message }, ${ name }`)

}

greetCrew("seja bem vindo", "Erik")
seja bem vindo, Erik
undefined

function greetCrew(message, names) {
    names.forEach(name => console.log(`${ message }, ${ name }`))

}

greetCrew("seja bem vindo", ["arthur", "jake", "melissa"])
seja bem vindo, arthur
seja bem vindo, jake
seja bem vindo, melissa
undefined

function greetCrew(message, ...names) {
    names.forEach(name => console.log(`${ message }, ${ name }`))

}

greetCrew("seja bem vindo", "arthur", "jake", "melissa")
seja bem vindo, arthur
seja bem vindo, jake
seja bem vindo, melissa
undefined

function greetCrew(message, ...names) {
    console.log(names)
    names.forEach(name => console.log(`${ message }, ${ name }`))

}

greetCrew("seja bem vindo", "arthur", "jake", "melissa")
VM7859: 2(3) ["arthur", "jake", "melissa"]
seja bem vindo, arthur
seja bem vindo, jake
seja bem vindo, melissa
undefined

function greetCrew(message, ...names, anyName) {
    console.log(names)
    console.log(anyName) // << rest Param
    names.forEach(name => console.log(`${ message }, ${ name }`))

}

greetCrew("seja bem vindo", "arthur", "jake", "melissa")
Rest parameter must be last formal parameter