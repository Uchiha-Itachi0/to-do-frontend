import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Slice/modalSlice";
import themeSlice from "./Slice/themeSlice";
import userSlice from './Slice/user';
export const store = configureStore({
    reducer: {
        modal: modalSlice,
        theme: themeSlice,
        user: userSlice
    }
})