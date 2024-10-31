import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../pages/Home";

interface CartState{
    items: Game[],
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Game>) => {
            state.items.push(action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close } = cartSlice.actions