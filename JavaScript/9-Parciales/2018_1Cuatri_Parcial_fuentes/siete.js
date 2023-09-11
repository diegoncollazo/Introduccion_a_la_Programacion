function mostrar()
{
	//Variables.
	var contador;
	var sexo;
	var nota;
	var total;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var cantidadVarones;
	//Inicializaciones.
	contador = 0;
	notaMasBaja = 0;
	cantidadVarones = 0;
	promedio = 0;
	total=0;
	while(contador < 5)
	{
		//Tomar y validar datos.
		sexo = prompt("Ingrese sexo:");
		while (sexo!="m" && sexo!="f")
		{
			sexo = prompt("Re-ingrese sexo:");
		}
		nota = prompt("Ingrese nota:");
		nota = parseInt(nota);
		while (isNaN(nota) || nota < 0 || nota > 10)
		{
			nota = prompt("Re-ingrese nota:");
			nota = parseInt(nota);
		}
		//Lógica del programa.
		if(contador==0)
		{
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
		}
		else
		{
			if (nota < notaMasBaja)
			{
				notaMasBaja = nota;
				sexoNotaMasBaja = sexo;
			}

			if (nota >= 6 && sexo == "m")
			{
				cantidadVarones++;
			}
		}
		total = total + nota;
		contador++;
	}
	promedio = total / contador;
	//Presentar información.
	alert("Promedio de notas: "+promedio+". Nota mas baja "+notaMasBaja+" y el sexo "+sexoNotaMasBaja+". Cantidad de varones con nota mayor a 6: "+cantidadVarones);
}