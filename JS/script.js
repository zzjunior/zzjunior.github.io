//efeito de letras digitando
const titulo = document.querySelector('.digitando');
const titulo2 = document.querySelector('.digitando2');
const digitando = `Olá! Eu sou Júnior Santos.`
const digitando2 = `Eu sou desenvolvedor web e designer gráfico. Atualmente estudo bacharelado em C&T na UFRN.`
const interval = 70;
var contador = 0;

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

//segundo texto
function ativaEfeito2(titulo2, digitando2, interval){

    const elemento2 = digitando2.split("").reverse();

    const typer2 = setInterval(()=>{
        if(!elemento2.length){
            return clearInterval(typer2);
        }

        const next2 = elemento2.pop();

        titulo2.innerHTML += next2;

    }, interval)
}

//efeito de menu
const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria')
ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})