function mostrar()
{
	var inicio;
	var final;
	var numero;
	var primo;
	primo = 0;
	numero = prompt("Ingreso un numero: ");
	numero = parseInt(numero);
	final = numero + 1;
	for (inicio=0 ; inicio < final ; inicio++)
	{
		if (numero % inicio == 0)
		{
			primo++;
		}
	}
	if (primo==2)
	{
		console.log("Es primo");
	}
	else
	{
		console.log("No es primo");
	}
}