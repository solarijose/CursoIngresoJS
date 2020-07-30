/*SOLARI JOSÉ LUIS
Al presionar el botón pedir 5 números 
e informar la suma acumulada y el promedio*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	numeroIngresado = prompt("Ingrese valores a sumar");
	numeroIngresado = parseInt(numeroIngresado);

	while(contador <4)
		{	
			numeroIngresado =prompt("Ingrese 5 valores a sumar");
			numeroIngresado = parseInt(numeroIngresado);

			contador= contador +1;
			acumulador = acumulador + numeroIngresado;
		}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN