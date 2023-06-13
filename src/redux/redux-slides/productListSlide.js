import { createSlice } from '@reduxjs/toolkit'

const listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const historyOrderList = localStorage.getItem('historyArr') ? JSON.parse(localStorage.getItem('historyArr')) : [];
const favorListArr = localStorage.getItem('favorList') ? JSON.parse(localStorage.getItem('favorList')) : [];

const initialState = {
    listProduct: [],
    productDetail: {},
    cartList: listCart,
    orderHistoryList: historyOrderList,
    favorList: favorListArr
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
        setFavorList: (state, action) => {
            const indexById = state.favorList.findIndex((product) => product.id === action.payload.id);
            if (indexById === -1) {
                state.favorList.push(action.payload)
            } else {
                state.favorList.splice(indexById, 1)
            }
            localStorage.setItem('favorList', JSON.stringify(state.favorList))
        },
    }
});

export const {
    setListProduct,
    setProductDetail,
    setFavorList,
    setToCart,
    changeCount,
    removeProdCart,
    setHistoryOrder,

} = ProductSlice.actions

export default ProductSlice.reducer

