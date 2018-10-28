function display_none() { // Función que oculta todos los días.

  document.getElementById("Domingo").style.display="none";
  document.getElementById("Lunes").style.display="none";
  document.getElementById("Martes").style.display="none";
  document.getElementById("Miercoles").style.display="none";
  document.getElementById("Jueves").style.display="none";
  document.getElementById("Viernes").style.display="none";
  document.getElementById("Sabado").style.display="none";
  document.getElementById("ABLunes").style.display="none";
  document.getElementById("ABMartes").style.display="none";
  document.getElementById("ABMiercoles").style.display="none";
  document.getElementById("ABJueves").style.display="none";
  document.getElementById("ABViernes").style.display="none";
  document.getElementById("ABSabado").style.display="none";

};

function Ruta2(dias) { //Función que devuelve la ruta del día.

  switch (dias) {
    case 0:
      document.getElementById("Domingo").style.display="block";
      break;
    case 1:
      document.getElementById("Lunes").style.display="block";
      break;
	 case 2:
      document.getElementById("Martes").style.display="block";
      break;
    case 3: document.getElementById("Miercoles").style.display="block";
      break;
    case 4: document.getElementById("Jueves").style.display="block";
      break;
    case 5: document.getElementById("Viernes").style.display="block";
      break;
    case 6: document.getElementById("Sabado").style.display="block";
      break;
  };

};

function RutaABC(dias) { //Función que devuelve la ruta del día ordenada alfabétiamente.

  switch (dias) {
    case 0:
      document.getElementById("Domingo").style.display="block";
      break;
    case 1:
      document.getElementById("ABLunes").style.display="block";
      break;
	  case 2: 
      document.getElementById("ABMartes").style.display="block";
      break;
    case 3: 
      document.getElementById("ABMiercoles").style.display="block";
      break;
    case 4:
      document.getElementById("ABJueves").style.display="block";
      break;
    case 5:
      document.getElementById("ABViernes").style.display="block";
      break;
    case 6:
      document.getElementById("ABSabado").style.display="block";
      break;
  };

};

function ruta_hoy() {

  var hoy, lista;

  //Obtengo el día de hoy
  hoy = new Date();
    
  lista = document.getElementById("dias")
  lista.selectedIndex = hoy.getDay();
    
  ruta();

};

function ruta() {

  var dia, lista, abc;

  display_none();

  //Obtengo la opción seleccionada      
  lista = document.getElementById("dias");
  dia = lista.options[lista.selectedIndex].value;

  abc = document.getElementById("ABC").checked

  if (!abc) { Ruta2(Number(dia)) }
  else { RutaABC(Number(dia)) };

}  // Fin ruta.

function dia_ant() {
  var lista, dia;

  lista = document.getElementById("dias");
  dia = lista.selectedIndex;

  if (dia == 0) { dia = 6}
  else { dia -= 1 };

  lista.selectedIndex = dia;

  ruta();
}

function dia_sig() {
  var lista, dia;

  lista = document.getElementById("dias");
  dia = lista.selectedIndex;

  if (dia == 6) { dia = 0}
  else { dia += 1 };

  lista.selectedIndex = dia;

  ruta();
}

function Eliminar(AA){ 
   AA.parentElement.style.display = "none";
}
