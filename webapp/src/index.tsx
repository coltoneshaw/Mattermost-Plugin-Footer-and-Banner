import {Store, Action} from 'redux';

import {GlobalState} from 'mattermost-redux/types/store';

import {setBannerConfig, setFooterConfig, pluginStore} from '@/pluginStore';

import PluginRoot from '@/plugin';

import manifest from '@/manifest';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from '@/types/mattermost-webapp';

type webSocketEvent = {
    BannerColor?: string,
    BannerText?: string,
    BannerTextColor?: string,
    FooterColor?: string,
    FooterTextColor?: string,
    FooterText?: string
    EnableFooter?: boolean,
    EnableBanner?: boolean
}
const dispatchPluginStore = (updateFunction: CallableFunction, data: unknown) => pluginStore.dispatch(updateFunction(data));

export default class Plugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        const endpoint = `${window.basename}/plugins/${manifest.id}/config`;

        fetch(endpoint).then((r) => r.json()).then((data: webSocketEvent) => {
            const {BannerColor, BannerText, BannerTextColor, FooterColor, FooterText, FooterTextColor, EnableBanner, EnableFooter} = data;
            dispatchPluginStore(setFooterConfig, {FooterColor, FooterText, FooterTextColor, EnableFooter});
            dispatchPluginStore(setBannerConfig, {BannerColor, BannerText, BannerTextColor, EnableBanner});
        });

        const websocketEventName = 'setting_changed';
        registry.registerWebSocketEventHandler(`custom_${manifest.id}_${websocketEventName}`, (event: { data: webSocketEvent }) => {
            const {BannerColor, BannerText, BannerTextColor, FooterColor, FooterText, FooterTextColor, EnableBanner, EnableFooter} = event.data;
            dispatchPluginStore(setFooterConfig, {FooterColor, FooterText, FooterTextColor, EnableFooter});
            dispatchPluginStore(setBannerConfig, {BannerColor, BannerText, BannerTextColor, EnableBanner});
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

