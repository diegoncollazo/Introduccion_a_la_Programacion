function mostrar()
{
	var estadoCivil;
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById('estadoCivil').value;
	if (edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}