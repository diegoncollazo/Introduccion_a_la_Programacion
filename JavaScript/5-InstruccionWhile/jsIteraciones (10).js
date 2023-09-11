function mostrar()
{
	var numero;
	var sumaPositivos;
	var sumaNegativos;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var respuesta;
	sumaPositivos=0;
	sumaNegativos=0;
	promedioPositivos=0;
	promedioNegativos=0;
	diferenciaPositivosNegativos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	while (respuesta != "no")
	{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		if (numero < 0)
		{
			sumaNegativos = sumaNegativos + numero;
			contadorNegativos++;
		}
		else if (numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
			contadorPositivos++;
		}
		else 
		{
			contadorCeros++;
		}
		if (numero % 2 == 0 && numero != 0)
		{
			contadorPares++;
		}
		respuesta = prompt("Ingrese 'no' para salir.");
	}
	promedioNegativos = sumaNegativos/contadorNegativos;
	promedioPositivos = sumaPositivos/contadorPositivos;
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	document.write("La suma de negativos es: "+sumaNegativos+"<br>");
	document.write("La suma de positivos es: "+sumaPositivos+"<br>");
	document.write("La cantidad de positivos es: "+contadorPositivos+"<br>");
	document.write("La cantidad de negativos es: "+contadorNegativos+"<br>");
	document.write("La cantidad de ceros es: "+contadorCeros+"<br>");
	document.write("La cantidad de pares es: "+contadorPares+"<br>");
	document.write("El promedio de negativos es :"+promedioNegativos+"<br>");
	document.write("El promedio de los positivos es: "+promedioPositivos+"<br>");
	document.write("La diferencia entre positivos y negativos es: "+diferenciaPositivosNegativos+"<br>");
}