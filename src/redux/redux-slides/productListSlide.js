import { createSlice } from '@reduxjs/toolkit'

const listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];
const historyOrderList = localStorage.getItem('historyArr') ? JSON.parse(localStorage.getItem('historyArr')) : [];

const initialState = {
    listProduct: [],
    productDetail: {},
    favoriteProductList:[],
    cartList: listCart,
    orderHistoryList: historyOrderList,
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
        setListCartAfterSubmit:(state, action)=>{
            state.cartList = action.payload
        },
        setHistoryOrder:(state,action)=>{
            state.orderHistoryList.push(action.payload)
        },
        setToCart: (state, action) => {
            console.log(action.payload)
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
    setListCartAfterSubmit,
    setHistoryOrder,

} = ProductSlice.actions

export default ProductSlice.reducer

