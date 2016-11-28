alert("hello");
var paises = [
{
	nombre: "chile",
	prefijo: "+569",
	bandera: "img/90ab273436.png"
},
{
	nombre: "peru",
	prefijo: "+519",
	bandera: "img/Bandera_Perú.png"
},
{
	nombre: "mexico",
	prefijo: "+529",
	bandera: "img/05-bandera-federal-historia-1823-1864-bandera-mexico.png"
},
{
	nombre: "venezuela",
	prefijo: "+58",
	bandera: "img/resize-img.png"
},
{
	nombre: "estados unidos",
	prefijo: "+1",
	bandera: "img/pegatinas-coches-motos-usa.png"
},
{
	nombre: "Reino Unido",
	prefijo: "+44",
	bandera: "img/INGLESA-500x500.png"
},
{
	nombre: "Japon",
	prefijo: "+81",
	bandera: "img/Bandera_de_Japon.png"
},
{
	nombre: "Corea del Sur",
	prefijo: "+82",
	bandera: "img/kr.png"
},
{
	nombre: "Brasil",
	prefijo: "+55",
	bandera: "img/Brasil-bandera-1.png"
},
{
	nombre: "Alemania",
	prefijo: "+49",
	bandera: "img/bandera-pais-alemania-500x500.png"
},
{
	nombre: "Francia",
	prefijo: "+33",
	bandera: "img/francia-500x500.png"
}
];

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