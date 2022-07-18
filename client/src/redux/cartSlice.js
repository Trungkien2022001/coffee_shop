import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        total_cost: 0,
        discount: 0,
        productList: [],
    },
    reducers:{
        addProduct:(state, action)=>{
            state.total_cost += action.payload.product.price*action.payload.quantity
            state.discount += parseInt(action.payload.product.price*action.payload.product.discount /100)*action.payload.quantity
            const index = state.productList.findIndex(e =>e.product.id === action.payload.product.id)
            if(index !== -1) state.productList[index].quantity += action.payload.quantity
            else{
                state.productList.push(action.payload)
            }
        },
        subOrder:(state, action)=>{
            state.productList[action.payload].quantity -=1
            state.total_cost -= state.productList[action.payload].product.price
            state.discount -= state.productList[action.payload].product.price*state.productList[action.payload].product.discount/100
            if( state.productList[action.payload].quantity === 0){
                state.productList.splice(action.payload, 1)
            }
        },
        addOrder:(state, action)=>{
            state.total_cost += state.productList[action.payload].product.price
            state.discount += state.productList[action.payload].product.price*state.productList[action.payload].product.discount/100
            state.productList[action.payload].quantity +=1
        },
        deleteOrder:(state, action)=>{
            state.total_cost -= state.productList[action.payload].product.price
            state.discount -= state.productList[action.payload].product.price*state.productList[action.payload].product.discount/100
            state.productList.splice(action.payload, 1)
        },
        successOrder:(state, action)=>{
            state.total_cost = 0
            state.discount = 0
            state.productList=[]
        }
    } 
})