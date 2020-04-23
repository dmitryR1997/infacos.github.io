function HeaderSticky(node, options = {}) {
  this.el = node;
  this.active = false;
  this.height = this.el.offsetHeight;
  this.options = Object.assign({
    offset: 0,
    classes: {
      enabled: 'header--sticky',
      disabled: 'header--static',
    },
  }, options);
  const enable = () => {
    this.active = true;
    this.el.classList.remove(this.options.classes.disabled);
    this.el.classList.add(this.options.classes.enabled);
  };
  const disable = () => {
    this.active = false;
    if (this.el.classList.contains(this.options.classes.enabled)) {
      this.el.classList.add(this.options.classes.disabled);
    }
    this.el.classList.remove(this.options.classes.enabled);
  };
  const onScroll = () => {
    window.requestAnimationFrame(() => {
      if (window.scrollY > this.breakpoint) {
        enable();
      } else {
        disable();
      }
    });
  };
  const onResize = () => {
    this.height = this.el.offsetHeight;
    this.breakpoint = this.height + this.options.offset;
  };
  this.init = () => {
    this.breakpoint = this.height + this.options.offset;
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return this;
  };
  this.destroy = () => {
    this.el.classList.remove(this.options.classes.enabled);
    this.el.classList.remove(this.options.classes.disabled);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('scroll', onScroll);
    return this;
  };
  this.init();
}

export { HeaderSticky };
