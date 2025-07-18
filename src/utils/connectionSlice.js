import { createSlice } from "@reduxjs/toolkit";

const connectionSlice= createSlice({
    name:'connection', 
    initialState:null, 
    reducers:{
        addConnections:(state, action)=>{
            console.log("xxxxxxxxxxxxxx")
            return action.payload
        },
        removeConnections:(state, action)=>{
            return null
        }
    }
})

export const {addConnections, removeConnections}= connectionSlice.actions
export default connectionSlice.reducer