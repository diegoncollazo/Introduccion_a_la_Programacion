function mostrarAumento()
{
	var sueldo;
	var resultado;
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	resultado=sueldo*1.10;
	document.getElementById('resultado').value=resultado;
}