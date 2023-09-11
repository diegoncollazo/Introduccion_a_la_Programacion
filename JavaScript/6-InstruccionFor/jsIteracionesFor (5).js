function mostrar()
{
	var numero;
	for ( ; ; )
	{
		console.log(numero);
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		if (numero == 9)
		{
			break;
		}
	}
}