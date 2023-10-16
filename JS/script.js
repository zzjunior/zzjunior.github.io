//efeito de letras digitando
const titulo = document.querySelector('.digitando');
const digitando = `Bem vindo ao meu Portfólio!`;
const interval = 70;


 function ativaEfeito(titulo, digitando, interval){
    
    const elemento = digitando.split("").reverse();
    let text = '';
    
    const typer = setInterval(()=>{

       if(!elemento.length){
        titulo.textContent = text;
        return clearInterval(typer);
    }

        const next = elemento.pop();
        text += next;
        titulo.textContent = text;
   }, interval)
}

ativaEfeito(titulo, digitando, interval);

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