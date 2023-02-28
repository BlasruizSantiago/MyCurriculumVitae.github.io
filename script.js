function aviso() {
    alert("Formulario enviado, muchas gracias por ponerse en contacto. Me contactaré con usted lo antes posible.");
}

let cambiar = document.getElementById('cambiar');
let body = document.querySelector('body')


function cambiarColor() {
    if (cambiar.value == "Modo oscuro") {
        cambiar.value = "Modo claro";
        body.style.background = "#1A1A1A";
        var subtitulos = document.querySelectorAll('h2');
        var index = 0, length = subtitulos.length;
        for (; index < length; index++) {
            subtitulos[index].style.color = "white";
        }
        var texto = document.querySelectorAll('p');
        var index = 0, length = texto.length;
        for (; index < length; index++) {
            texto[index].style.color = "white";
        }
        var texto = document.querySelectorAll('li');
        var index = 0, length = texto.length;
        for (; index < length; index++) {
            texto[index].style.color = "white";
        }
    } else {
        cambiar.value = "Modo oscuro";
        body.style.background = "#E5E5E5";
        var subtitulos = document.querySelectorAll('h2');
        var index = 0, length = subtitulos.length;
        for (; index < length; index++) {
            subtitulos[index].style.color = "black";
        }
        var texto = document.querySelectorAll('p');
        var index = 0, length = texto.length;
        for (; index < length; index++) {
            texto[index].style.color = "black";
        }
        var texto = document.querySelectorAll('li');
        var index = 0, length = texto.length;
        for (; index < length; index++) {
            texto[index].style.color = "black";
        }
    }
    console.log(cambiar)
}
