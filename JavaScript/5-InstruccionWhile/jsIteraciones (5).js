function mostrar()
{
	var sexo;
	while (sexo!="f"&&sexo!="m")
	{
		sexo = prompt("Ingrese f ó m: ");
	}
	document.getElementById('Sexo').value=sexo;
}