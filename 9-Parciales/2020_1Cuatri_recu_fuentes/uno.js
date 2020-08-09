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
	//declaro variables
	var tipo;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var tempPrecio = 0;
	var jabonMasCaroFabricante = 0;
	var jabonMasCaroUnidades = 0;

	for(var i=0;i<5;i++) //Repetir la inicializacion hasta llegar a 5
	{//Líneas de progama a repetir.

		tipo = prompt("Ingrese tipo de producto: barbijo, jabon , alcohol "); // Solicito ingresar producto.
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") // variable no es igual condición.
		{
			tipo = prompt("Error RE Ingrese tipo de producto valido: "); // Si ingresa mal el producto.
		}

		var precio = parseInt(prompt("Ingrese precio: 100 a 300 "));
		while(precio < 100 || precio > 300) // menor a 100 O mayor a 300 
		{
			precio = parseInt(prompt("Error RE Ingrese nuevamente precio: 100 a 300 "));
		}
		
		cantidadDeUnidades = parseInt(prompt("Ingrese cant unidades: ")); //Ingresar unidades
		while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000) // Unidades 1 a 1000
		{
			cantidadDeUnidades = parseInt(prompt("ERROR RE Ingrese cant unidades Maximo 1000 "));
		}

		marca = prompt("Ingrese marca: "); // Ingresar la marca al final de la compra
		fabricante = prompt("Ingrese fabricante: "); // Ingresar el fabricante al final de la compra

		if(tipo == "jabon" && precio > tempPrecio) //condicion jabon y precio mayor a precio temporal
		{
			tempPrecio = precio; //precioTemporal es igual a resultado precio
			jabonMasCaroFabricante = fabricante;
			jabonMasCaroUnidades = cantidadDeUnidades
		}

	}
		//A) Del más caro de los jabones, la cantidad de unidades y el fabricante
 alert("fabricante "+jabonMasCaroFabricante);
 alert("unidades "+jabonMasCaroUnidades);
}
