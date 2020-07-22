function mostrar()
{
	/*Al ingresar una edad debemos informar 
	si la persona es mayor de edad,
	sino informar que es un menor de edad.
	tomo la edad */ 


	//declaro variable
	var edad;

	//declaro funcion
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	// declaro condicion
	if (edad>17)
	alert("La persona es mayor de edad");
	
		else (edad<17);
	alert("La persona es menor de edad");

}//FIN DE LA FUNCIÓN