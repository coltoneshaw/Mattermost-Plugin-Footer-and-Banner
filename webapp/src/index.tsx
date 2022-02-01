import {Store, Action} from 'redux';

import {GlobalState} from 'mattermost-redux/types/store';

import {setConfig, pluginStore} from '@/pluginStore';

import PluginRoot from '@/plugin';

import manifest from '@/manifest';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from '@/types/mattermost-webapp';

const dispatchPluginStore = (updateFunction: CallableFunction, data: unknown) => pluginStore.dispatch(updateFunction(data));

export default class Plugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        const endpoint = `${window.basename}/plugins/${manifest.id}/config`;

        fetch(endpoint).then((r) => r.json()).then((data) => {
            dispatchPluginStore(setConfig, data);
        });

        const websocketEventName = 'setting_changed';
        registry.registerWebSocketEventHandler(`custom_${manifest.id}_${websocketEventName}`, (event: { data: unknown }) => {
            dispatchPluginStore(setConfig, event.data);
        });

        registry.registerGlobalComponent(PluginRoot);
    }
}

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
        basename: string,
    }
}

window.registerPlugin(manifest.id, new Plugin());

