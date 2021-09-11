console.log(Math.pow(5, 3))
125
undefined
// Math classe nativa do javascript e o pow pela chamada que fizemos provavelmente é uma chamda estática


// math constante do numero pi com para lidar com circunferencia
console.log(Math.PI)
3.141592653589793
undefined


console.log(Math.sqrt(64))
8
undefined
// Math.sqrt para raiz quadrada


// Modolo Date utilizado para manipular data
// o Moment e um recurso externo, ja o date é um recurso nativo
let myBirthday = new Date(2021, 09, 11)
undefined
console.log(myBirthday)
Mon Oct 11 2021 00: 00: 00 GMT - 0300(Horário Padrão de Brasília)

myBirthday = new Date(2021, 0, 11)

Mon Jan 11 2021 00: 00: 00 GMT - 0300(Horário Padrão de Brasília)

myBirthday = new Date(2021, 8, 11)

Sat Sep 11 2021 00: 00: 00 GMT - 0300(Horário Padrão de Brasília)
    // no Date, o 0 no mes começa por janeiro
undefined


let today = Date.now()
undefined
console.log(today)

1631385793164
undefined

// quando sempre trabalha com Date, ele considera a base de calculo como milisegundos, 
// o date.now retorna o milisegundos que foram decorridos desde uma data base do javascript. 
// e a data base do js é 01/01/1970. (01/01/1970 - agora)