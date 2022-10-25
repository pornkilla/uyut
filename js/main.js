function serveHeaderNavigation() {
  let burger = document.querySelector('.nav-btn');
  let burgerMenu = document.getElementById('header-menu');
  let menuLinks = document.querySelectorAll('.header-menu-link > a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      burgerMenu.classList.remove('active');
    });
  });
}

function scrollToEl(element) {
  element.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'
  })
}

function serveModal() {
  let modalBtn = document.querySelector('.call-me-modal');
  let closeModalBtn = document.querySelector('.modal-close');
  let modal = document.getElementById('call-me-modal');

  modalBtn.addEventListener('click', () => {
    modal.classList.toggle('modal--visible');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('modal--visible');
  });
}

function serveBookTeaserButtons() {
  let btns = document.querySelectorAll('.btn-trigger');

  btns.forEach(el => {
    el.addEventListener('click', () => {
      let parent = el.parentNode;
      let bookBtn = el.querySelector('.book-now-btn');
      let hrefIndex = el.getAttribute('href').length ? el.getAttribute('href').slice(-1) : '';
      let attrHrefTop = '#room-' + hrefIndex;
      let attrHrefInitial = '#book-' + hrefIndex;
      
      parent.classList.toggle('active');
      bookBtn.classList.toggle('active');
      el.setAttribute('href', attrHrefTop);
      if (parent.classList.contains('active')) {
        el.setAttribute('href', attrHrefInitial);
      }
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
  let content = document.querySelector('#currentyear').insertAdjacentHTML('afterbegin', currentYear);
  return content;
}

function prepareGalleries() {
  const slider1 = tns({
    container: '.slider-general',
    mouseDrag: false,
    items: 5,
    slideBy: 1,
    swipeAngle: false,
    autoplay: true,
    autoplayResetOnVisibility: true,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    controlsContainer: '.gal-slider-controls',
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

  const roomSliderDefaults = {
    mouseDrag: false,
    items: 4,
    slideBy: 1,
    swipeAngle: false,
    autoplayResetOnVisibility: true,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    speed: 400,
    gutter: 16,
    responsive: {
      320: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
    },
  }
  const room1gallery = tns(
    Object.assign(roomSliderDefaults, {
      container: '#room-1-gallery',
      controlsContainer: '.room-1-gallery-controls',
    })
  );
  const room2gallery = tns(
    Object.assign(roomSliderDefaults, {
      container: '#room-2-gallery',
      controlsContainer: '.room-2-gallery-controls',
    })
  );
  const room3gallery = tns(
    Object.assign(roomSliderDefaults, {
      container: '#room-3-gallery',
      controlsContainer: '.room-3-gallery-controls',
    })
  );
  const room4gallery = tns(
    Object.assign(roomSliderDefaults, {
      container: '#room-4-gallery',
      controlsContainer: '.room-4-gallery-controls',
    })
  );
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
  new window.SimpleLightbox({
    elements: '#room-1-gallery a'
  });
  new window.SimpleLightbox({
    elements: '#room-2-gallery a'
  });
  new window.SimpleLightbox({
    elements: '#room-3-gallery a'
  });
  new window.SimpleLightbox({
    elements: '#room-4-gallery a'
  });
}

function prepareYandexMap() {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
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

function serveStickyHeader() {
  window.onscroll = function() {stickyHeader()};

  let root = document.querySelector('.page-container');
  let header = document.querySelector('header');
  let sticky = header.offsetTop;

  function addClasses() {
    header.classList.add('u-fixed', 'u-top-0', 'u-z-10');
    root.classList.add('top-offset');
  };
  function removeClasses() {
    header.classList.remove('u-fixed', 'u-top-0', 'u-z-10');
    root.classList.remove('top-offset');
  };
  function stickyHeader() {
    window.pageYOffset > sticky ? addClasses() : removeClasses();
  }
}

function loaderOff() {
  let loaderContainer = document.querySelector('.loader-container');
  loaderContainer.parentElement.removeChild(loaderContainer);
  document.body.classList.remove('u-overflow-hidden');
}

function initSmoothScroll() {
  let scroll = new SmoothScroll('a[href*="#"]');
}

document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    loaderOff();
    serveHeaderNavigation();
    serveBookTeaserButtons();
    serveCloseButtons();
    displayCurrentYear();
    prepareYandexMap();
    prepareGalleries();
    prepareLightBoxes();
    initSmoothScroll();
    serveStickyHeader();
    serveModal();
  }  
});

document.addEventListener('keyup', function(e) {
  if(e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal-overlay');
      for (const modal of modals) {
          modal.click();
      }
  }
});