/* SOLARI JOSÉ LUIS
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo; // se declara variables

	sexo = prompt("ingrese f ó m ."); // Se toma el sexo ingresado

	while(sexo != "f" && sexo != "m" )// != igual o diferente &&= la condicion tiene que ser V-V
	{
		sexo = prompt("ingrese f o m"); // ingrese F o M
	}
	
	txtIdSexo.value=sexo; //Mostrar el sexo ingresado

}//FIN DE LA FUNCIÓN