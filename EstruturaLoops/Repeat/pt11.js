let velocity = 50 
let acceleration = 5 

do {
    console.log("Acelerando: Estamos a" + velocity + "km/s") // bloco de codigo
    velocity += acceleration 
} while (velocity <= 100)

Acelerando: Estamos a50km/s
Acelerando: Estamos a55km/s
Acelerando: Estamos a60km/s
Acelerando: Estamos a65km/s
Acelerando: Estamos a70km/s
Acelerando: Estamos a75km/s
Acelerando: Estamos a80km/s
Acelerando: Estamos a85km/s
Acelerando: Estamos a90km/s
Acelerando: Estamos a95km/s
Acelerando: Estamos a100km/s
105
undefined


let velocity = 110 
let acceleration = 5 

do {
    console.log("Acelerando: Estamos a" + velocity + "km/s") // bloco de codigo
    velocity += acceleration 
} while (velocity <= 100)
Acelerando: Estamos a110km/s
115
undefined

// o Do-while so avalia dps. ex: velocidade 110, passa pelo parametro do console.log,
// acrescenta mais 5 com o acceleration e só dps percebe o limite de velocity <= 100.