/*
al presionar el botón 'mostrar',
Debemos lograr tomar un dato por ID.value
y luego mostrarlo por 'alert()''*/
function mostrar()
{
	var dato;
	
	//dato = dato por ID.Value

	dato = prompt ("Ingrese su nombre");

	txtIdNombre.value = dato;
	
	alert(dato);

}


