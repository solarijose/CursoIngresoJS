/*2.Para el departamento de Construcción:
A.
Mostrar la cantidad de alambre a comprar  si se ingresara el largo 
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.
Mostrar la cantidad de alambre a comprar  si se ingresara el radio
de un terreno circular y se debe alambra con tres hilos de alambre.

C.
Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var Largo;
    var Ancho;
    var rectanguloAlambre;

    Largo = txtIdLargo.value;
    Ancho = txtIdAncho.value;

    Largo = parseInt(Largo)
    Ancho = parseInt(Ancho)
    rectanguloAlambre = Largo * Ancho * 3;

    alert ("La cantidad de metros de alambre a comprar es "+rectanguloAlambre);

}

/*B.
Mostrar la cantidad de alambre a comprar  si se ingresara el radio
de un terreno circular y se debe alambra con tres hilos de alambre.*/

function Circulo () 
{
    var Circunferencia;
    var Radio;
    var metrosTotales;
    var hilosAlambre;

    hilosAlambre = 3;
    Radio = txtIdRadio.value;
    Radio = parseInt(Radio)
    Circunferencia = parseInt(Circunferencia)
    Circunferencia = 3 * Math.PI * Radio;
    Circunferencia = Circunferencia.toFixed(2);
    metrosTotales = Circunferencia * hilosAlambre;
    
    alert("La cantidad de alambre a utilizar es "+ metrosTotales + " mts");
    
}

/*C.
Para hacer un contrapiso de 1m x 1m 
se necesitan 2 bolsas de cemento y 3 de cal,
debemos mostrar cuantas bolsas se necesitan de cada uno 
para las medidas que nos ingresen.
*/

function Materiales () 
{
    
    var largo;
    var ancho;
    var bolsasCemento;
    var bolsasCal;
    var TotalBolsasCemento;
    var TotalBolsasCal;
    var metrosCuadrados;

    largo = txtIdLargo.value;
    largo = parseInt(largo)
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    bolsasCemento = 2;
    bolsasCal = 3;

    metrosCuadrados = largo * ancho;
    TotalBolsasCemento = metrosCuadrados * bolsasCemento;
    TotalBolsasCal = metrosCuadrados * bolsasCal;

    alert ("Para los "+ metrosCuadrados +" mts2 "+ TotalBolsasCemento +" Bolsas de Cemento y "+ TotalBolsasCal+ " Bolsas de Cal " );






	
}