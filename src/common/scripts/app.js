import * as points from '~common/styles/breakpoints.scss';
import { Breakpoints } from '~components/breakpoints';
import { Stream } from '~common/scripts/utils/stream';

export const App = (function () {
  const debug = console.info;
  const breakpoints = new Breakpoints(points);
  const lang = document.documentElement.getAttribute('lang');
  return {
    breakpoints,
    lang: lang ? lang.toLowerCase() : null,
    stream: new Stream(),
    debug,
  };
}());
