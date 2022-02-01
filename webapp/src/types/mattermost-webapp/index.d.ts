import React from 'react';

export interface PluginRegistry {
    registerPostTypeComponent(typeName: string, component: React.ElementType)
    registerMainMenuAction(text, action, mobileIcon?: any)
    registerPostDropdownMenuAction(text, action, filter)
    registerGlobalComponent(component: React.ElementType)
    registerRootComponent(component: React.ElementType)

    /**
    * INTERNAL: Subject to change without notice.
    * Register a component to render in channel's center view, in place of a channel toast.
    * All parameters are required.
    * Returns a unique identifier.
    */
    registerChannelToastComponent(component: React.ElementType)

    /**
    * Register a handler for WebSocket events.
    * Accepts the following:
    * - event - the event type, can be a regular server event or an event from plugins.
    * Plugin events will have "custom_<pluginid>_" prepended
    * - handler - a function to handle the event, receives the event message as an argument
    * Returns undefined.
    */
    registerWebSocketEventHandler(event: string, handler: CallableFunction)

    // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
}
