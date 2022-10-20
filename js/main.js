function serveHeaderNavigation() {
  let navBtns = document.querySelectorAll('.nav-btn');

  navBtns.forEach(function (el) {
    el.addEventListener('click', function () {

      let dropDownMenu = document.getElementById('header-menu');

      el.classList.toggle('active');
      dropDownMenu.classList.toggle('active');
    });
  });
}

function serveCloseButtons() {
  let closeBtns = document.querySelectorAll('.btn-close');

  closeBtns.forEach(function (el) {
    el.addEventListener('click', function () {
      let parent = el.parentNode;
      if (parent.getAttribute('data-target') === 'close') {
        parent.classList.add('u-none');
      }
    });
  });
}

function displayCurrentYear() {
  let currentYear = new Date().getFullYear();
  let content = document.querySelector("#currentyear").insertAdjacentHTML('afterbegin', currentYear);
  return content;
}

function prepareGalleries() {
  var slider = tns({
    container: '.slider-general',
    mouseDrag: true,
    items: 5,
    slideBy: 1,
    swipeAngle: false,
    autoplay: true,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    controlsContainer: ".slider-controls",
    speed: 400,
    gutter: 16,
    responsive: {
      320: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      1280: {
        items: 5
      }
    },
    center: true,
    preventScrollOnTouch: true,
  });
}

function prepareLightBoxes() {
  Object.assign(SimpleLightbox.defaults, {
    closeBtnCaption: 'Закрыть',
    nextBtnCaption: 'Следующий слайд',
    prevBtnCaption: 'Предыдущий слайд',
    loadingCaption: 'Загрузка...',
  });
  new window.SimpleLightbox({
    elements: '#gallery a'
  });
}

function prepareYandexMap() {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [61.785954534328, 34.312319323417],
      zoom: 16
    });

    var myCollection = new ymaps.GeoObjectCollection();

    myCollection.add(new ymaps.Placemark([61.785954534328, 34.312319323417], {
      balloonContentHeader: '<strong>Гостиница УЮТ г. Петрозаводск </strong>',
      balloonContentBody: 'г. Петрозаводск, ул. Крылова 6, Россия, Карелия',
    }, {
      preset: 'islands#icon',
      iconColor: '#316A63'
    }));

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('geolocationControl');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  serveHeaderNavigation();
  serveCloseButtons();
  displayCurrentYear();
  prepareYandexMap();
  prepareGalleries();
  prepareLightBoxes();

}, false);

document.addEventListener('keyup', function(e) {
  if(e.key === "Escape") {
      const modals = document.querySelectorAll('.modal-overlay');
      for (const modal of modals) {
          modal.click();
      }
  }
});