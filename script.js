// Função para alternar entre os ícones de links e a seção de música
function toggleContent() {
    const linksSection = document.getElementById('links');
    const musicSection = document.getElementById('music');
    const isLinksHidden = linksSection.classList.contains('hidden');

    if (isLinksHidden) {
        musicSection.classList.add('hidden');
        linksSection.classList.remove('hidden');
    } else {
        linksSection.classList.add('hidden');
        musicSection.classList.remove('hidden');
    }
}

// Função de rastreamento de cliques
function trackClick(linkName) {
    fetch('https://your-tracking-server.com/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ linkName, timestamp: new Date().toISOString() })
    });
}
