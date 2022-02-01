import React from 'react';
import './banner.scss';
import ReactMarkdown from 'react-markdown';

import {useAppSelector} from '@/pluginStore/hooks';

const Banner = () => {
    const {BannerColor, BannerText, BannerTextColor, EnableBanner} = useAppSelector((state) => state.banner.config);

    if (!EnableBanner) return null;

    return (
        <div
            className='extra-announcement-bar'

            style={{
                color: BannerTextColor,
                backgroundColor: BannerColor,
            }}
        >
            <div className='extra-announcement-bar__text'>
                <ReactMarkdown>
                    {BannerText}
                </ReactMarkdown>
            </div>

        </div>
    );
};

export default Banner;
