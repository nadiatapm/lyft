
$('#next').on('click', function(){

	var nombre = $("#nameUser").val();
	var correo = $("#Email1").val();
	var caracter =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

	if(nombre == null || nombre.length == 0){
		alert("complete campo ");
		return false;
	};

	if(/[0-9]/.test(nombre)){
		alert("formato no valido");
		return false;
	};

	if(correo === null || correo.length === 0){
		alert("complete campo");
		return false;

	}else if(caracter.test(correo)){
		alert("correo no valido");
		return false;
	}

});
