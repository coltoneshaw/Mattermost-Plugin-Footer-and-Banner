import {createSlice} from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
    config: {
        BannerText: 'test',
        BannerColor: '#579eff',
        BannerTextColor: '#fff',
    },
};

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setConfig: (state, action) => {
            state.config = {...state.config, ...action.payload};
        },
    },
});

export const {
    setConfig,
} = bannerSlice.actions;

export default bannerSlice.reducer;
