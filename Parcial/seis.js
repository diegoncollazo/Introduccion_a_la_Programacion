function Mostrar()
{
	var contadorDiaHabil;
	var ventaPorDiaHabil;
	var totalVentas;
	var ventaImporteMayor;
	var ventaImporteMenor;
	totalVentas = 0;

	for (contadorDiaHabil=0;contadorDiaHabil < 24;contadorDiaHabil++)
	{
		ventaPorDiaHabil = prompt("Ingrese el importe del día");
		ventaPorDiaHabil = parseInt(ventaPorDiaHabil);
		while(isNaN(ventaPorDiaHabil) || ventaPorDiaHabil<=0)
		{
			ventaPorDiaHabil = prompt("Re-ingrese el importe del día");
			ventaPorDiaHabil = parseInt(ventaPorDiaHabil);
		}
		
		if (contadorDiaHabil ==0)
		{
			ventaImporteMayor = ventaPorDiaHabil;
			ventaImporteMenor = ventaPorDiaHabil;
		}
		else if (ventaPorDiaHabil > ventaImporteMayor)
		{
			ventaImporteMayor = ventaPorDiaHabil;
		}
		else if (ventaPorDiaHabil < ventaImporteMenor)
		{
			ventaImporteMenor = ventaPorDiaHabil;
		}

		totalVentas = totalVentas + ventaPorDiaHabil;
	}
	document.getElementById('importeFinal').value = totalVentas;
	alert("El venta menor fue: "+ventaImporteMenor+" y la venta mayor fue: "+ventaImporteMayor);
}