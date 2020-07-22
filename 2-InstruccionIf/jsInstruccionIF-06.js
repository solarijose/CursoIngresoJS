/*
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

*/

function mostrar() {
	//variable

	var edad;


	// funcion
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	//condicion


	if (edad > 17) //SI Edad Mayor o Igual a 17, informar por medio de alerta.
	{
		alert("La persona es adulta");
	}
	else // Si la funcion No es mayor
	{
		if (edad >= 13) // Si es mayor o igual a 13, informar por medio de alerta.
		{
			alert("La persona es adolecente");
		}
		else // Si no, informar por medio de alerta.
		{
			alert("La persona es un niño")
		}
	}

}//FIN DE LA FUNCIÓN