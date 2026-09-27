const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", enviar);

function enviar(event) {
    event.preventDefault();

    alert("Formulario enviado");
}