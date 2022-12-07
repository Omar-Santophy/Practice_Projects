import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPost}  from '../redux/asyncThunk/authAsyncThunk'
import Table from 'react-bootstrap/Table';


const PostData = () => {
    const dispatch=useDispatch()
    const Post=useSelector(state=> state.lorem.data)
    console.log("This is Post Data",Post)

    useEffect(() => {
    dispatch(getPost())
    }, [])
  return (
    <div className='container'>
    <h1 className='text-center mt-3 text-success'>Fetching Api Post Data Using Redux Toolkit</h1>
 
     <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
            </tr>
        </thead>

        <tbody>
            {Post.map((data,index) =>
                <tr key={index}>
                    <td>{data.userId}</td>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                </tr>
            )}
        </tbody>

    </Table>  

</div>
  )
}

export default PostData
