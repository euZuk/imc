//dom
const peso = document.queryselector(#peso)
const altura = document.queryselector(#altura)
const botao = document.queryselector(#botao)
const resultado1 = document.queryselector(#resultado1)
const resultado2 = document.queryselector(#resultado2)
//evento
botao.addEventListener('click',imc)

//ação
function imc(){
    p = Number(peso.value())
    a = Number(altura.value())
    calculo = p/(a*a)

    resultado1.textContent = `O seu IMC é ${calculo.toFixed(2)}`

    if(calculo<18.5){
        resultado2.textContent = `Você está abaixo do peso`
    }else if(calculo>=18.5 && calculo<25){
        resultado2.textContent = `Você está com o peso ideal`
    }else if(calculo>=25 && calculo<30){
        resultado2.textContent = `Você está com sobrepeso`
    }else{
        resultado2.textContent = `Você está com obesidade`
    }
}