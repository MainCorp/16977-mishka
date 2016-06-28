var menu = document.querySelector(".main-nav");
var btn = menu.querySelector(".main-nav__toggle");

menu.classList.add("main-nav--js");

btn.addEventListener("click", function() {
  menu.classList.toggle("main-nav--open");
});

if (window.ymaps) {
  ymaps.ready(init);
}

function init() {
  var mapContainer = document.querySelector(".contacts__map");
  var coords = [59.938631, 30.323055];

  var map = new ymaps.Map(mapContainer, {
        center: coords,
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
    });

  var marker = new ymaps.Placemark(coords, {
      iconCaption: "HTML Academy"
  }, {
      preset: 'islands#darkGreenDotIconWithCaption'
  });
  map.geoObjects.add(marker);
}
