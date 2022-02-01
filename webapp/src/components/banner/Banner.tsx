// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useEffect, useState} from 'react';
import './banner.scss';

import {useAppSelector} from '@/pluginStore/hooks';

const AlertBanner = () => {
    const {BannerColor, BannerText, BannerTextColor} = useAppSelector((state) => state.banner.config);

    const [bc, updateBc] = useState(BannerColor);
    const [bt, updateBt] = useState(BannerText);
    const [btc, updateBtc] = useState(BannerTextColor);

    useEffect(() => {
        updateBc(BannerColor);
        updateBt(BannerText);
        updateBtc(BannerTextColor);
    }, [BannerColor, BannerText, BannerTextColor]);
    return (
        <div
            className='extra-announcement-bar'

            style={{
                color: btc,
                backgroundColor: bc,
            }}
        >
            <div className='extra-announcement-bar__text'>
                {bt}
            </div>

        </div>
    );
};

export default AlertBanner;
