function save(){
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLand = document.querySelector("select[name='programming-land']").value

    alert("Nome : " + name + "\nLinguagem de Programacao : " + programmingLand)
}