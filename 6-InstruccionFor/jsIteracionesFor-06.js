/* SOLARI JOSÉ LUIS 1H
al presionar el botón pedir un número. 
mostrar los numeros pares 
desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	var numeroIngresado; // Declaro variable numero ingresado
	numeroIngresado = prompt("Ingresar un numero"); // tomo el numero ingresado
	

	for( var i=0; i<=numeroIngresado; i++) // declaro 1)variable i ; i es menor o igual a numeroIngresado; i+1(aumenta)
	{
		if((i % 2) == 0) // (i %porcentaja de 2) igual 0
		{
			alert(i); // repeti valor I hasta llegar al numero PAR INGRESADO
		}

	}

	



}//FIN DE LA FUNCIÓN