/*SOLARI JOSÉ LUIS
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese su clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("ERROR REingrese la clave");
	}
	
	alert("INGRESO EXITOSO");

	
}//FIN DE LA FUNCIÓN
