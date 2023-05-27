$(document).ready(function () {
  var basePath = 'Vistas/Dep/Imgs/proyectos/';
  var currentFolderIndex = 0;
  var currentImageIndex = 0;
  var totalFolders = 10;

  var maxImagesPerFolder = {
    carpeta0: 14,
    carpeta1: 10,
    carpeta2: 12,
    carpeta3: 12,
    carpeta4: 9,
    carpeta5: 10,
    carpeta6: 9,
    carpeta7: 16,
    carpeta8: 8,
    carpeta9: 10,
    // Asigna el número máximo para cada carpeta aquí
  };

  function updateImage() {
    var imagePath = basePath + 'carpeta' + currentFolderIndex + '/imagen' + currentImageIndex + '.jpg';
    $('#image').attr('src', imagePath);
  }

  $('.slider__btn--arriba').click(function () {
    if (currentFolderIndex > 0) {
      currentFolderIndex--;
      currentImageIndex = 0;
      updateImage();
      if (currentFolderIndex === 0) {
        $('.slider__btn--arriba').addClass('hidden'); // Ocultar flecha de arriba en el inicio del slider
      }
    }
  });

  $('.slider__btn--abajo').click(function () {
    $('.slider__btn--arriba').removeClass('hidden');
    if (currentFolderIndex < totalFolders - 1) {
      currentFolderIndex++;
      currentImageIndex = 0;
      updateImage();
    }
  });

  $('.slider__btn--izquierda').click(function () {
    if (currentImageIndex === 0) {
      currentImageIndex = maxImagesPerFolder['carpeta' + currentFolderIndex] - 1;
    } else {
      currentImageIndex--;
    }
    updateImage();
  });

  $('.slider__btn--derecha').click(function () {
    var currentFolder = 'carpeta' + currentFolderIndex;
    var numMaxImages = maxImagesPerFolder[currentFolder];

    if (currentImageIndex < numMaxImages - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }

    updateImage();
  });

  updateImage();
});