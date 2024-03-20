function cargarComponente(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedorComponentes").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  window.onload = function () {
    cargarComponente('OpcionesMenu/Inicio/Inicio.html');
  };

  