const src = './src';
const common = `${src}/common`;
const components = `${src}/components`;
const build = $.isProd ? './build/' : './build-dev';

module.exports = {
  src,
  common,
  build,
  components,
  server: {
    base: build,
  },
  clean: build,
  alias: {
    '~common': common,
    '~components': components,
    '~images': `${build}/images`,
    '~static': `${src}/static`,
    '~vendor': `${src}/vendor`,
  },
  webpack: {
    context: src,
    src: {
      index: 'index.js',
    },
    dest: build,
  },
  static: {
    src: `${src}/static/**/*.*`,
    watch: [
      `${src}/static/**/*.*`,
    ],
    dest: `${build}/static`,
  },
  pug: {
    src: `${src}/*.{jade,pug}`,
    lint: `${src}/**/*.{jade,pug}`,
    dest: build,
    clean: `${build}/*.html`,
    watch: `${src}/**/*.{jade,pug}`,
  },
  images: {
    src: `${src}/images/**/*.{png,jpeg,jpg,svg,gif}`,
    dest: `${build}/images`,
    watch: `${src}/images/**/*.*`,
  },
  icons: {
    src: `${src}/icons/**/*.svg`,
    watch: `${src}/icons/**/*.svg`,
    template: `${components}/icon/sprite.handlebars`,
    dest: `${components}/icon`,
  },
};
