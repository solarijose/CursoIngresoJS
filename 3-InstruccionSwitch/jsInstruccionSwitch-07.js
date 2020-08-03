//SOLARI JOSÉ LUIS
//Al selecionar un destino , indicar el punto cardinal de nuestro pais 
//en donde se encuentra Norte, Sur, Este u Oeste



function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Punto cardinal Sur");
			break;
		case "Cataratas":
			alert("Punto cardinal Norte");
			break;
		case "Mar del plata":
			alert("Punto cardinal Este");
			break;
		case "Cordoba":
			alert("Punto Cardinal Oeste");
			break;
	}

	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN