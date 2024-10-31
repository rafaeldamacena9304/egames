import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";

import { cartSlice } from "./reducers/cart";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>