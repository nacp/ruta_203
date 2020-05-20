function calc_iva(AA) {
			var iva;
			iva = AA.value * 1.22;
			document.getElementById("resultado").innerHTML = Math.round(iva);
		}
