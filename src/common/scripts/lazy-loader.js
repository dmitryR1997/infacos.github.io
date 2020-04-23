import { App } from '~common/scripts/app';
import { LazyImage } from '~components/lazy-image';

function init(context) {
  try {
    const nodes = context.querySelectorAll('.js-lazy-img');
    nodes.forEach((node) => {
      const img = new LazyImage(node);
      img.onLoad = image => image.classList.add('a-opacity', 'is-animated');
    });
  } catch (e) {
    App.debug(e);
  }
}

export const LazyLoader = { init };
