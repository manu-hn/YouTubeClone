import { createSlice } from "@reduxjs/toolkit";



const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= import.meta.env.VITE_LIMIT_LIVE_CHAT) {
                state.messages.splice(0, 10);
            }
            state.messages.push(action.payload);
        },

        deleteMessage: (state, action) => {
            state.messages.splice(action.payload, 1);
        }
    }
});


export const { addMessage, clearPreviousMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;