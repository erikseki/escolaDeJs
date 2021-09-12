function verifyEnablement(){
    let selectedValue = document.querySelector("select").value
    if(selectedValue == "disable") {
        document.querySelector("input[name='some-text']").disable = true
        let pElement = document.getElementById("message")
        pElement.innerText = "Desabilitado"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
    } else {
        document.querySelector("input[name='some-text']").disable = false
        let pElement = document.getElementById("message")
        pElement.innerText = ""
        pElement.style.color = "black"
        pElement.style.backgroundColor = "transparent"
    }
}