/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    // varibles
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Sumar;
    //value
    PrecioUno = txtIdPrecioUno.value;
    PrecioDos = txtIdPrecioDos.value;
    PrecioTres = txtIdPrecioTres.value;
    //parseInt
    PrecioUno = parseFloat(PrecioUno);
    PrecioDos = parseFloat(PrecioDos);
    PrecioTres = parseFloat(PrecioTres);
    //sumatoria
    Sumar = PrecioUno + PrecioDos + PrecioTres;
    //
    alert ("La suma de los 3 precios es "+ Sumar);
	
}
function Promedio () 
{
    //Calcular el promedio
    
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Promedio;

    PrecioUno = parseFloat(PrecioUno);
    PrecioDos = parseFloat(PrecioDos);
    PrecioTres = parseFloat(PrecioTres);

    var Promedio = (parseFloat(PrecioUno)+ parseFloat(PrecioDos)+ parseFloat(PrecioTres))/3;
    

    alert ("Su promedio es " +Promedio);

}
function PrecioFinal () 
{
    
    



}