import { Observer } from '~components/observer';

function loadImg({
  src, srcset, alt, title,
}) {
  const altAttr = alt || title || '';
  const titleAttr = title || alt || '';
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.alt = altAttr || titleAttr || '';
    img.title = titleAttr || altAttr || '';
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`load error: ${img.currentSrc}`));
    };
    img.src = src;
    img.srcset = srcset;
  });
}


export class LazyImage {
  constructor(node) {
    this.node = node;
    this.onLoad = () => {};
    this.onError = () => {};
    Observer.observe({
      node,
      once: true,
      callback: (isVisible) => {
        if (isVisible) {
          this.load().then(this.onLoad).catch(this.onError);
        }
      },
    });
  }

  load() {
    return loadImg(this.node.dataset)
      .then((img) => {
        this.node.parentNode.replaceChild(img, this.node);
        this.node = img;
        return img;
      });
  }
}
