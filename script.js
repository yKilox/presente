let lastScrollTop = 0;
let scrollingTimer = null;
const scrollingDelay = 0; // Tempo de atraso em milissegundos

window.addEventListener("scroll", function() {
    clearTimeout(scrollingTimer); // Limpa o temporizador existente, se houver

    if (window.pageYOffset > lastScrollTop) {
        // Rola para baixo
        document.getElementById("header").classList.add("hide");
    } else {
        // Rola para cima ou está parado
        scrollingTimer = setTimeout(function() {
            document.getElementById("header").classList.remove("hide");
        }, scrollingDelay);
    }

    lastScrollTop = window.pageYOffset;
});


document.addEventListener('DOMContentLoaded', function() {
    const fotos = document.querySelectorAll('.foto');
    

    fotos.forEach(foto => {
        const img = foto.querySelector('.apresentacao__fotos__img');
        const textos = foto.querySelector('.textos');
  
        let isMouseOver = false;

        foto.addEventListener('mouseenter', function() {
            if (!isMouseOver) {
                img.style.filter = 'grayscale(0%)';
                textos.style.bottom = '1%'; // Move o texto para o meio da foto
                textos.style.opacity = '1'; // Garante que o texto esteja visível
                isMouseOver = true;
            }
        });
        
        foto.addEventListener('mouseleave', function() {
            isMouseOver = false;
            textos.style.bottom = '0%'; // Move o texto de volta para abaixo da foto
            textos.style.opacity = '0'; // Esconde o texto novamente
        });
    });
});