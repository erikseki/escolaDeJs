// "Aninhar" é uma palavra/termo na programação quando um determinado elemento está coberto por outro.

// aprendendo a como um objeto pode estar dentro de um array(vise-versa), e um objeto pode estar dentro de outro objeto.

let spaceship = {
    name:"Supernova",
    type:"Batalha",
    crew:["Cap","Silva","Ana Julia","Thiago"]
    
}

spaceship.crew.push("Ten. Fernanda")
console.log(spaceship)

{name: "Supernova"
type:"Batalha"
crew: Array(5)}
crew: (5) ["Cap", "Silva", "Ana Julia", "Thiago", "Ten. Fernanda"]
name: "Supernova"
type: "Batalha",
undefined

// exemplo de uma lista de array com objetos 
let spaceships = [
    { name:"Elemental", crewQuantity: 10},
    { name:"Colossus", crewQuantity:8},
    { name:"Helmet", crewQuantity:15}
    
]

console.log(spaceships[0].name)

Elemental
undefined


let spaceships = [
    { name:"Elemental", crewQuantity: 10},
    { name:"Colossus", crewQuantity:8},
    { name:"Helmet", crewQuantity:15}
    
]

console.log(spaceships[1].crewQuantity)

8
undefined


let spaceships = [
    { name:"Elemental", crewQuantity: 10},
    { name:"Colossus", crewQuantity:8},
    { name:"Helmet", crewQuantity:15}
    
]

spaceships.forEach(spaceship => {
    alert(spaceship.name + " tem " + spaceship.crewQuantity + "Tripulantes ")
})
undefined


let spaceship = {
    name:"Golias",
    maxCrew:20,
    captain:{
        name:"HugoTrent",
        age:"37"
    }
}
console.log(spaceship.captain.name)

HugoTrent
undefined