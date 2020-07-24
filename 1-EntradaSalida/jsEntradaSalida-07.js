/* SOLARI JOSÉ LUIS
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var sumar;
	var NumeroUno;
	var NumeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	sumar = numeroUno + numeroDos;

	alert("El resultado es de la suma es " + sumar);	
}

function restar()
{
	var restar;
	var NumeroUno;
	var NumeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	restar = numeroUno - numeroDos;

	alert("El resultado de la resta es " + restar);
}

function multiplicar()
{ 
	var multiplicar;
	var NumeroUno;
	var NumeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicar = numeroUno * numeroDos;

	alert("El resultado de la mutiplicacion es " + multiplicar);
}

function dividir()
{
	var dividir;
	var NumeroUno;
	var NumeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	dividir = numeroUno / numeroDos;

	alert("El resultado de la division es " + dividir);	
}

