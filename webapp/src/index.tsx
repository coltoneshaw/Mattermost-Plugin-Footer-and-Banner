import {Store, Action} from 'redux';

import {GlobalState} from 'mattermost-webapp/packages/mattermost-redux/src/types/store';
import axios from 'axios';

import Banner from 'Components/Banner';

import manifest from './manifest';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from './types/mattermost-webapp';
export default class Plugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        fetchPluginConfig();
        registry.registerGlobalComponent(Banner);
    }
}
const getPluginPath = () => {
    return window.basename ? `${window.basename}/plugins/${manifest.id}` : `/plugins/${manifest.id}`;
};

const fetchPluginConfig = async () => {
    const resp = await axios.get(`${getPluginPath()}/config`);
    const config = resp.data;

    window.config = config;
};

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
        basename: string,
        config: {
            BannerText: string,
            BannerColor: string,
            BannerTextColor: string
        } | undefined
    }
}

window.registerPlugin(manifest.id, new Plugin());

