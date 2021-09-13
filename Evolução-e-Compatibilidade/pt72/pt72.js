function testingES8(text1, text2, ) {
    alert(`${text1}\n${text2}`)

}

// transpilação para versoes anteriores do Ecmascript
// erro de sintaxe do "," depois do "text2"

// chamando pelo comando "npx babel pt72.js" imprimindo sem o ","

// comando "npx babel pt72.js -o compiled-script.js" para salvar a saida
// em um novo arquivo.


// converter para uma determinada versao (preset-env, converter para versao S5)
// "npx babel pt72.js -o compiled-script.js --presets=@babel/preset-env"

// transpilar um diretorio inteiro e fazer o altpult para um outro diretorio.
// npx babel "nome do diretorio sem aspas" --out-dir "novo diretorio"--presets=@babel/preset-env