/*
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

*/

function mostrar()
{
	//variable
	
	var edad;
	

	// funcion
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	//condicion

	if (edad);

	{
		if (edad >17)
		{
			alert("La persona es adulta");
		}	
		else if (edad >=13)		
		{
			alert("La persona es adolecente");
		}
		else if (edad <=12)
		{
			alert("La persona es un niño")
		}

	}





}//FIN DE LA FUNCIÓN