function mostrar()
{
	var planeta;
	planeta = prompt("Ingrese el planeta: ");
	switch (planeta)
	{
		case "mercurio":
		case "venus":
			alert("Acá hace mas calor.");
			break;
		case "tierra":
			alert("Acá vivimos.");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Acá hace mas frío.");
			break;
		default:
			alert("No es un planeta valido.");
	}
}