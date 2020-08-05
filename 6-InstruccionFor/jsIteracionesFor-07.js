/*SOLARI JOSÉ LUIS 1H

Repeticiones con funcionalidad

al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.
*/



function mostrar()
{
	//declaro variables
	var numeroIngresado;
	var contadorDivisores;
	contadorDivisores = 0;

	//condiciones
	numeroIngresado = prompt("Ingresar un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(var i = 1; i <= numeroIngresado; i++)

	if(numeroIngresado % i == 0)
	{
		contadorDivisores++;
		alert(i);

	}
	alert("Divisores encontrados "+contadorDivisores);


}//FIN DE LA FUNCIÓN