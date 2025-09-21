import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    task:[],
    isLoading:false
};


export const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action) => {
            state.task.push(action.payload);
        },
        deleteTask:(state,action) => {
            state.task = state.task.filter((task,ind) => ind != action.payload);
        }
    }
})

export const { addTask,deleteTask} = taskSlice.actions;


export default taskSlice.reducer;