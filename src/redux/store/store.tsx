import { configureStore } from "@reduxjs/toolkit";
import langToggleReducer from "../langToggle";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        lang: langToggleReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV === "development",
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
