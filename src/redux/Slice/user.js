import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    name: "",
    email: "",
    token: "",
    id: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        USER_INFO: (state, actions) => {
            state.name = actions.payload.name;
            state.email = actions.payload.email;
            state.token = actions.payload.token;
            state.id = actions.payload.id;
        }
    }
});

export const { USER_INFO } = userSlice.actions;
export default userSlice.reducer;

