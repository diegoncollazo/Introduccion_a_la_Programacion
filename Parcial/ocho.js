/*Realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a)
la cantidad de números pares.
b)
el promedio de todos los números ingresados.
c)
la suma de todos los números.
d)
El número máximo y el mínimo.*/
function Mostrar()
{
	var numeroPositivo;
	var respuesta;
	var cantidadDePares;
	var cantidadTotalNumeros;
	var promedioTotalNumeros;
	var acumuladorTotalNumeros;
	var numeroMaximo;
	var numeroMinimo;
	cantidadDePares=0;
	cantidadTotalNumeros=0;
	acumuladorTotalNumeros=0;
	while (respuesta!="no")
	{
		numeroPositivo = prompt("Ingrese numero");
		numeroPositivo = parseInt(numeroPositivo);

		while (isNaN(numeroPositivo) || numeroPositivo<=0)//valido
		{
			numeroPositivo = prompt("Re-ingrese numero");
			numeroPositivo = parseInt(numeroPositivo);			
		}

		if (numeroPositivo % 2 == 0)
		{
			cantidadDePares++;
		}

		if (cantidadTotalNumeros == 0)
		{
			numeroMaximo = numeroPositivo;
			numeroMinimo = numeroPositivo;
		}
		else if (numeroPositivo > numeroMaximo)
		{
			numeroMaximo = numeroPositivo;
		}
		else if (numeroPositivo < numeroMinimo)
		{
			numeroMinimo = numeroPositivo;
		}

		cantidadTotalNumeros++;
		acumuladorTotalNumeros = acumuladorTotalNumeros + numeroPositivo;
		respuesta = prompt("Ingrese 'no' para dejar de ingresar numeros");
	}
	promedioTotalNumeros = acumuladorTotalNumeros / cantidadTotalNumeros;
	document.write("Cantidad numeros pares: "+cantidadDePares+"<br>");
	document.write("Promedio numeros: "+promedioTotalNumeros+"<br>");
	document.write("Suma numeros: "+acumuladorTotalNumeros+"<br>");
	document.write("El maximo es: "+numeroMaximo+" el minimo es: "+numeroMinimo);
}