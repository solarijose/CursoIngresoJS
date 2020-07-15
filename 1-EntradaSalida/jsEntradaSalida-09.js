/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


function mostrarAumento()
{
	//Variables
	var sueldo;
	var resultado;
	
	// sueldo Debemos lograr tomar el importe por ID,transformarlo a entero (parseInt)
	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo)
	
	// resultado 
	resultado = sueldo + sueldo * 10/100; //

	//luego mostrar el importe con un aumento del 10 %
	alert("Mostrar aumento "+ resultado );
	txtIdResultado.value = resultado; 
	
	// Recordar ingresar primero ejemplo.value = variable para ingresar en cuadro RESULTADO
	
}