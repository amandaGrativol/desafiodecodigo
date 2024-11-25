// Solicitar o nome e XP do herói
const prompt = require("prompt-sync")(); // Certifique-se de instalar o prompt-sync com `npm install prompt-sync`

// Entrada de dados
const nome = prompt("Digite o nome do Herói: ");
const xp = parseInt(prompt("Digite a quantidade de XP: "));

// Variável para armazenar o nível
let nivel = "";

// Estrutura de decisão para determinar o nível do herói
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
