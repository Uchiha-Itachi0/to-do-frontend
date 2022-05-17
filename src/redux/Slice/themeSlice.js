import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: "darkTheme"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        CHANGE_THEME: (state) => {
            if(state.theme === "darkTheme"){
                state.theme = "lightTheme"
            }
            else{
                state.theme = "darkTheme"
            }
        }
    }
});

export const { CHANGE_THEME } = themeSlice.actions;
export default themeSlice.reducer;
