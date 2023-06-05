import { createSlice } from '@reduxjs/toolkit'

const listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const historyOrderList = localStorage.getItem('historyArr') ? JSON.parse(localStorage.getItem('historyArr')) : [];

const initialState = {
    listProduct: [],
    productDetail: {},
    favoriteProductList: [],
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
        setFavoriteProductList: (state, action) => {
            state.favoriteProductList.push(action.payload)
        },
        removeFavoriteProduct: (state, action) => {
            const indexById = state.favoriteProductList.findIndex((prod) => {
                return prod.id === action.payload
            });
            state.favoriteProductList.splice(indexById, 1)
        },
        setHistoryOrder: (state, action) => {
            state.orderHistoryList.push(action.payload)

            localStorage.setItem('historyArr',
                JSON.stringify([...state.orderHistoryList, { list: action.payload.list, date: action.payload.date }]))
        },
        setToCart: (state, action) => {
            const indexById = state.cartList.findIndex((product) => product.id === action.payload.id);
            if (indexById === -1) {
                state.cartList.push(action.payload)
            } else {
                state.cartList[indexById] = action.payload
            }
        },
        changeCount: (state, action) => {
            const indexById = state.cartList.findIndex((product) => product.id === action.payload.id);
            state.cartList[indexById].count = action.payload.value;
        },
        removeProdCart: (state, action) => {
            const indexById = state.cartList.findIndex((product) => product.id === action.payload);
            state.cartList.splice(indexById, 1)

            localStorage.setItem('cart', JSON.stringify(state.cartList))
        },
    }
});

export const {
    setListProduct,
    setProductDetail,
    setFavoriteProductList,
    removeFavoriteProduct,
    setToCart,
    changeCount,
    removeProdCart,
    setHistoryOrder,

} = ProductSlice.actions

export default ProductSlice.reducer

