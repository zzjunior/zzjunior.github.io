//efeito de letras digitando
const titulo = document.querySelector('.digitando');
const digitando = `Bem vindo ao meu Portfólio!`;
const interval = 70;


 function ativaEfeito(titulo, digitando, interval){

    titulo.innerHTML = "";
    const charArray = digitando.split("");
    for (let i = 0; i < charArray.length; i++) {
      setTimeout(() => {
         titulo.innerHTML += charArray[i];
         
      }, i * interval);
    }
}

function startRepeatingEffect(titulo, digitando, interval, repeatInterval) {
   function run() {
      ativaEfeito(titulo, digitando, interval);
      setTimeout(() => {
         run();
      }, repeatInterval);
   }
   run();
}

startRepeatingEffect(titulo, digitando, interval, 5000);

//Alerta de desenvolvimento

const Alerta = document.querySelector('.alert');
const textAlert = `Este projeto esta em desenvolvimento... \n._.`;
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