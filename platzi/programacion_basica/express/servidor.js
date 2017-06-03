var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado ){

	resultado.send("Este es el <strong>HOME</strong>");
}

function cursos(peticion, resultado){

	resultado.send("Este son los <strong>CURSOS</strong>");	
}

aplicacion.listen(8989);