import { OwlCarousel } from '~components/owl-carousel';

(() => {
  const section = document.querySelector('.js-section-news');
  const slider = section.querySelector('.news-slider');
  const carousel = new OwlCarousel({
    node: slider,
    options: {
      items: 2,
      loop: false,
      nav: true,
      dots: false,
    },
  });

  carousel.init();
})();
