const funcoes = ["Desenvolvedor Web", "Designer UI/UX", "Entusiasta de Tecnologia", "Professor"];
let funcaoIndex = 0;
let charIndex = 0;
let isDeletando = false;
const funcaoTexto = document.getElementById("funcao-texto");
const velocidadeDigitacao = 100;
const velocidadeApagar = 50;
const pausaEntre = 2000;

function digitar() {
    const textoAtual = funcoes[funcaoIndex];

    if (!isDeletando) {
        if (charIndex < textoAtual.length) {
            funcaoTexto.textContent = textoAtual.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(digitar, velocidadeDigitacao);
        } else {
            isDeletando = true;
            setTimeout(digitar, pausaEntre);
        }
    } else {
        if (charIndex > 0) {
            funcaoTexto.textContent = textoAtual.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(digitar, velocidadeApagar);
        } else {
            isDeletando = false;
            funcaoIndex = (funcaoIndex + 1) % funcoes.length;
            setTimeout(digitar, velocidadeDigitacao);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(digitar, velocidadeDigitacao);
});