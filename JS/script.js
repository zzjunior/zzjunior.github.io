const textoElemento = document.getElementById('texto');
const texto = `Olá! Bem vindo ao meu Portfólio`;
const intervaloDigitacao = 70;
let ponteiroVisible = true;

function ativaEfeito(digitando, interval) {
    const charArray = digitando.split("");
    for (let i = 0; i < charArray.length; i++) {
        setTimeout(() => {
            textoElemento.textContent += charArray[i];
            if (i === charArray.length - 1) {
                setTimeout(() => {
                    apagaTexto(digitando, interval);
                }, 5000);
            }
        }, i * interval);
    }
}

function apagaTexto(digitando, interval) {
    const charArray = digitando.split("");
    for (let i = charArray.length - 1; i >= 0; i--) {
        setTimeout(() => {
            textoElemento.textContent = textoElemento.textContent.slice(0, -1);
            if (i === 0) {
                setTimeout(() => {
                    ativaEfeito(texto, interval);
                }, 5000);
            }
        }, (charArray.length - i) * interval);
    }
}

function togglePonteiro() {
    const ponteiro = document.querySelector('.ponteiro');
    ponteiro.style.visibility = ponteiroVisible ? 'hidden' : 'visible';
    ponteiroVisible = !ponteiroVisible;
}

function startRepeatingEffect(digitando, interval, repeatInterval) {
    function run() {
        togglePonteiro();
        setTimeout(() => {
            run();
        }, 1200); // Ajuste o intervalo aqui (500 para 0,5 segundo)
    }
    ativaEfeito(digitando, interval);
    setInterval(togglePonteiro, 500); // Ajuste o intervalo aqui também
    run();
}

startRepeatingEffect(texto, intervaloDigitacao, 5000);



//Alerta de desenvolvimento

const Alerta = document.querySelector('.alert');
const textAlert = `Este projeto esta em desenvolvimento... \n._. \n\nAguarde!...`;
const intervalMaior = 50;


 function ativaAlert(Alerta, textAlert, intervalMaior){
    
    const elemento = textAlert.split("").reverse();
    let text = '';
    
    const typer = setInterval(()=>{

       if(!elemento.length){
        Alerta.textContent = text;
        return clearInterval(typer);
    }

        const next = elemento.pop();
        text += next;
        Alerta.textContent = text;
   }, intervalMaior)
}

ativaAlert(Alerta, textAlert, intervalMaior);