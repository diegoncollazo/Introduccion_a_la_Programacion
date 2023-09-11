function mostrar()
{
	//Variables.
	var letra;
	var numero;
	var respuesta;
	var cantidadPares;
	var cantidadImPares;
	var cantidadCeros;
	var sumaPositivos;
	var sumaNegativos;
	var promedioPositivos;
	var bandera;
	var mayor;
	var menor;
	var letraMayor;
	var letraMenor;
	//Inicializaciones.
	cantidadPares = 0;
	cantidadImPares = 0;
	cantidadCeros = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	promedioPositivos = 0;
	cantidadPositivos = 0;
	bandera = true;

	while (respuesta !="no")
	{
		//Tomar y validar datos.
		letra = prompt("Ingrese una letra:");
		numero = prompt("Ingrese numero entre -100 & 100.");
		numero = parseInt(numero);
		while (isNaN(numero) || numero < -100 || numero > 100)
		{
			numero = prompt("Re-ingrese numero entre -100 & 100.");
			numero = parseInt(numero);
		}
		//Lógica del programa.
		if (numero % 2 == 0)
		{
			cantidadPares++;
		}
		else
		{
			cantidadImPares++;
		}
		if (numero == 0)
		{
			cantidadCeros++;
		}
		else if (numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
			cantidadPositivos++;
		}
		else
		{
			sumaNegativos = sumaNegativos + numero;
		}
		if (bandera == true)
		{
			menor = numero;
			letraMenor = letra;
			mayor = numero;
			letraMayor = letra;
			bandera = false
		}
		if (numero > mayor)
		{
			mayor = numero;
			letraMayor = letra;
		}
		if (numero < menor)
		{
			menor = numero;
			letraMenor = letra;
		}
		respuesta = prompt("Ingrese 'no' para parar la carga");
	}
	promedioPositivos = sumaPositivos / cantidadPositivos;
	//Presentar información.
	document.write("Cantidad de números pares "+cantidadPares+"<br>");
	document.write("Cantidad de números impares "+cantidadImPares+"<br>");
	document.write("Cantidad de ceros "+cantidadCeros+"<br>");
	document.write("Promedio de positivos "+promedioPositivos+"<br>");
	document.write("Suma de números negativos "+sumaNegativos+"<br>");
	document.write("El numero mayor es "+mayor+" y la letra es "+letraMayor+"<br>");
	document.write("El numero menor es "+menor+" y la letra es "+letraMenor+"<br>");
}