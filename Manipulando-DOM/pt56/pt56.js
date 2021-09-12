function sayMyFirstName(element) {
    
    alert("meu primeiro nome e " + element.value)



}

function sayMyLastName() {

    console.log(event)
    alert("meu ultimo nome e " + event.target.value)

}
// a variavel event ela armazena o ultimo evento que foi chamado no DOM, esse evento foi armazenado em forma de objeto, 
// o event e uma variavel global do navegador. cada vez que um evento e chamado, ele e armazenado nessa variavel.
// ou seja, o metodo sayMyName foi chamado com o evento onchange, a variavel recebeu esse evento e armazenou em forma de objeto.