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
	
	numeroIngresado = parseInt(numeroIngresado);

	while(contador <5)
		{	
			numeroIngresado =prompt("Ingrese 1 numero");
			


			contador++;
		}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN