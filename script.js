const story = document.getElementById('story');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

let state = {
    currentScene: 1
};

function updateStory() {
    if (state.currentScene === 1) {
        story.textContent = 'Você é um jovem ninja de Konoha. Sua missão começa agora. O que você vai fazer?';
        option1.textContent = 'Usar Rasengan';
        option2.textContent = 'Usar Chidori';
    } else if (state.currentScene === 2) {
        story.textContent = 'Você usa o Rasengan, mas o inimigo desvia rapidamente. O que você faz agora?';
        option1.textContent = 'Tentar novamente';
        option2.textContent = 'Fugir e reavaliar';
    } else if (state.currentScene === 3) {
        story.textContent = 'O Chidori atinge o inimigo com sucesso, derrotando-o. O que você faz agora?';
        option1.textContent = 'Voltar para Konoha';
        option2.textContent = 'Buscar mais inimigos';
    } else if (state.currentScene === 4) {
        story.textContent = 'Você tenta novamente, mas o inimigo estava preparado. Você é derrotado. Fim de jogo!';
        option1.textContent = 'Recomeçar';
        option2.style.display = 'none'; // Esconde o botão 2
    } else if (state.currentScene === 5) {
        story.textContent = 'Você fugiu e reavaliou a situação. Uma nova estratégia aparece e você vence com inteligência. Parabéns!';
        option1.textContent = 'Recomeçar';
        option2.style.display = 'none';
    } else if (state.currentScene === 6) {
        story.textContent = 'Você volta para Konoha e é recebido como um herói. Missão cumprida!';
        option1.textContent = 'Recomeçar';
        option2.style.display = 'none';
    } else if (state.currentScene === 7) {
        story.textContent = 'Você continua buscando inimigos e se depara com um novo adversário poderoso. A batalha recomeça!';
        option1.textContent = 'Recomeçar';
        option2.style.display = 'none';
    }
}

option1.addEventListener('click', () => {
    if (state.currentScene === 1) {
        state.currentScene = 2;
    } else if (state.currentScene === 2) {
        state.currentScene = 4;
    } else if (state.currentScene === 3) {
        state.currentScene = 6;
    } else if (state.currentScene >= 4) {
        state.currentScene = 1;
        option2.style.display = 'inline-block'; // Mostra o botão novamente
    }
    updateStory();
});

option2.addEventListener('click', () => {
    if (state.currentScene === 1) {
        state.currentScene = 3;
    } else if (state.currentScene === 2) {
        state.currentScene = 5;
    } else if (state.currentScene === 3) {
        state.currentScene = 7;
    }
    updateStory();
});

// Inicializa a história
updateStory();
