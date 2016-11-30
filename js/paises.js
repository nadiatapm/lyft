var paises = [
{
	nombre: "Chile",
	prefijo: "+569",
	bandera: "img/CL.png"
},
{
	nombre: "Peru",
	prefijo: "+519",
	bandera: "img/PE.png"
},
{
	nombre: "mexico",
	prefijo: "+529",
	bandera: "img/MX.png"
},
{
	nombre: "Venezuela",
	prefijo: "+58",
	bandera: "img/VN.png"
},
{
	nombre: "Estados Unidos",
	prefijo: "+1",
	bandera: "img/US.png"
},
{
	nombre: "Reino Unido",
	prefijo: "+44",
	bandera: "img/GB.png"
},
{
	nombre: "Japon",
	prefijo: "+81",
	bandera: "img/JP.png"
},
{
	nombre: "Brasil",
	prefijo: "+55",
	bandera: "img/BR.png"
},
{
	nombre: "Francia",
	prefijo: "+33",
	bandera: "img/FR.png"
}
];

$(document).ready(function(){
	
// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// solo queda modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);
});
