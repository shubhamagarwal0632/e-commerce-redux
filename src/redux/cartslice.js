import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalprice:0
    },
    
    reducers:{

        
        addtocart(state,action){
            const newitem = action.payload;
            state.items.push(newitem);
            state.totalprice += newitem.price
        },
        clearitem(state){
            state.items=[];
            state.totalprice = 0
        },
        releteditem(state,action){
            
            const newitem = action.payload;
            newitem.filter((item)=>item.category == action.payload)
            // state.totalprice += newitem.price
        },
        
    },


})
export const selectcartitem= (state)=>state.cart.items;
export const selectcarttotaprice = (state)=>state.cart.totalprice;
export const {addtocart,clearitem,releteditem} = cartslice.actions;
export default cartslice.reducer


// jo niche comment h usse local storage ka use hota h
/*
import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage
const initialState = JSON.parse(localStorage.getItem("cartState")) || {
  items: [],
  totalprice: 0
};

const cartslice = createSlice({
  name: 'cart',
  initialState: initialState,

  reducers: {
    addtocart(state, action) {
      const newitem = action.payload;
      state.items.push(newitem);
      state.totalprice += newitem.price;
      // Persist state to local storage
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    clearitem(state) {
      state.items = [];
      state.totalprice = 0;
      // Persist state to local storage
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    releteditem(state, action) {
      const category = action.payload;
      state.items = state.items.filter(item => item.category === category);
      state.totalprice = state.items.reduce((acc, item) => acc + item.price, 0);
      // Persist state to local storage
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const selectcartitem = (state) => state.cart.items;
export const selectcarttotaprice = (state) => state.cart.totalprice;
export const { addtocart, clearitem, releteditem } = cartslice.actions;
export default cartslice.reducer;
*/ 