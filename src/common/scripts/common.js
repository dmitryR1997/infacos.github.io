import { App } from '~common/scripts/app';
import { LazyLoader } from '~common/scripts/lazy-loader';
import { documentReady } from '~common/scripts/utils/document-ready';

documentReady(LazyLoader.init);

App.breakpoints.change(current => App.debug(`breakpoints: ${current}`));
