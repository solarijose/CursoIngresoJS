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
    alert ("La suma de los 3 Productos es "+ Sumar);
	
}
function Promedio () 
{
   //B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    
   //Variables
    var precioPinturaNegra;
    var precioPinturaBlanca;
    var precioPinturaGris;
    var totalPrecios;
    var totalProductos;
    var promedio;

    //Precios
    
    precioPinturaNegra = txtIdPrecioUno.value;
    precioPinturaNegra = parseInt(precioPinturaNegra);

    precioPinturaBlanca = txtIdPrecioDos.value;
    precioPinturaBlanca = parseInt(precioPinturaBlanca);

    precioPinturaGris = txtIdPrecioTres.value;
    precioPinturaGris = parseInt(precioPinturaGris);

    totalPrecios = precioPinturaNegra + precioPinturaBlanca + precioPinturaGris;

    totalProductos = 3;
    
    promedio = totalPrecios / totalProductos;

    alert ("Su promedio es " + promedio);

}

function PrecioFinal () 

{
    
    //C.ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

     // Variables

     var ClavosLargos
     var ClavosMedios
     var ClavosCortos
     var preciofinal
 
     ClavosLargos = txtIdPrecioUno.value;
     ClavosLargos = parseInt(ClavosLargos);
     ClavosMedios = txtIdPrecioDos.value;
     ClavosMedios = parseInt(ClavosMedios);
     ClavosCortos = txtIdPrecioTres.value;
     ClavosCortos = parseInt(ClavosCortos);
 
     
     
     preciofinal = ClavosLargos + ClavosMedios + ClavosCortos + 1*21;
 
     alert("El precio final + iva es " + preciofinal);
 



}