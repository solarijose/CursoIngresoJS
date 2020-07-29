/* SOLARI JOSÉ LUIS
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.

B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
y si es de otra marca el descuento es del 30%.

C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%,
si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E. Si el importe final con descuento suma más de $120 se debe sumar un 10%
de ingresos brutos en informar del impuesto con el siguiente mensaje: 
”IIBB Usted pago X”, siendo X el impuesto que se pagó*/

function CalcularPrecio()
{
	var cantidadLamparas;
    var precioLampras;
    var descuento;
    var precioDescuento;
    var importeFinal;
    var marcaLamparas;
    var impuestos;
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = Marca.value;
    precioLampras= 35;
	if (cantidadLamparas >5) //A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
	{
		cantidadLamparas = cantidadLamparas * precioLampras;
		precioDescuento = cantidadLamparas * 0.5;
		importeFinal = cantidadLamparas - precioDescuento;
	}
	else
	{ //B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
	//y si es de otra marca el descuento es del 30%.
		if (cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz")
		{
			cantidadLamparas = cantidadLamparas * precioLampras;
			precioDescuento = cantidadLamparas *0.4;
			importeFinal = cantidadLamparas - precioDescuento;
		}
		else 
		{
			if (cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz")
			{
				cantidadLamparas = cantidadLamparas * precioLampras;
				precioDescuento = cantidadLamparas * 0.3;
				importeFinal = cantidadLamparas - precioDescuento;
			}
			else
			{ //C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
			//se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
				if (cantidadLamparas == 4 && marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
				{
					cantidadLamparas = cantidadLamparas * precioLampras;
					precioDescuento = cantidadLamparas * 0.25;
					importeFinal = cantidadLamparas - precioDescuento;
				}
				else
				{
					if(cantidadLamparas == 4 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas")
					{
						cantidadLamparas = cantidadLamparas * precioLampras;
						precioDescuento = cantidadLamparas * 0.2;
						importeFinal = cantidadLamparas - precioDescuento;
					}
					else
					{ //D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%,
						//si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
						if(cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz")
						{
							cantidadLamparas = cantidadLamparas * precioLampras;
							precioDescuento = cantidadLamparas *0.15;
							importeFinal = cantidadLamparas - precioDescuento;
						}
						else
						{ 
							if (cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas")
							{
								cantidadLamparas = cantidadLamparas * precioLampras;
								precioDescuento = cantidadLamparas * 0.1;
								importeFinal = cantidadLamparas - precioDescuento;
							}
							else
							{
								if(cantidadLamparas == 3 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas")
								{
									cantidadLamparas = cantidadLamparas * precioLampras;
									precioDescuento = cantidadLamparas *0.05;
									importeFinal = cantidadLamparas - precioDescuento;
								}
							}
						}
					}
				}
			}
		}
	} //E. Si el importe final con descuento suma más de $120 se debe sumar un 10%
	//de ingresos brutos en informar del impuesto con el siguiente mensaje: 
	//”IIBB Usted pago X”, siendo X el impuesto que se pagó
		if(importeFinal>120)
		{
			impuestos = importeFinal * 0.1;
			importeFinal = importeFinal + impuestos;
			alert("IIBB Usted pago "+ impuestos + " de impuesto.");
		}
		descuento=txtIdprecioDescuento.value = importeFinal;
		
}


/* 
function CalcularPrecio()

var cantidadLamparas;
var precioLampras;
var descuento;
var descuento;
var importeFinal;
var marcaLamparas;
var impuestos;

cantidadLamparas = txtIdCantidad.value;
cantidadLamparas = parseInt(cantidadLamparas);
marcaLamparas = Marca.value;
precioLampras= 35; */