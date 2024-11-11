// Função para alternar entre os ícones de links e a seção de música
function toggleContent() {
    const linksSection = document.getElementById('links');
    const musicSection = document.getElementById('music');
    const isLinksHidden = linksSection.classList.contains('hidden');

    if (isLinksHidden) {
        // Exibir a seção de links com animação de fade-in
        musicSection.classList.add('hidden');
        linksSection.classList.remove('hidden');
        linksSection.style.opacity = '0';
        setTimeout(() => {
            linksSection.style.opacity = '1';
        }, 100);
    } else {
        // Exibir a seção de música com animação de fade-in
        linksSection.classList.add('hidden');
        musicSection.classList.remove('hidden');
        musicSection.style.opacity = '0';
        setTimeout(() => {
            musicSection.style.opacity = '1';
        }, 100);
    }
}

// Função de rastreamento de cliques
function trackClick(linkName) {
    fetch('https://your-tracking-server.com/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ linkName, timestamp: new Date().toISOString() })
    })
    .then(response => {
        if (!response.ok) {
            console.error('Erro ao registrar clique:', response.statusText);
        }
    })
    .catch(error => console.error('Erro na requisição:', error));
}
