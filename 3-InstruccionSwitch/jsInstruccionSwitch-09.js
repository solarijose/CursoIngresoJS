//SOLARI JOSÉ LUIS 1H
/*
PUNTO A)
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

PUNTO B)
en Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
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
	var estacionIngresada;
	var destino;
	var descuento;
	var estadiaPrecio;
	var precioFinal

	estacionIngresada =txtIdEstacion.value;
	destino =txtIdDestino.value;
	

	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					descuento = 0.2;
				break;
				case "Mar del plata":
					descuento = -0.2;
				break;
				default:	
					descuento = -0.1;
			}
		 break;
		 case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = -0.2;
				break;
				case "Mar del plata":
					descuento =  0.2;
				break;
				default:
					descuento =  0.1;
			}
			break;
			default:
				switch (destino)
				{
					case "Cordoba":
						descuento = 0;
					break;
					default:
						descuento = 0.1;
				}
			break;

	}

	estadiaPrecio = 15000;
	precioFinal = estadiaPrecio + estadiaPrecio * descuento;
	alert(precioFinal);

}

//FIN DE LA FUNCIÓN