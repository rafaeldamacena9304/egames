import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../pages/Home";

interface CartState{
    items: Game[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Game>) => {
            state.items.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions