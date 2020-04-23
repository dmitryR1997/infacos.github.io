import { getOffset } from '~common/scripts/utils/get-offset';

const layerTransition = (layer) => {
  const item = layer;
  const { node } = item;
  const windowBottom = window.scrollY + window.innerHeight;
  const currentY = +item.translateY;
  const itemHeight = node.offsetHeight;
  const itemBottom = layer.offset.top + itemHeight + currentY;
  if (windowBottom < layer.offset.top || window.scrollY > itemBottom) { return false; }
  let scrollOffset = windowBottom - layer.offset.top;
  if (layer.offset.top < window.innerHeight) {
    scrollOffset = window.scrollY;
  }
  const layerY = (scrollOffset * item.parallax + currentY) * -item.parallax;
  return window.requestAnimationFrame(() => {
    node.style.transform = `translate3d(0,${Math.round(layerY)}px,0) rotate(0.001deg)`;
    item.translateY = layerY;
  });
};

const layerReset = (layer) => {
  const { node } = layer;
  node.style.transform = '';
};

const makeLayer = ({ node, parallax = 0.5 }) => {
  const offset = getOffset(node);
  return {
    node,
    offset,
    parallax,
    translateY: 0,
  };
};

export function ParallaxScroll(layers) {
  this.active = false;
  const handler = () => {
    if (this.active) {
      this.layers.forEach(layer => layerTransition(layer));
    }
  };
  this.init = () => {
    this.active = true;
    this.layers = layers.map(makeLayer);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  };
  this.destroy = () => {
    this.active = false;
    window.removeEventListener('scroll', handler);
    this.layers.forEach(layer => layerReset(layer));
  };
}
