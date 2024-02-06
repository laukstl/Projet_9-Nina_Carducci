"use strict";

new Splide('.splide', {
  type: 'loop',
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  lazyLoad: true
}).mount();
lightGallery(document.getElementById('lightgallery'), {
  // plugins: [lgThumbnail, lgAutoplay],
  // plugins: [lgZoom, lgThumbnail, lgShare, lgAutoplay, lgComment],
  licenseKey: '0000-0000-000-0000',
  speed: 500,
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: true,
  toggleThumb: true,
  download: false,
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false,
    rotate: false,
    infiniteZoom: true
  }
});