import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:'feed', 
    initialState:null, 
    reducers:{
        addFeed:(state, action)=>{
            console.log("ppppppppppp")
            return action.payload
        }, 
        removeFeed:(state, action)=>{
            return null 
        }
    }
})

export const {addFeed, removeFeed} = feedSlice.actions
export default feedSlice.reducer