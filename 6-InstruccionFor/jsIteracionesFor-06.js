/* SOLARI JOSÉ LUIS 1H
al presionar el botón pedir un número. 
mostrar los numeros pares 
desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	//Declaro variables
	var numeroIngresado;
	var contadorPares;
	var contadorPares = 0;

	//Pido ingresar un numero
	numeroIngresado = prompt("Ingresar un numero");
	numeroIngresado = parseInt(numeroIngresado);
	


	// declaro variable i ; i es menor o igual a numeroIngresado; i+1(aumenta)
	for( var i=1; i<=numeroIngresado; i++)
	{
		// Si encuentro un valor par lo cuento y muestro.
		if(i % 2 == 0)
		{
			contadorPares++;
			alert(i);
		}
	}
	alert("Pares encontrados "+contadorPares);
	
	



}//FIN DE LA FUNCIÓN