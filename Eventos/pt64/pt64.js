function doChange() {
    alert(event.target.value)

}

let sampleInput = document.querySelector("input[name='sample-input']")

sampleInput.addEventListener("change", doChange)

let changeEvent = new Event("change")

// Manipulando eventos pelo javascript com o dispatch e remove Events

// dispara o evento de forma dinamica, sem ir no elemento 
sampleInput.dispatchEvent(changeEvent)

// remover um evento que esta mapeado para uma determinada função
sampleInput.removeEventListener("change", doChange)