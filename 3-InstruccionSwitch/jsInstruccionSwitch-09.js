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

	estadiaPrecio = 15000;

	switch (estacionIngresada) //
	{
		case "Invierno": //PUNTO B
			switch(destino)
			{
				case "Bariloche":
					descuento = 1.2;
				break;
				case "Mar del plata":
					descuento = 0.2;
				case "Cataratas":
				case "Cordoba":
					descuento = 0.9;//saco el porcentaje de 10%
					break;		
			}
		 break;
		 case "Verano": //PUNTO C
			switch(destino)
			{
				case "Bariloche":
					descuento = 0.2;
				break;
				case "Mar del plata":
					descuento = 0.8;
					case "Cataratas":
					case "Cordoba":
						descuento = 1.1;
					break;
			}
			case"Otoño":
			case"Primavera":
				switch (destino)
				{
					case "Cordoba": //PUNTO D
						descuento = 1;
					case "Bariloche":
						descuento= 1.1
						break;
					case "Cataratas":
						descuento = 1.1;
						break;
					case "Mar del plata":
						descuento= 1.1;
						break;
				}
				break;

	}
	precioFinal = estadiaPrecio * descuento;
	alert(precioFinal);

}

//FIN DE LA FUNCIÓN