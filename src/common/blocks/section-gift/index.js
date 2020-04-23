import { App } from '~common/scripts/app';
import { OwlCarousel } from '~components/owl-carousel';

(() => {
  const section = document.querySelector('.js-section-about');
  const slider = section.querySelector('[data-rel="section.about.slider"]');
  const carousel = new OwlCarousel({
    node: slider,
    options: {
      margin: 20,
      items: 1,
      loop: false,
      nav: false,
      dots: true,
    },
  });
  App.breakpoints.once(['xxs', 'xs'], carousel.init, carousel.destroy);
})();
