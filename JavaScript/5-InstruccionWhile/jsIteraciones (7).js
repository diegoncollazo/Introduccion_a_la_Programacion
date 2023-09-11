function mostrar()
{
	var contador;
	var acumulador;
	var numero;
	var respuesta;
	contador = 0;
	acumulador = 0;
	while (respuesta != "no")
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("¿Quiere seguir ingresando numeros?");
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}