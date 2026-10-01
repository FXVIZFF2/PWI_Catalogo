const div_cat = document.getElementById('catalogo');
const input = document.getElementById('input');


const catalogoProdutos = [
    // --- PLANTAS (Ervilhas) ---
    ['Ervilha Padrão', 'Atirador equilibrado com tiro direto e dano em área.', 'planta', '20.000', 'src/assets/PeashooterGW1.png'],
    ['Ervilha de Fogo', 'Dispara projéteis que causam dano contínuo de fogo.', 'planta', '50.000', 'src/assets/Fire_PeaGW1.png'],
    ['Ervilha de Gelo', 'Seus tiros congelam os zumbis gradualmente.', 'planta', '50.000', 'src/assets/Ice_PeaGW1.png'],
    ['Ervilha Tóxica', 'Emite uma aura tóxica e envenena os inimigos próximos.', 'planta', '60.000', 'src/assets/Toxic_PeaGW1.png'],
    ['Comando Ervilha', 'Cadência de tiro mais rápida, focada em dano direto.', 'planta', '75.000', 'src/assets/Commando_PeaGW1.png'],
    ['Agente Ervilha', 'Especialista em acertos críticos precisos de longa distância.', 'planta', '90.000', 'src/assets/Agent_PeaGW1.png'],
    ['Ervilha de Plasma', 'Capaz de disparar esferas de energia cósmica carregadas.', 'planta', '120.000', 'src/assets/Plasma_PeaGW1.png'],

    // --- PLANTAS (Girassol) ---
    ['Girassol Padrão', 'Cura aliados e dispara raios solares de média distância.', 'planta', '20.000', 'src/assets/SunFlowerGW1.png'],
    ['Girassol de Fogo (Fire Flower)', 'Aplica queimaduras progressivas nos alvos.', 'planta', '45.000', 'src/assets/Fire_FlowerGW1.png'],
    ['Girassol Místico (Mystic Flower)', 'Permite carregar seus raios solares para causar dano massivo.', 'planta', '70.000', 'src/assets/Mystic_FlowerGW1.png'],
    ['Girassol Metálico (Metal Petal)', 'Possui uma armadura pesada que aumenta drasticamente a vida.', 'planta', '80.000', 'src/assets/Metal_PetalGW1.png'],
    ['Girassol Sombrio (Shadow Flower)', 'Cadência de tiros muito mais rápida em detrimento do alcance.', 'planta', '65.000', 'src/assets/Shadow_FlowerGW1.png'],
    ['Girassol Alienígena (Alien Flower)', 'Cria esporos que formam campos de dano contínuo no chão.', 'planta', '85.000', 'src/assets/Alien_FlowerGW1.png'],
    ['Girassol Elétrico', 'Dispara feixes de eletricidade em cadeia.', 'planta', '75.000', 'src/assets/Power_FlowerGW1.png'],

    // --- PLANTAS (CHOMPER) ---
    ['Cozinhador Padrão (Chomper)', 'Devora zumbis por trás e usa gosma para imobilizar.', 'planta', '25.000', 'src/assets/ChomperGW1.png'],
    ['Hot Rod Chomper', 'Ganha um bônus imenso de velocidade após engolir um zumbi.', 'planta', '85.000', 'src/assets/Hot_Rod_ChomperGW1.png'],
    ['Chomper Tóxico', 'Cuspideira de substância tóxica com dano em área contínuo.', 'planta', '60.000', 'src/assets/Toxic_ChomperGW1.png'],
    ['Chomper de Fogo', 'Substitui a mordida por um bafo de chamas devastador.', 'planta', '70.000', 'src/assets/Fire_ChomperGW1.png'],
    ['Armor Chomper', 'Blindagem reforçada com muito mais vida, porém mais lento.', 'planta', '90.000', 'src/assets/Armor_ChomperGW1.png'],
    ['Chomper Power', 'Eletriza os zumbis ao mastigar e morder.', 'planta', '75.000', 'src/assets/Power_ChomperGW1.png'],
    ['Count Chompula', 'Recupera vida rapidamente ao engolir inimigos.', 'planta', '80.000', 'src/assets/Count_ChompulaGW1.png'],

    // --- PLANTAS (CACTUS) ---
    ['Cactus Padrão', 'Atirador de elite de longo alcance com minas de batata.', 'planta', '25.000', 'src/assets/CactusGW1.png'],
    ['Cactus de Fogo', 'Espinhos flamejantes que queimam os zumbis.', 'planta', '55.000', 'src/assets/Fire_CactusGW1.png'],
    ['Cactus de Gelo', 'Retarda o avanço zumbi com espinhos congelantes.', 'planta', '55.000', 'src/assets/Ice_CactusGW1.png'],
    ['Cactus Futuro', 'Tiros carregados de alta tecnologia que perfuram alvos.', 'planta', '95.000', 'src/assets/Future_CactusGW1.png'],
    ['Cactus Camuflado (Camo Cactus)', 'Foco total em sniping de precisão extrema e dano elevado.', 'planta', '100.000', 'src/assets/Camo_CactusGW1.png'],
    ['Cactus Bandido (Bandit Cactus)', 'Usa uma pistola de espinhos com rajada rápida.', 'planta', '70.000', 'src/assets/Bandit_CactusGW1.png'],
    ['Cactus de Jade (Jade Cactus)', 'Possui revestimento resistente a danos e espinhos poderosos.', 'planta', '130.000', 'src/assets/Jade_CactusGW1.png'],
    ['Cactus Power', 'Espinhos eletrificados que causam choque em cadeia.', 'planta', '65.000', 'src/assets/Power_CactusGW1.png'],

    // --- ZUMBIS (FOOT SOLDIER) ---
    ['Soldier Padrão', 'Versátil, ágil e equipado com salto de foguete.', 'zombie', '20.000', 'src/assets/Foot_SoldierGW1.png'],
    ['Super Comando', 'Rajada tripla rápida com recarga veloz.', 'zombie', '95.000', 'src/assets/Super_CommandoGW1.png'],
    ['Tanque Comandante (Tank Commander)', 'Dispara cartuchos explosivos de alto impacto.', 'zombie', '85.000', 'src/assets/Tank_CommanderGW1.png'],
    ['Soldier Ártico', 'Congela as plantas com tiros gelados.', 'zombie', '60.000', 'src/assets/Arctic_TrooperGW1.png'],
    ['Camo Ranger', 'Soldier focado em combates de longa distância.', 'zombie', '70.000', 'src/assets/Camo_RangerGW1.png'],
    ['Soldier Corcunda (General Supremo)', 'Dispara rajadas automáticas pesadas e contínuas.', 'zombie', '80.000', 'src/assets/General_SupremoGW1.png'],
    ['Soldier Escorpião (Centurion)', 'Dispara flechas explosivas de fogo de longa distância.', 'zombie', '75.000', 'src/assets/CenturionGW1.png'],
   

    // --- ZUMBIS (ENGINEER) ---
    ['Engineer Padrão', 'Constrói teletransportes e usa bate-estacas.', 'zombie', '25.000', 'src/assets/EngineerGW1.png'],
    ['Mecânico', 'Cadência de tiro acelerada para destruir barreiras rapidamente.', 'zombie', '50.000', 'src/assets/MechanicGW1.png'],
    ['Eletricista', 'Ataques elétricos que saltam entre múltiplos alvos.', 'zombie', '60.000', 'src/assets/ElectricianGW1.png'],
    ['Encanador (Plumber)', 'Lança projéteis explosivos de grande raio de explosão.', 'zombie', '65.000', 'src/assets/PlumberGW1.png'],
    ['Soldierr (Welder)', 'Maçarico de plasma que causa dano de fogo acumulativo.', 'zombie', '70.000', 'src/assets/WelderGW1.png'],
    ['Painting Contractor', 'Dispara tintas explosivas que afetam a área.', 'zombie', '55.000', 'src/assets/PainterGW1.png'],
    ['Sanitation Expert', 'Lança lixo tóxico altamente corrosivo.', 'zombie', '90.000', 'src/assets/Sanitation_ExpertGW1.png'],
   

    // --- ZUMBIS (SCIENTIST) ---
    ['Scientist Padrão', 'Especialista em curar equipes e teleporte tático.', 'zombie', '30.000', 'src/assets/ScientistGW1.png'],
    ['Chemist', 'Dispersão de curto alcance letal em combates corpo a corpo.', 'zombie', '90.000', 'src/assets/ChemistGW1.png'],
    ['Marine Biologist', 'Arma de golfinho de alta velocidade e dano estrondoso.', 'zombie', '100.000', 'src/assets/Marine_BiologistGW1.png'],
    ['Astronaut', 'Alcance estendido transformando o Scientist em um atirador médio.', 'zombie', '75.000', 'src/assets/AstronautGW1.png'],
    ['Dr. Toxic', 'Cria zonas de contaminação ao redor dos oponentes.', 'zombie', '80.000', 'src/assets/Dr._ToxicGW1.png'],
    ['Paleontologist', 'Dispara brasas flamejantes que incendeiam alvos.', 'zombie', '85.000', 'src/assets/PaleontologistGW1.png'],
    ['Physicist', 'Dispara descargas de energia elétrica concentrada.', 'zombie', '90.000', 'src/assets/PhysicistGW1.png'],

    // --- ZUMBIS (ALL-STAR) ---
    ['All-Star Padrão', 'Tanque com metralhadora de futebol americano e muita vida.', 'zombie', '30.000', 'src/assets/All-StarGW1.png'],
    ['Cricket Star', 'Tanque com alta resistência e disparos flamejantes.', 'zombie', '150.000', 'src/assets/Cricket_StarGW1.png'],
    ['Goalie Star', 'Lança discos de hóquei/gelo que congelam as plantas.', 'zombie', '80.000', 'src/assets/Goalie_StarGW1.png'],
    ['Baseball Star', 'Projetado para tiros de precisão a médias distâncias.', 'zombie', '70.000', 'src/assets/Baseball_StarGW1.png'],
    ['Rugby Star', 'Dispara bolas de rugby explosivas de grande impacto.', 'zombie', '75.000', 'src/assets/Rugby_StarGW1.png'],
    ['Hockey Star', 'Cadência de disparos aprimorada com discos gelados.', 'zombie', '80.000', 'src/assets/Hockey_StarGW1.png'],
    ['Wrestling Star', 'Especialista em golpes pesados de curto alcance com alta resistência.', 'zombie', '110.000', 'src/assets/wrestling_StarGW1.png'],
];

function mostrarProdutos(Lista){
    div_cat.innerHTML = ""; 
    
    Lista.forEach((produto) => {
        const div_card = document.createElement('div');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const h4 = document.createElement('h4');
        
        h3.innerHTML = produto[0];
        p.innerHTML = produto[1];
        span.innerHTML = produto[2];
        h4.innerHTML = `<img src="src/assets/money.png" alt="Moeda" class="coin-icon"> ${produto[3]}`;
        img.src = produto[4];
        img.alt = produto[0];
        
        const grupo = produto[2].toLowerCase().trim();

        div_card.setAttribute('class', 'card');
        
        if (grupo.includes('planta')) {
            div_card.classList.add('card-plant');
        } else if (grupo.includes('zombie')) {
            div_card.classList.add('card-zombie');
        } else if (grupo.includes('especial')) {
            div_card.classList.add('card-special');
        }
        
        div_card.append(h3);
        div_card.append(img);
        div_card.append(p);
        div_card.append(span);
        div_card.append(h4);
        
        div_cat.append(div_card);
    });
}

mostrarProdutos(catalogoProdutos);

// Lógica da barra de pesquisa com mensagem de "Não encontrado"
input.addEventListener("input", () => {
    let value = input.value.toLowerCase().trim();

    if(value === ""){
        div_cat.innerHTML = "";
        mostrarProdutos(catalogoProdutos);
        return;
    }

    let newCat = catalogoProdutos.filter((produto) =>
        produto[0].toLowerCase().includes(value) ||
        produto[1].toLowerCase().includes(value) ||
        produto[2].toLowerCase().includes(value)
    );
    
    div_cat.innerHTML = "";

  
    if(newCat.length === 0){
        div_cat.innerHTML = `
            <p style="color: #ffb300; text-align: center; grid-column: 1 / -1; font-size: 1.2rem; margin-top: 30px;">
                Nenhum personagem encontrado para "${input.value}"!
            </p>
        `;
    } else {
       
        mostrarProdutos(newCat);
    }
});

const linkZombie = document.getElementById('link_zombie');
const linkPlant = document.getElementById('link_plant');
const linkAll = document.getElementById('link_all');
const linkSpecial = document.getElementById('link_special');

if (linkZombie) {
    linkZombie.addEventListener('click', (e) => {
        e.preventDefault();
        const zumbis = catalogoProdutos.filter(produto => 
            produto[2].toLowerCase().includes('zombie') || produto[2].toLowerCase().includes('zumbi')
        );
        mostrarProdutos(zumbis);
    });
}

if (linkPlant) {
    linkPlant.addEventListener('click', (e) => {
        e.preventDefault();
        const plantas = catalogoProdutos.filter(produto => 
            produto[2].toLowerCase().includes('planta')
        );
        mostrarProdutos(plantas);
    });
}

if (linkAll) {
    linkAll.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarProdutos(catalogoProdutos);
    });
}

if (linkSpecial) {
    linkSpecial.addEventListener('click', (e) => {
        e.preventDefault();
        const especiais = catalogoProdutos.filter(produto => 
            produto[2].toLowerCase().includes('especial')
        );
        mostrarProdutos(especiais);
    });
}