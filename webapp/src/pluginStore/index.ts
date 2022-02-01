import {setBannerConfig} from '@/components/banner/bannerReduxSlice';
import {setFooterConfig} from '@/components/footer/footerReduxSlice';

import store from './store';

const pluginStore = store;
export {pluginStore, setBannerConfig, setFooterConfig};
