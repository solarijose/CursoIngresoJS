//SOLARI JOSÉ LUIS
/*Al ingresar una edad debemos informar si la persona
 es adolescente, edad entre 13 y 17 años (inclusive).

*/

function mostrar()
{
	//declaro variable
	var edad;

	//declaro funcion
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	// condicion IF
	if(edad >12 && edad <18 )

	{
		alert("Usted es adolecente");
	}
	
}//FIN DE LA FUNCIÓN