// Función para encriptar un texto
function encriptarTexto(texto) {
    let textoEncriptado = texto.toLowerCase(); // Convertir el texto a minúsculas

    // Reemplazar las letras según las reglas de encriptación
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    return textoEncriptado;
}

// Función para desencriptar un texto
function desencriptarTexto(textoEncriptado) {
    let texto = textoEncriptado.toLowerCase(); // Convertir el texto encriptado a minúsculas

    // Reemplazar las letras según las reglas de desencriptación
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}
if (window.matchMedia("(min-width: 1024px)").matches) {
    ningunMensaje.style.display = "none";
}
// Obtener los elementos del DOM
const textareaEntrada = document.querySelector(".text-area");
const textareaMensaje = document.querySelector(".mensaje");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".copiar");
const ningunMensaje = document.querySelector(".parrafo-container");

// Agregar eventos a los botones
btnEncriptar.addEventListener("click", () => {
    const textoEntrada = textareaEntrada.value;
    const textoEncriptado = encriptarTexto(textoEntrada);
    textareaMensaje.value = textoEncriptado;
    textareaMensaje.style.backgroundImage = "none";
    btnCopiar.style.display = "block";
    ningunMensaje.style.display = "none";
});

btnDesencriptar.addEventListener("click", () => {
    const textoEntrada = textareaEntrada.value;
    const textoEncriptado = desencriptarTexto(textoEntrada);
    textareaMensaje.value = textoEncriptado;
    textareaMensaje.style.backgroundImage = "none";
    btnCopiar.style.display = "block"
    ningunMensaje.style.display = "none";

});

btnCopiar.addEventListener("click", () => {
    textareaMensaje.select();
    document.execCommand("copy");
});

//elimnar fondo al ingresar texto

textareaMensaje.addEventListener("focus", () => {
    textareaMensaje.style.backgroundImage = "none";
    btnCopiar.style.display = "block"
    ningunMensaje.style.display = "none";


})
textareaMensaje.addEventListener("blur", () => {
    if (textareaMensaje.value.trim() === "") {
        textareaMensaje.style.backgroundImage = "";
        if (window.matchMedia("(min-width: 1024px)").matches) {
            ningunMensaje.style.display = "none";
        } else{
            ningunMensaje.style.display = "block";
            
        }

    }
});
