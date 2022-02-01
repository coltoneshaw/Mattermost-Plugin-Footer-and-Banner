import React, {useEffect, useState} from 'react';
import './footer.scss';

import {useAppSelector} from '@/pluginStore/hooks';

const Footer = () => {
    const {FooterColor, FooterText, FooterTextColor, EnableFooter} = useAppSelector((state) => state.footer.config);

    if (!EnableFooter) return null;

    return (
        <div
            className='footer-bar'

            style={{
                color: FooterTextColor,
                backgroundColor: FooterColor,
            }}
        >
            <div className='footer-bar-text'>
                {FooterText}
            </div>

        </div>
    );
};

export default Footer;
