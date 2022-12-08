import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoListAsync } from "./redux/asyncThunk/todoThunk"
import './page.css'
function Page({setValue}) {
    const state = useSelector((state) => state?.todo?.todoList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(todoListAsync())
    }, [])
    return (
        <>
            <div className="container">

                <h1>Welcome</h1>
                <div className="tablebox">
                <tbody className="center">
                    <tr>
                        <th>User Id</th>

                        <th>Title</th>

                    </tr>
                    {state?.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>

                        </tr>
                    ))}
                </tbody>
              
                </div>
                <button onClick={()=>setValue(false)}>log out</button>
            </div>
        </>
    )
}
export default Page