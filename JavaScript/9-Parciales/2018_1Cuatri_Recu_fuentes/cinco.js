function mostrar()
{
	var dia;
	var resultado;
	dia = prompt("Ingresa el día de la semana: ");
	switch (dia)
	{
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			resultado = "A trabajar";
			break;
		case "Sabado":
		case "Domingo":
			resultado = "Buen finde";
			break;
		default:
			resultado = "No es un día valido";
	}
	alert(resultado);
}