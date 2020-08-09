/*SOLARI JOSÉ LUIS
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validar("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.


a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro

*/
/*
function mostrar()
{
  
  var Tipo;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta;

  respuesta = "s";
  while(respuesta == "s")

  {
    
    respuesta = prompt("seguir ?")

  }

}*/

function mostrar(){

  var tipo;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta = "si";
  var acumuladorBolas = 0;
  var total = 0;
  var acumArena = 0;
  var acumCemento = 0;
  var acumCal = 0;

  while(respuesta == "si")
  {
     
      tipo = prompt("Ingrese el tipo: Arena,Cal o Cemento ");

      while(tipo != "arena" && tipo != "cal" && tipo != "cemento") 
      {
          alert("el tipo debe ser arena,cal o cemento");
          tipo = prompt("Ingrese el tipo: ");
      }

      cantidadDeBolsas = parseInt(prompt("Ingrese cantidad de bolsas:"));
      
      while(cantidadDeBolsas <1)
      {
         alert("Debe ingresar una cantidad mayor a 0");
         cantidadDeBolsas = parseInt(prompt("Ingrese cantidad de bolsas:"));
      }

      acumuladorBolas = acumuladorBolas + cantidadDeBolsas;

      switch(tipo)
      {
          case 'arena':
            acumArena += cantidadDeBolsas;
          break;

          case 'cal':
            acumCal += cantidadDeBolsas;
          break;

          case 'cemento':
            acumCemento += cantidadDeBolsas;
          break;
      }

      precioPorBolsa = parseInt(prompt("Ingrese el precio por bolsa:"));

      while(precioPorBolsa < 1)
      {
         alert("el valor debe ser mayor a 0");
         precioPorBolsa = parseInt(prompt("Ingrese el precio por bolsa:"));
      }
      
      total = total + (precioPorBolsa * cantidadDeBolsas); 
  
     respuesta = prompt("Seguir ? si/no: ");
  }

  var descuento;

  if(acumuladorBolas > 10 && acumuladorBolas <= 30)
  {

      //calcular 15% de descuento sobre el total
      descuento = (15*total)/100;
      alert("El descuento del 15% es de "+ descuento+" sobre el total de "+total);
  }

  if(acumuladorBolas > 30)
  {

      //calcular 25% de descuento sobre el total
      descuento = (25*total)/100;
      alert("El descuento del 25% es de "+ descuento+" sobre el total de "+total);
  }

  alert("El total bruto a pagar es de $: "+total);

  if(acumArena > acumCal && acumArena > acumCemento)
  {
    alert("Arena vendio mas");
  }
  if(acumCal > acumArena && acumCal > acumCemento)
  {
    alert("cal vendio mas");
  }
  if(acumCemento > acumArena && acumCemento > acumCal)
  {
    alert("cemento vendio mas");
  }
 
}




