/*SOLARI JOSÉ LUIS
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	

	numeroIngresado = prompt("ingrese un número entre (0-9).");
	numeroIngresado = parseInt(numeroIngresado);


	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("Error Reingrese un número entre (0-9).");
		numeroIngresado = parseInt(numeroIngresado);
	}
	txtIdNumero.value= numeroIngresado;
	
	
	
}//FIN DE LA FUNCIÓN