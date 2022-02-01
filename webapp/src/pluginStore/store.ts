import {configureStore} from '@reduxjs/toolkit';

import bannerSlice from '@/components/banner/bannerReduxSlice';
import footerSlice from '@/components/footer/footerReduxSlice';

const store = configureStore({
    reducer: {
        banner: bannerSlice,
        footer: footerSlice,
    },
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
