import {createSlice} from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
    config: {
        FooterText: 'test',
        FooterColor: '#579eff',
        FooterTextColor: '#fff',
        EnableFooter: true,
    },
};

type footerSettings = {
    FooterText: string | undefined,
    FooterColor: string | undefined,
    FooterTextColor: string | undefined,
    EnableFooter: boolean | undefined
}

export const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setFooterConfig: (state, action: {payload: footerSettings}) => {
            const {FooterColor, FooterText, FooterTextColor, EnableFooter} = action.payload;
            const newConfig = {...state.config};
            if (FooterColor) newConfig.FooterColor = FooterColor;
            if (FooterText) newConfig.FooterText = FooterText;
            if (FooterTextColor) newConfig.FooterTextColor = FooterTextColor;
            if (typeof EnableFooter !== 'undefined') newConfig.EnableFooter = EnableFooter;
            state.config = newConfig;
        },
    },
});

export const {
    setFooterConfig,
} = footerSlice.actions;

export default footerSlice.reducer;
