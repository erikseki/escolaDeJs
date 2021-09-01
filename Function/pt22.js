//arrow function (simplificação de uma função também anonima)

const doubleVelocity = (velocity) => {
    return velocity * 3
}
console.log(doubleVelocity(60))
180
undefined
// nao precisa de function; apresenta o parametro (ou nao),
// arrow function representada por uma " => "

const doubleVelocity = (velocity) => velocity * 2

console.log(doubleVelocity(60))
120
undefined
// excluindo as chaves quando so tem uma função,e o return também

const doubleVelocity = velocity => velocity * 2

console.log(doubleVelocity(60))
120
undefined
//tirando o parenteses do parâmetro quando so tem um