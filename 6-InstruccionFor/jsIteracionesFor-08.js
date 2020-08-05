/*SOLARI JOSÉ LUIS
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	var i;
	var numeroIngresado;
	primer = true;

	numeroIngresado = prompt("Ingrese un numero");

	for(i=2;i < numeroIngresado/2;i++)
	{
		if(numeroIngresado % i === 0);
		{
			primer = false;
		}

	}
	if (primer)
	{
		alert ("El numero es Primo")
	}
	else
	{
		alert("El numero no es Primo")
	}


}//FIN DE LA FUNCIÓN