
function Mostrar()
{
	var laBase;
	var elPerimetro;
	laBase = document.getElementById('laBase').value
	laBase = parseInt(laBase);
	elPerimetro = 4 * laBase;
	alert("El perimetro es "+elPerimetro);
}