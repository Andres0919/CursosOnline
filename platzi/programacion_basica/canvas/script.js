var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext('2d');



function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarlinea("black", 1, 1, 1, 299);
dibujarlinea("black", 1, 299, 299, 299);

function dibujoClick(){

    var lineas = parseInt(texto.value);
    var yi, xf;
    var espacio = ancho / lineas;


    for (var i = 0; i < lineas; i++) {
        yi = espacio * i;
        xf = espacio * (i + 1);
        dibujarlinea("black", 0, yi, xf, 300);
    }
}
