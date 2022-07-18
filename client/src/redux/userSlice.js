import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username:null,
        isAdmin: 0,
        token:null,
        name:null
    },
    reducers:{
        login:(state, action)=>{
            state.username = action.payload.username
            state.isAdmin = action.payload.isAdmin
            state.token = action.payload.token
            state.name = action.payload.name
        },
        logout:(state, action)=>{
            state.username = null
            state.isAdmin = 0
            state.token = null
            state.name =null
        }
    } 
})