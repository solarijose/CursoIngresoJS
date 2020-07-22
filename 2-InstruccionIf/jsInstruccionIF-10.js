/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var NumeroAleatorio = Math.floor(Math.random() * 10 + 1);


	if ( NumeroAleatorio >9)
	
	{
		alert ("EXCELENTE");
	}	

		if (NumeroAleatorio >4 )
		{
			alert("APROBO");
		}
	
		else if ( )
		{

			alert("Vamos, la proxima se puede");
		
		}


}//FIN DE LA FUNCIÓN