const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Scroll to the next page on mouse wheel
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentPage < pages.length - 1) {
        currentPage++;
    } else if (event.deltaY < 0 && currentPage > 0) {
        currentPage--;
    }
    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
});

// Language toggle
function setLanguage(lang) {
    const translations = {
        en: {
            "intro": "I'm Miguel Castro",
            "subtitle": "Software Engineering Student",
            "github": "Explore my repositories and projects on GitHub...",
            "linkedin": "Connect with me on LinkedIn...",
            "youtube": "Watch my tutorials and insights...",
            "instagram": "Follow me on Instagram...",
            "onlyfans": "Exclusive, adult content where..."
        },
        pt: {
            "intro": "Sou Miguel Castro",
            "subtitle": "Estudante de Engenharia de Software",
            "github": "Explore meus repositórios e projetos no GitHub...",
            "linkedin": "Conecte-se comigo no LinkedIn...",
            "youtube": "Assista aos meus tutoriais e insights...",
            "instagram": "Siga-me no Instagram...",
            "onlyfans": "Conteúdo exclusivo para adultos onde..."
        }
    };
    document.querySelector('.intro h1').textContent = translations[lang]["intro"];
    document.querySelector('.subtitle').textContent = translations[lang]["subtitle"];
    document.querySelector('.github .description').textContent = translations[lang]["github"];
    document.querySelector('.linkedin .description').textContent = translations[lang]["linkedin"];
    document.querySelector('.youtube .description').textContent = translations[lang]["youtube"];
    document.querySelector('.instagram .description').textContent = translations[lang]["instagram"];
    document.querySelector('.onlyfans .description').textContent = translations[lang]["onlyfans"];
}

// Click tracking
function trackClick(section) {
    console.log(`User clicked on ${section}`);
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;
    
// Função para rolar até a página específica
function scrollToPage(index) {
        pages[index].scrollIntoView({ behavior: 'smooth' });
    }
    
    // Event listener para rolagem com a roda do mouse (para desktop)
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0 && currentPage < pages.length - 1) {
            currentPage++;
            scrollToPage(currentPage);
        } else if (event.deltaY < 0 && currentPage > 0) {
            currentPage--;
            scrollToPage(currentPage);
        }
    });
    
    // Variáveis para toque inicial e final
    let touchStartY = 0;
    
    // Event listener para início do toque
    window.addEventListener('touchstart', (event) => {
        touchStartY = event.changedTouches[0].screenY;
    });
    
    // Event listener para fim do toque e verificação do deslize
    window.addEventListener('touchend', (event) => {
        let touchEndY = event.changedTouches[0].screenY;
    
        // Verifica a diferença de posição para determinar a direção do deslize
        if (touchStartY > touchEndY + 50 && currentPage < pages.length - 1) {
            // Deslizar para cima (avançar)
            currentPage++;
            scrollToPage(currentPage);
        } else if (touchStartY < touchEndY - 50 && currentPage > 0) {
            // Deslizar para baixo (retroceder)
            currentPage--;
            scrollToPage(currentPage);
        }
    });
    
}
