/* SOLARI JOSÉ LUIS
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado; // se declara variables

	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m" )// != igual o diferente
	{
		sexoIngresado = prompt("ingrese f o m"); // ingrese F o M
	}
	
	txtIdSexo.value=sexoIngresado; //El sexo valido

}//FIN DE LA FUNCIÓN