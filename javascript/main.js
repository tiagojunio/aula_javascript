function clicou() {
    document.getElementById("agradecimento").innerHTML = "<br>Valeu por <b>Clicar no meu teste!!!</b>";
}

function redirecinar() {
    window.open("https://tiagojunio.com.br");
    window.location.href = "https://tiagojunio.com.br";
}

function buttontrocar() {
    window.open("https://tiagojunio.com.br");
    document.getElementById("buttonmove").innerHTML = "indo para o site";
}

function buttonvoltar() {
    document.getElementById("buttonmove").innerHTML = "Clique Aqui";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui";
}