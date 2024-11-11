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
// Array de músicas do Spotify incorporadas
const spotifyTracks = [
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5nuKhpA2PFvwtwWK3ra7Dt?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7g9XE51tuKewFD2KPZCDV7?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/56HmZXP52iqHcjGG2vDvDQ?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4T21wwTcpOsqptkqCCf92q?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
];

let currentTrackIndex = 0;

// Função para exibir a música atual
function displayTrack() {
    const musicFrame = document.getElementById('music-frame');
    musicFrame.innerHTML = spotifyTracks[currentTrackIndex];
}

// Funções para navegar no carrossel
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % spotifyTracks.length;
    displayTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + spotifyTracks.length) % spotifyTracks.length;
    displayTrack();
}

// Exibir a primeira música ao carregar a página
window.onload = displayTrack;
