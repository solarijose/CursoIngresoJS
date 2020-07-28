function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Hace Frio");
			break;
		case "Cataratas":
			alert("Hace Calor");
			break;
		case "Mar del plata":
			alert("Hace Calor");
			break;
		case "Cordoba":
			alert("Hace Frio");
			break;

	}

	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN