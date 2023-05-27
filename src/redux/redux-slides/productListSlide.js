import { createSlice } from '@reduxjs/toolkit'

const listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];

const initialState = {
    listProduct: [],
    productDetail: {},
    favoriteProductList:[],
    cartList: listCart,
}

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        setListProduct: (state, action) => {
            state.listProduct = action.payload;
        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload
        },
        setFavoriteProductList:(state,action)=>{
            state.favoriteProductList.push(action.payload)
        },
        removeFavoriteProduct:(state,action)=>{
            const indexById = state.favoriteProductList.findIndex((prod)=>{
                return prod.id === action.payload
            });
            state.favoriteProductList.splice(indexById,1)
        },
        setToCart: (state, action) => {
            const indexById = state.cartList.findIndex((product)=> product.id === action.payload.id);
            if(indexById === -1){
                state.cartList.push(action.payload)
            } else {
                state.cartList[indexById] = action.payload
            }
        },
        changeCount: (state,action) => {
            const indexById = state.cartList.findIndex((product)=> product.id === action.payload.id);
            state.cartList[indexById].count = state.cartList[indexById].count + action.payload.value;
        },
        removeProdCart: (state, action) => {
            const indexById = state.cartList.findIndex((product)=> product.id === action.payload);
            state.cartList.splice(indexById,1)
        },
        
    }
});

export const { 
    setListProduct, 
    setProductDetail, 
    setFavoriteProductList, 
    removeFavoriteProduct ,
    setToCart,
    changeCount,
    removeProdCart,

} = ProductSlice.actions

export default ProductSlice.reducer

