//funciones paises
$('#paises a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_pulsado = $(this).find('span').html();

	// lo guardo en localStorage
	window.localStorage.setItem('nombre_pais', pais_pulsado);
});

//validacion de datos mail nombre y telefono
$("#nombre").submit(function () {  
	if($("#nameUser").val().length < 1) {  
		alert("El nombre es obligatorio");  
		return false;  
	}  
	return false;  
});  

//funciones sidebar 
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom:18
	});
	var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(function(position) {
  		var pos = {
  			lat: position.coords.latitude,
  			lng: position.coords.longitude
  		};

  		infoWindow.setPosition(pos);
  		infoWindow.setContent('Location found.');
  		map.setCenter(pos);
  	}, function() {
  		handleLocationError(true, infoWindow, map.getCenter());
  	});
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
}
