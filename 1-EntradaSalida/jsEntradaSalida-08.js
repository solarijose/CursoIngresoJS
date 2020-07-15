/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/


function SacarResto()
{
	var NumeroDividendo;
	var NumeroDivisor;
	var SacarResto;

	NumeroDividendo = txtIdNumeroDividendo.value;
	NumeroDivisor = txtIdNumeroDivisor.value;

	NumeroDividendo = parseInt(NumeroDividendo);
	NumeroDivisor =	parseInt(NumeroDivisor);

	SacarResto = NumeroDividendo % NumeroDivisor;

	alert("El resto es "+ SacarResto);
}
