import { App } from '~common/scripts/app';
import { HeaderSticky } from './scripts/header-sticky';

export const Header = (() => {
  const header = document.querySelector('.js-header');
  const sticky = new HeaderSticky(header);
  App.breakpoints.on(['xxs', 'xs', 'sm'], sticky.destroy, sticky.init);
  return { sticky };
})();
