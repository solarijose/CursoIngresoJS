/*
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"
 se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz"
 o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"
el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120
se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 

var precioLampara;
var descuento;
var PrecioDescuento;
var PrecioFinal;
var marca;
var impuesto;

cantidad= txtIdCantidad.value;
cantidad = parseInt(cantidad);

descuento = txtIdprecioDescuento.value;
descuento = parseInt(descuento);

precioLampara = 35;
marca = Marca.value;

//A)Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%

if( cantidad >=6)
{    
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 50/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

/*B)Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.*/

else if(cantidad == 5 && marca == "ArgentinaLuz") 
{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad *40/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

else if  (cantidad == 4 && marca != "ArgentinaLuz")
{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 30/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

/*C-Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz"
o “FelipeLamparas” se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.*/

else if  (cantidad == 4 && marca == "ArgentinaLuz")
{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 25/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

else if  (cantidad == 4 && marca != "ArgentinaLuz")
{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 20/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

else if (cantidad == 4 && marca == "FelipeLamparas")

{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 25/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

/* D) Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"
el descuento es del 15%, si es  “FelipeLamparas” 
se hace un descuento del 10 % y si es de otra marca un 5%.*/

else if (cantidad == 4 && marca == "ArgentinaLuz")

{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 15/100;
    PrecioFinal = cantidad - PrecioDescuento;
}
/* si es  “FelipeLamparas” 
se hace un descuento del 10 % y si es de otra marca un 5%. */

else if (cantidad = 4 && marca == "FelipeLamparas")

{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 10/100;
    PrecioFinal = cantidad - PrecioDescuento;
}

else if ( cantidad == 4 && marca != "FelipeLampras")

{
    cantidad = precioLampara * cantidad;
    PrecioDescuento = cantidad * 5/100;
    PrecioFinal = cantidad - PrecioDescuento;
}


/* E) Si el importe final con descuento suma más de $120
se debe sumar un 10% de ingresos brutos en informar del impuesto
con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/

if (PrecioFinal >120)
{
    impuesto = PrecioFinal * 10 / 100;
    alert("Usted pago "+ impuesto + "de IIBB" )

}