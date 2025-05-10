// Variáveis Iniciais
let myHero = "Mario-Bros";
let xp = 10000; // valor para testar!
let categories;

// Operadores e Estrutura de Decisão
if (xp < 1000) {
    categories = "Ferro";
} else if (xp <= 2000) {
    categories = "Bronze";
} else if (xp <= 5000) {
    categories = "Prata";
} else if (xp <= 7000) {
    categories = "Ouro";
} else if (xp <= 8000) {
    categories = "Platina";
} else if (xp <= 9000) {
    categories = "Ascendente";
} else if (xp <= 10000) {
    categories = "Imortal";
} else {
    categories = "Radiante";
}

// Laço de Repetição (exemplo adicional para testar múltiplos heróis)
const heroesTeste = [
    { nome: "Mario-Bros", xp: 5000 },
    { nome: "Luigi", xp: 5500 },
    { nome: "Peach", xp: 6500 }
];

for (const heroi of heroesTeste) {
    let nivelTemp;
    const xpHeroi = heroi.xp;

    if (xpHeroi < 1000) {
        nivelTemp = "Ferro";
    } else if (xpHeroi <= 2000) {
        nivelTemp = "Bronze";
    } else if (xpHeroi <= 5000) {
        nivelTemp = "Prata";
    } else if (xpHeroi <= 7000) {
        nivelTemp = "Ouro";
    } else if (xpHeroi <= 8000) {
        nivelTemp = "Platina";
    } else if (xpHeroi <= 9000) {
        nivelTemp = "Ascendente";
    } else if (xpHeroi <= 10000) {
        nivelTemp = "Imortal";
    } else {
        nivelTemp = "Radiante";
    }

    console.log(`Herói ${heroi.nome} (XP: ${xpHeroi}) → Nível: ${nivelTemp}`);
}

// Saída Final 
console.log(`O Herói de nome ${myHero} está no nível de ${categories}`);