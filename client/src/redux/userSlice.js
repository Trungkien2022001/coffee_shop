import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username:'',
        isAdmin: 0,
        token:''
    },
    reducers:{
        login:(state, action)=>{
            state.username = action.payload.username
            state.isAdmin = action.payload.isAdmin
            state.token = action.payload.token
        },
        logout:(state, action)=>{
            state.username = null
            state.isAdmin = 0
            state.token = null
        }
    } 
})