import { App } from '~common/scripts/app';
import { OwlCarousel } from '~components/owl-carousel';

(() => {
  const section = document.querySelector('.js-section-faq');
  const slider = section.querySelector('[data-rel="section.faq.slider"]');
  const carousel = new OwlCarousel({
    node: slider,
    options: {
      margin: 20,
      items: 1,
      loop: false,
      nav: false,
      dots: true,
      autoWidth: true,
    },
  });
  App.breakpoints.once(['xxs', 'xs', 'sm'], carousel.init, carousel.destroy);
})();
