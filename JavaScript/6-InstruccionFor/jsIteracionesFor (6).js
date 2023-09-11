function mostrar()
{
	var contador;
	var numero;
	var pares;
	var cantidad;
	pares = 0;
	contador=1;
	numero = prompt("Numero a ingresar: ");
	numero = parseInt(numero);
	cantidad = numero + 1;
	for ( ; cantidad > contador ; contador++)
	{
		if (contador % 2 ==0)
		{
			pares++;
			console.log("Numero par: "+contador);
		}
	}
	console.log("Cantidad de pares es: "+pares);
}