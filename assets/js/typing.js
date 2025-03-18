document.addEventListener('DOMContentLoaded', function () {
    const texto = document.getElementById('texto');
    const palavras = ["Web Developer", "IT Analyst", "Operations Manager"];
    let palavraIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const fullText = palavras[palavraIndex % palavras.length];

        texto.textContent = isDeleting
            ? fullText.substring(0, charIndex - 1)
            : fullText.substring(0, charIndex + 1);

        charIndex += isDeleting ? -1 : 1;

        if (!isDeleting && charIndex === fullText.length) {
            isDeleting = true;
            setTimeout(type, 2000); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            palavraIndex++;
            setTimeout(type, 500); 
        } else {
            setTimeout(type, isDeleting ? 100 : 150); 
        }
    }

    type();
});
