
import React from 'react';

import {Provider} from 'react-redux';

import pluginStore from '@/pluginStore/store';

import Banner from '@/components/banner/Banner';

import Footer from '@/components/footer/Footer';
const PluginRoot = () => {
    return (
        <React.StrictMode>
            <Provider store={pluginStore}>
                <Banner/>
                <Footer/>
            </Provider>
        </React.StrictMode>
    );
};

export default PluginRoot;
