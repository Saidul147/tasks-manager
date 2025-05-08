import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./feature/taskSlice"

const store = configureStore({
    reducer:{
        taskStore:tasksSlice,
    }
})

export default store;