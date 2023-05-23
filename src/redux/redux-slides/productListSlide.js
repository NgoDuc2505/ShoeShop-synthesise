import { createSlice } from "@reduxjs/toolkit";
import { getListShoe } from './../../services/getListShoe'

const initialState = {
    listItem:[
        {
            name:'adidas',
            price: 3000,
            image:'https://shop.cyberlearn.vn/images/adidas-prophere.png',
        }
    ],
};

export const listProductSlice = createSlice({
    name: 'listProd',
    initialState,
    reducers: {
        getAPIList: (state,action)=>{
            state.listItem = [...action.payload]
        }
    },
});
console.log(listProductSlice)
export default listProductSlice.reducer;

export const { getAPIList } = listProductSlice.actions;