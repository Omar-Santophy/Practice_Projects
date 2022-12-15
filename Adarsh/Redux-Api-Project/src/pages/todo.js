import React from 'react'
// import getLorem from '../redux/asyncThunk/authAsyncThunk'
import {getLorem} from '../redux/asyncThunk/authAsyncThunk'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

const Todo = () => {
    const dispatch = useDispatch()
    const lorem = useSelector(state => state.lorem.data)
    console.log("this is todo Data:",lorem)

    useEffect(() => {
        dispatch(getLorem())
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center mt-3 text-success'>Fetching Api Todo Data Using Redux Toolkit</h1>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>

                <tbody>
                    {lorem.map((data,index) =>
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

export default Todo;

