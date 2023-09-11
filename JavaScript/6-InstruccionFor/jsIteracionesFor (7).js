/*Terminar*/

function mostrar()
{
	var contador;
	var divisores;
	var numero;
	divisores = 0;
	
	numero = prompt("Ingrese un número: ");
	numero = parseInt(numero);
	
	for (contador=1 ; numero >= contador ; contador++)
	{
		if (numero % contador == 0)
		{
			console.log(contador);
			divisores++;
		}
	}
	console.log(divisores);
}