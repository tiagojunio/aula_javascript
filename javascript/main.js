function load() {
    alert("Página Carregada");
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<br>Valeu por <b>Clicar no meu teste!!!</b>";
}

function redirecinar() {
    window.open("https://tiagojunio.com.br");
    // window.location.href = "https://tiagojunio.com.br";
}

function buttontrocar(elemento) {
    elemento.innerHTML = "Indo para o Site";
    // document.getElementById("buttonmove").innerHTML = "indo para o site";
}

function buttonvoltar(elemento) {
    elemento.innerHTML = "Clique aqui";
    // document.getElementById("buttonmove").innerHTML = "Clique Aqui";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value);

}