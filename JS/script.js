//efeito de letras digitando
const titulo = document.querySelector('.digitando');
const digitando = `Olá! Eu sou Júnior Santos.`
const interval = 70;

//primeiro texto
function ativaEfeito(titulo, digitando, interval){
    
    const elemento = digitando.split("").reverse();
    
    const typer = setInterval(()=>{

        if(!elemento.length){
            return clearInterval(typer);
        }

        const next = elemento.pop();

        titulo.innerHTML += next;
        contador++;
    }, interval)
}

ativaEfeito(titulo, digitando, interval);