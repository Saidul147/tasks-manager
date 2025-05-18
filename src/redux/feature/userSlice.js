import { createSlice } from "@reduxjs/toolkit";
import reducer from "./taskSlice";


const initialState = {
    name:"Rakib"
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        add:(state,{payload}) => {
            state.name = payload
        }
    }
})

export const {add} = userSlice.actions
export default userSlice.reducer