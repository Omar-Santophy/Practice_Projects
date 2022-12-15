import { createSlice } from '@reduxjs/toolkit'
import getPost from '../asyncThunk/authAsyncThunk'


export const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false
  },
  reducers: {},


  extraReducers:{
    [getPost.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  },

})

// Action creators are generated for each case reducer function
export const { } = postSlice.actions

export default postSlice