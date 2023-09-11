function mostrar()
{
	var positivo;
	var negativo;
	var numero;
	var respuesta;
	positivo = 0;
	negativo = 0;
	while (respuesta != "no")
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		if (numero >= 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}
		respuesta = prompt("¿Quiere seguir ingresando numeros?");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}