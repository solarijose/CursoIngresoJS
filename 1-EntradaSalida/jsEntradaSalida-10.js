/* SOLARI JOSÉ LUIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Variables
	var importe;
	var resultado;

	// Importes
	importe = txtIdImporte.value;
	importe = parseInt(importe);

	//Resuldado con Descuento
	resultado = importe - 25*100;

	alert("Importe total con descuento "+ resultado);
	txtIdResultado.value = resultado;





}
