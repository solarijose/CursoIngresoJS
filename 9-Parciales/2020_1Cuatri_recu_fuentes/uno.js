/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	var tipo;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var tempPrecio = 0;
	var jabonMasCaroFabricante = 0;
	var jabonMasCaroUnidades = 0;

	for(var i=0;i<2;i++){

		tipo = prompt("Ingrese tipo de producto: ");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt("Ingrese tipo de producto: ");
		}

		var precio = parseInt(prompt("Ingrese precio: "));
		while(precio < 100 || precio > 300){
			precio = parseInt(prompt("Ingrese precio: "));
		}
		
		cantidadDeUnidades = parseInt(prompt("Ingrese cant unidades: "));
		while(cantidadDeUnidades < 0 || cantidadDeUnidades > 1000){
			cantidadDeUnidades = parseInt(prompt("Ingrese cant unidades: "));
		}

		marca = prompt("Ingrese marca: ");
		fabricante = prompt("Ingrese fabricante: ");

		if(tipo == "jabon" && precio > tempPrecio){
			tempPrecio = precio;
			jabonMasCaroFabricante = fabricante;
			jabonMasCaroUnidades = cantidadDeUnidades
		}

	}

 alert("fabricante"+ jabonMasCaroFabricante);
 alert("unidades"+ jabonMasCaroUnidades);
}
