import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[]
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,{payload}) => {
            if(state.task.length === 0 ){
                state.task.push({id: 1, ...payload})
            }else{
                let lastElement = state.task.at(-1)
                state.task.push({id:lastElement.id + 1, ...payload})
            }
        },
        removeTask:(state,action) =>{
            state.task.pop(action.payload)
        }
    }
})

export const {addTask,removeTask} = taskSlice.actions;
export default taskSlice.reducer;