//SOLARI JOSÉ LUIS 1H
/*
PUNTO A)
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

PUNTO B)
en Invierno: 
bariloche tiene un aumento del 20% cataratas 
y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

PUNTO C)
en Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

PUNTO D)
en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/


function mostrar()
{

	var Estadia;
	var Descuento;
	var Destino;
	var PrecioFinal

	var estacionIngresada =txtIdEstacion.value;
	Destino =txtIdDestino.value;
	PrecioFinal = PrecioFinal - Descuento;
	
	Estadia = 15000;

	/*PUNTO A)
    una agencia de viajes debe sacar las tarifas de los viajes , 
    se cobra $15.000 por cada estadia como base, 
    se pide el ingreso de una estacion del año 
    y localidad para vacacionar para poder calcular el precio final*/
	switch(estacionIngresada)
	{
		case"Invierno":
		case"Verano":
		case"Otoño":
		case"Primavera":
		break;
	}
    	/*PUNTO B)
		en Invierno: 
		bariloche tiene un aumento del 20% cataratas 
        y Cordoba tiene un descuento del 10% 
        Mar del plata tiene un descuento del 20%*/
		switch(estacionIngresada)
		{
			case "Invierno":
				switch(Destino)
				
				{
					case "Bariloche":
						Descuento = 0.2;
					break;
					case "Cordoba":
						Descuento = 0.1;
					case "Mar del plata":
						Descuento = 0.2;
					break;
				}
				/*PUNTO C)
				en Verano: 
                bariloche tiene un descuento del 20% 
                cataratas y Cordoba tiene un aumento del 10% 
                Mar del plata tiene un aumento del 20%*/
				break;
				case "Verano":
				switch(Destino)
				{
					case "Bariloche":
						Descuento = 0.2;
					break;
					case "Mar del plata":
						Descuento = 0.2;
					break;
					case "Cordoba":
						Descuento = 0.1;
						default:
							break;
					
				}
				break;
				/*PUNTO C)
				en Verano: 
				bariloche tiene un descuento del 20% 
				cataratas y Cordoba tiene un aumento del 10% 
				Mar del plata tiene un aumento del 20%*/
				case "Verano":
				switch(Destino)
				{
					case "Bariloche":
						Descuento = 0.2;
					case "Mar del plata":
						Descuento = 0.2;
					case "Cordoba":
						Descuento = 0.1;
						default:
						break;
				}
				break;
				/*PUNTO D)
				en Otoño y Primavera: 
				bariloche tiene un aumento del 10% 
				cataratas tiene un aumento del 10% 
				Mar del plata tiene un aumento del 10% y 
				Cordoba tiene el precio sin descuento*/
				case "Otoño":
				case "Primavera":
					switch(Destino)
					{
						case "Bariloche":
						case "Mar del plata":
						case "cataratas":
							Descuento = 0.1;
						case "Cordoba":
							Descuento =0;
							break;
					}
					break;
			

		}  
		  PrecioFinal = PrecioFinal * Descuento;
		  alert(PrecioFinal);

}//FIN DE LA FUNCIÓN