/*SOLARI JOSÉ LUIS
una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, 
informar si "Se viaje" o "No se viaje" a ese lugar

en Invierno: Solo Bariloche informa "se viaje" 
los demas destinos "No se viaje"
en Verano: Se viaj a Mar del plata y Cataratas solamente
en Otoño: Se viaje a todos los destinos.
primavera: solo no se viaje a Bariloche*/


function mostrar()
{

	var estacionIngresada;
	var destinoIngresado;
	var viaje;



	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	

	switch(estacionIngresada)
	{
		//en Invierno: Solo Bariloche informa "se viaje" 
		case "Invierno":
		switch(destinoIngresado)		
		{
			case "Bariloche":
				viaje = "Se viaja";
			break;
			default:
				viaje = "No se viaja";
			break;
		}
		break;
		//Verano: Se viaje a Mar del plata y Cataratas solamente
		case "Verano":
		switch(destinoIngresado)
		{
			case "Mar del plata":
			case "Cataratas":
				viaje = "Se viaja";
				break;
			default:
				viaje = "No se viaja";
				break;
		}
		break;
		case "Otoño"://Otoño: Se viaje a todos los destinos.	
			viaje= "Se viaja";
			break;
			
		case "Primavera"://primavera: solo no se viaje a Bariloche
		switch(destinoIngresado)
		{
			case "Bariloche":
				viaje= "No se viaja";
			break;
			default:
				viaje= "Se viaja";
				break;
		}
		break;

	}
	alert(viaje);



}//FIN DE LA FUNCIÓN