import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false
}

const modalSlice = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        }
    }
})

export const { SHOW_MODAL } = modalSlice.actions;
export default modalSlice.reducer