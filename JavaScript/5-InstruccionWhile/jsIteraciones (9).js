function mostrar()
{
	var bandera = true;
	var respuesta;
	var minimo;
	var maximo;
	var numero;
	while (respuesta != "no")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		if (bandera == true)
		{
			maximo = numero;
			minimo = numero;
			bandera = false;
		}
		if (numero < minimo)
		{
			minimo = numero;
		}	
		if (numero > maximo)
		{
			maximo = numero;
		}
		respuesta = prompt("¿Quiere seguir ingresando numeros?");
	}
	document.getElementById('minimo').value = minimo;
	document.getElementById('maximo').value = maximo;
}