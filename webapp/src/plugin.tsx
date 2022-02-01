
import React from 'react';

import {Provider} from 'react-redux';

import pluginStore from '@/pluginStore/store';

import Banner from '@/components/banner/Banner';

const PluginRoot = () => {
    return (
        <React.StrictMode>
            <Provider store={pluginStore}>
                <Banner/>
            </Provider>
        </React.StrictMode>
    );
};

export default PluginRoot;
