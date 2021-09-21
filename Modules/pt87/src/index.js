import Spaceship from "./spaceship"
import armamentKind from "./armaments"
import { laserDef as laserD } from "./defenses"
import basicDefenses from "./defenses"

const spaceship = new Spaceship("USS Enterprise", "James Tiberius Kirk", armamentKind.laser, laserD)
const basicSpaceship = new Spaceship("Nave Basica", "Astronauta", [], basicDefenses)

console.log(spaceship)
console.log(basicSpaceship)