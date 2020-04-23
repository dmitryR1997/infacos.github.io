import { App } from '~common/scripts/app';
import { SectionParallax } from '~common/scripts/section-parallax';

(() => {
  const section = document.querySelector('.js-hero');
  const parallax = new SectionParallax(section);
  App.breakpoints.once(['xxs', 'xs', 'sm'], parallax.destroy, parallax.init);
})();
