function mostrar()
{
	var nota;
	var resultado;
	nota = document.getElementById('laHora').value;
	nota = parseInt(nota);
	switch (nota)
	{
		case 0:
		case 1:
		case 2:
		case 3:
			resultado = "La proxima se puede.";
			break;
		case 4:
		case 5:
		case 6:
			resultado = "Raspando";
			if (nota<6)
			{
				resultado = resultado+", debes preocuparte mas.";
			}
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			resultado = "Aprobado";
			if (nota>7)
			{
				resultado = resultado+", muy bien!";
			}
		default:
			resultado = "Nota no válida.";
	}
	alert(resultado);
}