function Mostrar()
{
	var diaDeLaSemana;
	diaDeLaSemana = prompt("ingrese dia de la semana");
	switch(diaDeLaSemana)
	{
		case "sabado":
		case "domingo":
			alert("es fin de semana");
			break;
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("a trabajar!");
			break;
		default:
	}
}