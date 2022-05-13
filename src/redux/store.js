import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Slice/modalSlice";
export const store = configureStore({
    reducer: {
        modal: modalSlice
    }
})