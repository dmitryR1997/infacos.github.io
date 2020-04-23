import { App } from '~common/scripts/app';
import { SectionParallax } from '~common/scripts/section-parallax';

(() => {
  const section = document.querySelector('.js-section-org');
  const parallax = new SectionParallax(section);
  App.breakpoints.once(['xxs'], parallax.destroy, parallax.init);
})();
