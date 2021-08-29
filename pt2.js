var v = 90 
undefined

v
90

if (v < 100) {
    console.log(`velocidade aceitavel`)
}
VM3717:2 velocidade aceitavel
undefined

v = 120
120

v
120

if (v < 100) {
    console.log(`velocidade aceitavel`)
} else {
    console.log(`não aceitavel`)
}
VM3809:4 não aceitavel
undefined

if (v < 100) {
    console.log(`velocidade aceitavel`)
} else {
    if (v <= 100) {
    console.log(`não aceitavel`)
} else {
    console.log(`urgente`)
}
}
VM5218:7 urgente
undefined

v = 10
10

if (v < 100) {
    console.log(`velocidade aceitavel`)
} else {
    if (v <= 100) {
    console.log(`não aceitavel`)
} else {
    console.log(`urgente`)
}
}
VM5268:2 velocidade aceitavel
undefined

v = 100
100

if (v < 100) {
    console.log(`velocidade aceitavel`)
} else {
    if (v <= 100) {
    console.log(`não aceitavel`)
} else {
    console.log(`urgente`)
}
}
VM5292:5 não aceitavel
undefined

(v > 100) ? console.log(`velocidade maior que 100`) : console.log(`velocidade menor que 100`)
VM5492:1 velocidade menor que 100
undefined

(v >= 50) ? console.log(`velocidade maior que 100`) : console.log(`velocidade menor que 100`)
VM5506:1 velocidade maior que 100
undefined
