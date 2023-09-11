function mostrar()
{
	var numeroUno;
	var numeroDos;
	var concatenados;
	var suma;
	numeroUno = prompt("Ingrese un numero:");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese otro numero");
	numeroDos = parseInt(numeroDos);
	if (numeroUno == numeroDos)
	{
		concatenados = numeroUno/numeroDos;
	}
	else if (numeroUno > numeroDos)
	{
		division = numeroUno / numeroDos;
	}
	else
	{
		suma = numeroUno+numeroDos;
	}
	if (suma < 50)
	{
		alert("La suma es"+suma" y da menos de 50.");
	}
}