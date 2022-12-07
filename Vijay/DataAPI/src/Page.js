import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoListAsync } from "./redux/asyncThunk/todoThunk"
import './page.css'
function Page() {

    const state = useSelector((state) => state?.todo?.todoList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(todoListAsync())
    }, [])
    return (
        <>
            <tbody>
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
        </>
    )
}
export default Page