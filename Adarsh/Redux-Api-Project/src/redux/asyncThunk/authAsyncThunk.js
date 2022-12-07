import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios';



export const getLorem = createAsyncThunk("lorem/getData", 
    async(args, {rejectedWithValue}) => {

    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
         return data
    } catch (error) {
        rejectedWithValue(error.response.data);
    }
})
 
export const getPost = createAsyncThunk("post/getData",async(args,{rejectedWithValue})=>{

    try{
        const {data}= await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
        
    }catch(error){
        rejectedWithValue(error.response.post)
    }
})

