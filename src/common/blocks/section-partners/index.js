import { App } from '~common/scripts/app';
import { OwlCarousel } from '~components/owl-carousel';

(() => {
  const section = document.querySelector('.js-section-partners');
  const slider = section.querySelector('[data-rel="section.partners.slider"]');
  const carousel = new OwlCarousel({
    node: slider,
    options: {
      margin: 20,
      items: 2,
      loop: false,
      nav: false,
      dots: true,
      autoWidth: true,
      responsive: {
        [App.breakpoints.points.lg]: {
          dots: false,
        },
      },
    },
  });
  carousel.init();
})();
