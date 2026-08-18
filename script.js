const input = document.querySelector(".input-area input");
const button = document.querySelector(".input-area button");
const chat = document.querySelector(".chat");

function enviarMensagem() {
    const texto = input.value.trim();

    if (texto === "") {
        return;
    }

    const mensagemUsuario = document.createElement("div");
    mensagemUsuario.className = "message";
    mensagemUsuario.textContent = "Você: " + texto;

    chat.appendChild(mensagemUsuario);

    input.value = "";

    const resposta = document.createElement("div");
    resposta.className = "message";
    resposta.textContent = "Otavio AI: Entendi! Ainda estou aprendendo a responder, mas já estou funcionando. 🤖";

    chat.appendChild(resposta);

    chat.scrollTop = chat.scrollHeight;
}

button.addEventListener("click", enviarMensagem);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enviarMensagem();
    }
});
