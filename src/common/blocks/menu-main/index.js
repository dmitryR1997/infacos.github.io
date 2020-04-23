import { getOffset } from '~common/scripts/utils/get-offset';

function scroll(node) {
  const offset = getOffset(node);
  window.scrollTo({
    top: offset.top,
    behavior: 'smooth',
  });
}

(() => {
  const menu = document.querySelector('.js-menu-main');
  const clickHandler = (event) => {
    const link = event.target.closest('[href^="#"]');
    if (link) {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        return scroll(target);
      }
    }
    return event;
  };
  menu.addEventListener('click', clickHandler);
})();
