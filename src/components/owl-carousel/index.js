import 'owl.carousel';
import { Icon } from '~components/icon';

$.fn.owlCarousel.Constructor.Plugins.Navigation.Defaults.navText = [
  new Icon('slider-prev').outerHTML,
  new Icon('slider-next').outerHTML,
];

function destroy(owl) {
  if (!owl) { return false; }
  $(owl).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  $(owl).find('.owl-stage-outer').children().unwrap();
  $(owl).find('.owl-thumbs').remove();
  return owl;
}

export function OwlCarousel({ node, options }) {
  this.el = node;
  this.options = options;
  this.init = () => {
    this.el.classList.add('owl-carousel');
    $(this.el).owlCarousel(this.options);
    return this;
  };
  this.destroy = () => {
    destroy(this.el);
    return this;
  };
}
