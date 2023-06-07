import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
//utils
import { getLocal } from '/src/utils/localStorage/index.js';
//constant
import { ACCESS_TOKEN } from '/src/const/index.js';
import { axiosWithAuth } from '../../services/services.config';

//------------------------------------------------------
const initialState = {
    profileData:{},
    favoriteList:[],
}

export const profileThunkAction = createAsyncThunk(
    'userReduxSlides/profileThunkAction',
    async () =>{
        const resp = await axiosWithAuth.post("/Users/getProfile");
        return resp;
    }
)
export const profileFavoriteThunkAction = createAsyncThunk(
    'userReduxSlides/profileFavoriteThunkAction',
    async ()=>{
        const resp = await axiosWithAuth.get("/Users/getproductfavorite");
        return resp;
    }
)
const userReduxSlides = createSlice({
  name: 'userReduxSlides',
  initialState,
  reducers: {
    logoutUser:(state,action)=>{
        state.profileData = {}
    }
  },

  extraReducers:(builder)=>{
    builder.addCase(profileThunkAction.fulfilled, 
        (state,action)=>{
            state.profileData = action.payload.data.content;
        }
        ),
    builder.addCase(profileFavoriteThunkAction.fulfilled,
        (state,action) =>{
            state.favoriteList = action.payload.data.content.productsFavorite;
        })
  }
});

export const {logoutUser} = userReduxSlides.actions

export default userReduxSlides.reducer