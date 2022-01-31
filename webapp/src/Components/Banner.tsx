// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import './alert_banner.scss';

const AlertBanner = (props: any) => {
    if (!window?.config) {
        return null;
    }
    return (
        <div
            className='extra-announcement-bar'
            id='test test'
        >
            <div className='extra-announcement-bar__text'>
                {window.config.BannerText}
            </div>

        </div>
    );
};

export default AlertBanner;
