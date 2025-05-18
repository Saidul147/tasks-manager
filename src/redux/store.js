import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./feature/taskSlice"
import userSlice from "./feature/userSlice"

const store = configureStore({
    reducer:{
        taskStore:tasksSlice,
        userStore:userSlice,
    }
})

export default store;