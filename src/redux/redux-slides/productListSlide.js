import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listProduct: [],
    productDetail: {},
    favoriteProductList:[],
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
        }
    }
});

export const { 
    setListProduct, 
    setProductDetail, 
    setFavoriteProductList, 
    removeFavoriteProduct 
} = ProductSlice.actions

export default ProductSlice.reducer
