function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	if (edad<13)
	{
		alert("Usted es niño.");
	}
	else if (edad>17)
	{
		alert("Usted es mayor de edad.");
	}
	else 
	{
		alert("Usted es adolescente.");
	}
}