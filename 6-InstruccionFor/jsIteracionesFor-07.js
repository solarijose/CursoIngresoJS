/*SOLARI JOSÉ LUIS 1H

Repeticiones con funcionalidad

al presionar el botón pedir un número. mostrar 
los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.
*/



function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingresar un numero");

	// se declara variable 2, variable es menor a numero ingresado /2, variable +1
	for(var i=2;i <numeroIngresado/2;i++) 
	
	{
		if(numeroIngresado % i === 0) // numero ingresado Porcentaje de 2 igual a 0
		{
			alert(i); // mostrar numeros divisores.
		}

	}
	


}//FIN DE LA FUNCIÓN