import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../reduxConstant/reduxConstant";
import { TodoListService } from "../services/todoService";

export const todoListAsync = createAsyncThunk(
    ASYNC_ROUTES.TODO_LIST,
    async (payload, { rejectWithValue }) => {
      try {
        const response = await TodoListService(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );