function calcular(){
    let peso = Number(document.querySelector("#peso").value)
    let altura = Number(document.querySelector("#altura").value)
    let imc = (peso / (Math.pow(altura, 2))).toFixed(2)
    let resposta = window.document.querySelector("div#resposta")
    
    if (imc < 18.5 ) {
        resposta.innerHTML = `Resultado: Seu IMC é ${imc}`
        resposta.innerHTML += `<p>Magreza</p>`
    }
    else if (imc >= 18.5 && imc <= 24.9 ){
        resposta.innerHTML = `Resultado: Seu IMC é ${imc}`
        resposta.innerHTML += `<p>Normal</p>`
    }
    else if (imc > 24.9 && imc <= 30) {
        resposta.innerHTML = `Resultado: Seu IMC é ${imc}`
        resposta.innerHTML += `<p>Sobrepeso</p>`
    }
    else if (imc > 30) {
        resposta.innerHTML = `Resultado: Seu IMC é ${imc}`
        resposta.innerHTML += `<p>Obesidade</p>`
    }
    else{
        window.alert('Dados inválidos')
    }
}