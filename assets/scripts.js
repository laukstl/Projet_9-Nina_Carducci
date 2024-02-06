/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/semi */
// Init Swipper
const $lgSwiper = document.getElementById('lg-swipper')
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Init lightGallery ince swiper is initilized
  on: {
    init: function () {
      if ($lgSwiper !== null) {
        const lg = lightGallery($lgSwiper)

        // Before closing lightGallery, make sure swiper slideis aligned with the lightGallery active slide
        $lgSwiper.addEventListener('lgBeforeClose', () => {
          swiper.slideTo(lg.index, 0)
        })
      }
    }
  },

  pagination: {
    el: '.swiper-pagination'
  }
})

// Init Lightgallery
const lgElement = document.getElementById('lightgallery')
if (lgElement !== null) {
  lightGallery(lgElement, {
    // plugins: [lgZoom, lgThumbnail, lgShare, lgAutoplay, lgComment],
    licenseKey: '0000-0000-000-0000',
    speed: 500,
    // allowMediaOverlap: true,
    download: false,
    mobileSettings: {
      controls: false,
      showCloseIcon: false,
      download: false
    }
  })
}

// Init nav_Gallery
document.addEventListener('DOMContentLoaded', () => {
    const galButtons = document.querySelectorAll('#gallery button');
    const galPictures = document.querySelectorAll('#gallery a');

    galButtons.forEach((buttons) => {
        buttons.addEventListener('mouseup', () => {
            const filter = buttons.getAttribute('data-filter');
            galPictures.forEach((picture) => {
                const pictAttr = picture.getAttribute('data-tag');
                if (filter === 'tous' || pictAttr === filter) {
                    picture.style.display = 'block';
                } else {
                    picture.style.display = 'none';
                }
            })
        })
    })
})
