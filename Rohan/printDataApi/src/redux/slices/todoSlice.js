import { createSlice } from "@reduxjs/toolkit";
import { todoListAsync } from "../asynkThank/todoThunk";


const initialState = {
    status: "",
    todoList: []
}

export const TodoSlice = createSlice({
    name: "todoList",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(todoListAsync.pending, (state, action) => {
            state.status = "Pending"
        });
        builder.addCase(todoListAsync.fulfilled, (state, action) => {
            state.status = "fullfield"
            state.todoList = action.payload.data

        });
        builder.addCase(todoListAsync.rejected, (state, action) => {
            debugger
            state.status = "Reject"
        });
    },
});

export const todoState = (state) => state.todoState;

export default TodoSlice.reducer;