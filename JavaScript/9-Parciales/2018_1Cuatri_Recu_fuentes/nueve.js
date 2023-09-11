function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturasPares;
	var contadorDeAnimales;
	var animalesQueVivenBajoCero;
	var banderaAnimalesPesoBajoCero;
	var acumuladorDePeso;
	var promedioDePeso;

	temperaturasPares = 0;
	contadorDeAnimales = 0;
	animalesQueVivenBajoCero = 0;
	banderaAnimalesPesoBajoCero = true
	acumuladorDePeso = 0;

	while (respuesta!="no")
	{	
		animal = prompt("Ingrese un animal:");
		peso = prompt("Ingrese el peso del animal:");
		peso = parseInt(peso);

		while(isNaN(peso) || peso <1 || peso> 1000)
		{
			peso = prompt("Re-ingrese el peso del animal:");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese la temperatura del habitat:");
		temperatura = parseInt(temperatura);
		
		while(isNaN(temperatura) || temperatura <- 30 || temperatura > 30)
		{
			temperatura = prompt("Ingrese la temperatura del habitat:");
			temperatura = parseInt(temperatura);
		}

		if (temperatura % 2 ==0)
		{
			temperaturasPares++;

		}

		contadorDeAnimales++;

		if (contadorDeAnimales == 1)
		{
			animalMasPesado = animal;
			animalMasPesadoPeso = peso;
		}
		else
		{
			if (peso > animalMasPesado)
			{
				animalMasPesado = animal;
				animalMasPesadoPeso = peso;
			}
		}

		if (temperatura < 0)
		{
			animalesQueVivenBajoCero++;
			if (banderaAnimalesPesoBajoCero = true)
			{
				banderaAnimalesPesoBajoCero = false;
				pesoMaximo = peso;
				pesoMinimo = peso;
			}
			if (peso > pesoMaximo)
			{
				pesoMaximo = peso;
			}
			if (peso < pesoMinimo)
			{
				pesoMinimo = peso;	
			}
		}

		acumuladorDePeso = acumuladorDePeso + peso;
		respuesta = prompt("Para no cargar mas animales ingrese 'no'");
	}
	promedioDePeso = acumuladorDePeso / contadorDeAnimales;

	document.write("a) Cantidad de temperaturas pares:"+temperaturasPares+"<br>");
	document.write("b) Animal mas pesado ("+animalMasPesadoPeso+"Kgrs) es el"+animalMasPesado+"<br>");
	document.write("c) Cantidad de animales que viven bajo cero:"+animalesQueVivenBajoCero+"<br>");
	document.write("d)"+"<br>");
	document.write(+"<br>");
}