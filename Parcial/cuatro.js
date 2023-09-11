function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno = prompt("Ingrese numero 1: ");
	numeroDos = prompt("Ingrese numero 2: ");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	if (numeroUno == numeroDos)
	{
		resultado = numeroUno*numeroDos;
	}
	else if (numeroUno > numeroDos)
	{
		resultado = numeroUno - numeroDos;
	}
	else
	{
		resultado = numeroUno + numeroDos;
	}
	document.write("El resultado es "+resultado);
}
