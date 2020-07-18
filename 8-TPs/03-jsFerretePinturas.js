/*3.	Para el departamento de Pinturas:

A.	Al ingresar una temperatura en Fahrenheit debemos mostrar 
la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
*/

function FahrenheitCentigrados () 
{
    
    var farenheit;
    var centígrados;

    farenheit = txtIdTemperatura.value;
    farenheit = parseInt(farenheit);

    centígrados = (farenheit - 32) * 5 / 9;

    alert(farenheit +"° Farenheit son "+ centígrados +"° centígrados" );


}

/*
B.	Al ingresar una temperatura en Centígrados debemos
 mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
 
*/

function CentigradosFahrenheit ()
{
    
    var centígrados;
    var fahrenheit;

    centígrados = txtIdTemperatura.value;
    centígrados = parseInt(centígrados);
    
    //(0 °C × 9/5) + 32 = 32 °F

    farenheit = (centígrados * 9 / 5) + 32; 
    
    alert (centígrados +" ° centigrados son " + farenheit + " Farenheit ");

}
