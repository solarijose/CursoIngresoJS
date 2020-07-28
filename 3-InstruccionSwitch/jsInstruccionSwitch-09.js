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
	var destinoIngresado;

	var Estadia = parseInt(Estadia);
	Estadia = 15.000;

	var Descuento = parseInt(Descuento);

	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	
	/*PUNTO A)
    una agencia de viajes debe sacar las tarifas de los viajes , 
    se cobra $15.000 por cada estadia como base, 
    se pide el ingreso de una estacion del año 
    y localidad para vacacionar para poder calcular el precio final*/
	switch(estacionIngresada)
	{
		case"Invierno":
			default:
		//	break;
		case"Verano":
			default:
		//	break;
		case"Otoño":
			default:
		//	break;
		case"Primavera":
			alert(estacionIngresada);
			break;
	}
	switch(destinoIngresado)
	{
		

	}
	
	//alert(estacionIngresada);

}//FIN DE LA FUNCIÓN