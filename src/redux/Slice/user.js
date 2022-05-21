import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    name: "",
    email: "",
    token: "",
    id: "",
    catogaries: "",
    task: ["GOOD LUCK"]
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
            state.catogaries = actions.payload.catogaries;
            state.task = actions.payload.task;
        }
    }
});

export const { USER_INFO } = userSlice.actions;
export default userSlice.reducer;

