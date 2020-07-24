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
 
    var precioLamparas;
    var cantidadLamparas;
    var marcaLamparas;
    var descuento;
    var precioTotal;
    var precioDescuento;
    var impuestos;
    var costoImpuestos;


    precioLamparas = 35;
    impuestos = 0,1;
    costoImpuestos = 0;
    
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = Marca.value;
    


    precioTotal = cantidadLamparas * precioLamparas;
    descuento = descuento * cantidadLamparas;

    //A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
    if (cantidadLamparas >5 + "ArgentinaLuz")
    {
        precioLamparas;
    }
    else
    {
        descuento = 0,5; 
    }
    alert(precioTotal)
    
 /*B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz"
  se hace un descuento del 40 %
  y si es de otra marca el descuento es del 30%.*/
    if (cantidadLamparas == 5 == "ArgentinaLuz")
    {
        descuento = 0,5;
    }

    else (cantidadLamparas == 5)
    
    {
        descuento = 0,3;
    }

  /*C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
  se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.*/
    
  if (cantidadLamparas == 4 + "ArgentinaLuz" || cantidadLamparas == 4 + "FelipeLamparas")
    {
        descuento = 0,25;
    }

    else (cantidadLamparas == 4)
 
    {
        descuento=0,20;
    }

    /*D.compra 3 lamparitas"ArgentinaLuz" descuento del 15%,
    si es “FelipeLamparas” se hace un descuento del 10 % 
    y si es de otra marca un 5%.*/ 
    if (cantidadLamparas == 3 == "ArgentinaLuz" || cantidadLamparas == 3 == "FelipeLamparas")
    {
        descuento = 0,15;
    }
    else
    {
        descuento = 0,10;
    }
    if ( cantidadLamparas>2)
    {
        descuento = 0,05;
    }

    /*E. Si el importe final con descuento suma más de $120 se debe sumar un 10%
    de ingresos brutos en informar del impuesto con el siguiente mensaje: 
    ”IIBB Usted pago X”, siendo X el impuesto que se pagó*/   

    precioDescuento = precioTotal * descuento;
 
    if (precioDescuento >120)
    {  
        costoImpuestos = precioDescuento * impuestos;
        alert("Usted pago "+ impuestos + "de IIBB")
    }

    

}