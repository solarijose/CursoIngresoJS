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

    // declaracion y asignacion de variables

    var precioLampras;
    var cantidadLamparas;
    var marcaLamparas;
    var descuento;
    var importeFinal;
    var precioDescuento;
    var impuestos;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = Marca.value;
    precioLampras =35;
    
    precioDescuento = txtIdprecioDescuento.value;
    precioDescuento = parseInt(precioDescuento);

    /*A- Si compra 6 o más lamparitas bajo consumo 
    tiene un descuento del 50%.*/

    if (cantidadLamparas >=6)
    {
        descuento=0.5;
    }
    /*B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" 
    se hace un descuento del 40 % 
    y si es de otra marca el descuento es del 30%.*/
    else 
    {
        if (cantidadLamparas==5)
        {
            if (marcaLamparas == "ArgentinaLuz")
            {
                descuento=0.4;
            }
            else
            {
                descuento=0.3;
            }
        }
        /*C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" 
        o “FelipeLamparas” se hace un descuento del 25 % 
        y si es de otra marca el descuento es del 20%.*/
        else
        {
            if (cantidadLamparas == 4 )
            {
                if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
                else
                {
                    descuento= 0.20;
                }
            }

             
             /*D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" 
             el descuento es del 15%, si es “FelipeLamparas”
             se hace un descuento del 10 % y si es de otra marca un 5%.*/
            
            else
            {
                if(marcaLamparas == "ArgentinaLuz")
                {
                    descuento= 0.15;
                }
                else if (marcaLamparas == "FelipeLamparas")
                {
                    descuento= 0.10;
                } 
                else{
                    descuento= 0.5;
                }
                

                
            }
        }

    }






}


