import Spaceship from './spaceship'
import spaceshipEngine from './spaceship_engine'

const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterda", 14, 10)
const dwarfStart = new Spaceship("Estrela-ana", 20, 4)

const sophiaEngine = new spaceshipEngine(sophia)
const amsterdaEngine = new spaceshipEngine(amsterda)
const dwarfStartEngine = new spaceshipEngine(dwarfStart)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()

console.log("Promises")