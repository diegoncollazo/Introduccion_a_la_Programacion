function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;
	numeroUno = prompt("Ingrese el numero uno: ");
	numeroDos = prompt("Ingrese el numero dos: ");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	if (numeroUno == numeroDos)
	{
		alert("Concatenados "+numeroUno+numeroDos);
	} 
	else if (numeroUno > numeroDos)
	{
		resta = numeroUno - numeroDos;
		alert("La resta es "+resta);
	}
	else
	{
		suma = numeroDos + numeroUno;
		if (suma > 10)
		{
			alert("La suma es "+suma+" y supero el 10");
		}
		else
		{
			alert("La suma es "+suma);
		}
	}
}