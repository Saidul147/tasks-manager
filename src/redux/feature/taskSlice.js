import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[]
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        incriment:(state,action) => {
            state.task.push(action.payload)
        },
        decrement:(state,action) =>{
            state.task.pop(action.payload)
        }
    }
})

export const {incriment,decrement} = taskSlice.actions;
export default taskSlice.reducer;