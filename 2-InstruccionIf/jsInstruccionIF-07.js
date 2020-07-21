
/*Al ingresar una edad menor a 18 años y un estado civil distinto a
 "Soltero", mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	
	var edad;
	var EstadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	EstadoCivil = estadoCivil.value;

	if (edad <=17 && EstadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN