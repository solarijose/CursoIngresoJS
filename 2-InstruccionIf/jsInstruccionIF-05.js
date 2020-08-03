//SOLARI JOSÉ LUIS
// Al ingresar una edad solo debemos informar si la persona NO es adolescente

function mostrar() {
	// variable
	var edad;

	//Funcion
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	// condicion


	if (edad < 12)
		alert("Usted no es adolecente");

	{
		if (edad > 17)
			alert("Usted no es adolecente");
	}

	/*

	if (edad <12 || edad >17)
	
	{
		alert (" Usted no es adolecente");
	}
	*/
}
//FIN DE LA FUNCIÓN