import { createSlice } from '@reduxjs/toolkit'
// import getLorem from '../asyncThunk/authAsyncThunk'
import {getLorem} from '../asyncThunk/authAsyncThunk'


export const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false
  },
  reducers: {},


  extraReducers:{
    [getLorem.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getLorem.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getLorem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  },

})

// Action creators are generated for each case reducer function
export const { } = loremSlice.actions

export default loremSlice