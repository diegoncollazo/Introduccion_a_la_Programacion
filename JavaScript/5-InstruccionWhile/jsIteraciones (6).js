function mostrar()
{
	var contador;
	var acumulador;
	contador = 0;
	acumulador = 0;
	while (contador < 5)
	{
		var numero = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + numero;
		contador++;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}