/*
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6. 
*/
function Mostrar()
{
	var alumno;
	var nota; // 0 a 10
	var sexo; // f o m
	var acumuladorDeNotas;
	var promedioDeNotas;
	var contadorPromedio;
	var notaMasBaja;
	var contadorVaronesMayorSeis;

	acumuladorDeNotas = 0;
	contadorPromedio = 0;
	contadorVaronesMayorSeis = 0;

	while (contadorPromedio <5)//100
	{
		contadorPromedio++;

		alumno = prompt("ingrese nombre alumno");
		nota = prompt("ingrese nota alumno");
		nota = parseInt(nota);
		while (isNaN(nota) || nota<0 || nota>10)
		{
			nota = prompt("re-ingrese nota alumno");
			nota = parseInt(nota);			
		}
		sexo = prompt("ingrese sexo alumno");
		while (sexo!="f" && sexo!="m")
		{
			sexo = prompt("re-ingrese sexo alumno");
		}
		acumuladorDeNotas = acumuladorDeNotas + nota;
		if (contadorPromedio == 1)
		{
			notaMasBaja = nota;
		}
		else if (nota < notaMasBaja)
		{
			notaMasBaja = nota;
		}
		if (sexo == "m" && nota >= 6)
		{
			contadorVaronesMayorSeis++;
		}

	}
	promedioDeNotas = acumuladorDeNotas / contadorPromedio;
	alert("Promedio de notas: "+promedioDeNotas+" , la nota mas baja fue "+notaMasBaja+" y la cantidad de varones con nota mayor a 6 fue: "+contadorVaronesMayorSeis);
}