import { configureStore } from "@reduxjs/toolkit";

import cartreducer from '../redux/cartslice';

export const store = configureStore({
    reducer:{
        cart:cartreducer
    }
})