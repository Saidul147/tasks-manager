import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
              'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            deadline: '2023-08-28',
            assign: 'Mir Hussain',
            priority: 'high',
          },
    ],
    filteredUser:[]
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,{payload}) => {
            if(state.task.length === 0 ){
                state.task.push({id: 1,status:"pending", ...payload})
            }else{
                let lastElement = state.task.at(-1)
                state.task.push({id:lastElement.id + 1,status:"pending", ...payload})
            }
        },
        removeTask:(state,{payload}) =>{
            // let filtered = state.task.filter((tsk) => tsk.id !== payload)
            // state.task = filtered //you can directly filterd but it wont affect to other
         state.task = state.task.filter((tsk) => tsk.id !== payload)
        },
        updateStatus:(state,{payload}) => {
          let findItm =  state.task.find((tsk) => tsk.id === payload.id)
          if(findItm){
              findItm.status = payload.status
          }
        },
        setFilteredUser:(state,{payload}) => {
            state.filteredUser = state.task.filter((item) => item.assign === payload)
        }
    }
})

export const {addTask,removeTask,updateStatus,setFilteredUser} = taskSlice.actions;
export default taskSlice.reducer;