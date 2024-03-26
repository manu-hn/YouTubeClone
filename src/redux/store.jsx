import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slices/appSlice.jsx";
import searchReducer from "./slices/searchSlice.jsx";
import chatReducer from "./slices/chatSlice.jsx";
const appStore = configureStore({
    reducer: {
        app: sideBarReducer,
        search: searchReducer,
        chat: chatReducer,
    }
});

export default appStore;