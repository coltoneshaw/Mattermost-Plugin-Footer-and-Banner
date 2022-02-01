import {createSlice} from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
    config: {
        BannerText: 'test',
        BannerColor: '#579eff',
        BannerTextColor: '#fff',
        EnableBanner: true,
    },
};

type bannerSettings = {
    BannerText: string | undefined,
    BannerColor: string | undefined,
    BannerTextColor: string | undefined,
    EnableBanner: boolean | undefined
}

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setBannerConfig: (state, action: {payload: bannerSettings}) => {
            const {BannerColor, BannerText, BannerTextColor, EnableBanner} = action.payload;
            const newConfig = {...state.config};
            if (BannerColor) newConfig.BannerColor = BannerColor;
            if (BannerText) newConfig.BannerText = BannerText;
            if (BannerTextColor) newConfig.BannerTextColor = BannerTextColor;
            if (typeof EnableBanner !== 'undefined') newConfig.EnableBanner = EnableBanner;
            state.config = newConfig;
        },
    },
});

export const {
    setBannerConfig,
} = bannerSlice.actions;

export default bannerSlice.reducer;
