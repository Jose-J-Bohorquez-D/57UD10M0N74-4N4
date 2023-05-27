function changeTab(index) {
  // Obtener todas las pestañas y contenido de las pestañas
  var tabs = document.getElementsByClassName('tab');
  var contents = document.getElementsByClassName('content');

  // Desactivar todas las pestañas y ocultar el contenido
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    contents[i].classList.remove('active');
  }

  // Activar la pestaña seleccionada y mostrar el contenido correspondiente
  tabs[index].classList.add('active');
  contents[index].classList.add('active');
}