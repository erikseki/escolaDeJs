let velocity = 50 

let acceleration = 5 

while(velocity <= 100) {
    console.log("acelerando: estamos a" + velocity + "km/s")
    velocity += acceleration // velocity = velocity + acceleration
} 

acelerando: estamos a50km/s
acelerando: estamos a55km/s
acelerando: estamos a60km/s
acelerando: estamos a65km/s
acelerando: estamos a70km/s
acelerando: estamos a75km/s
acelerando: estamos a80km/s
acelerando: estamos a85km/s
acelerando: estamos a90km/s
acelerando: estamos a95km/s
acelerando: estamos a100km/s
105
undefined 

let constellation = "Andromeda" 
let pos = 0 
let constellationLength = constellation.length 

while(pos < constellationLength) {
    if (constellation[pos] == "a" || constellation[pos] == "A") {
        console.log(pos)
}
    pos += 1 
} 
    
0
8
9
undefined

