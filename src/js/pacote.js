// Catálogo de personagens para o sorteio (com o preço apenas em número)
const catalogoProdutos = [
    ['Ervilha Comando', 'Variante de Ervilha focada em dano pesado por disparo único.', 'planta', '5.000', 'src/assets/peashooter.png'],
    ['Soldado Caçador', 'Zumbi equipado com uma arma de assalto de longo alcance.', 'zombie', '7.500', 'src/assets/foot-soldier.png'],
    ['Girassol Estranho', 'Girassol de elite capaz de curar aliados rapidamente.', 'planta', '6.000', 'src/assets/sunflower.png'],
    ['Cientista Biólogo', 'Zumbi focado em combate corpo a corpo com curas explosivas.', 'zombie', '8.000', 'src/assets/scientist.png'],
    ['Carnívora Chester', 'Variante lendária inspirada em Chester Cheetah, com habilidades únicas.', 'especial', '15.000', 'src/assets/chester-chomper.png']
];

let minhasMoedas = 20000; 

const coinDisplay = document.getElementById('player-coins');
const buyPackBtn = document.getElementById('buy-pack-btn');
const packModal = document.getElementById('pack-modal');
const packReward = document.getElementById('pack-reward');
const closeModal = document.getElementById('close-modal');

buyPackBtn.addEventListener('click', () => {
    const custoPacote = 5000;

    if (minhasMoedas < custoPacote) {
        alert('🪙 Moedas insuficientes para comprar um pacote!');
        return;
    }

    minhasMoedas -= custoPacote;
    coinDisplay.textContent = minhasMoedas;

    // Sorteio aleatório
    const randomIndex = Math.floor(Math.random() * catalogoProdutos.length);
    const personagemSorteado = catalogoProdutos[randomIndex];

    // Desenha o card premiado aplicando a imagem da moeda
    packReward.innerHTML = `
        <div class="card card-special" style="width: 180px; margin: 0 auto; color: #333;">
            <h3>${personagemSorteado[0]}</h3>
            <img src="${personagemSorteado[4]}" alt="${personagemSorteado[0]}" style="width:80px; height:80px; object-fit:contain;">
            <p>${personagemSorteado[1]}</p>
            <span>${personagemSorteado[2]}</span>
            <h4><img src="src/assets/money.png" alt="Moeda" class="coin-icon"> ${personagemSorteado[3]}</h4>
        </div>
    `;

    packModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    packModal.classList.add('hidden');
});