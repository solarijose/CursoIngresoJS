/*
una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche*/


function mostrar()
{

	var estacionIngresada;
	var destino;
	var seViaja;
	var noViaja;



	var estacionIngresada =txtIdEstacion.value;
	

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche"
				alert("Se viaja");
				break;
			case ""

		}

	}





}//FIN DE LA FUNCIÓN