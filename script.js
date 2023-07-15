
function ativaEfeito(){
    function efeitoletras(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    
    const titulo = document.querySelector('.digitando');
    efeitoletras(titulo);
}

const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
})