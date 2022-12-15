import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoListAsync } from "../../redux/asynkThank/todoThunk"

function Pages() {

    const state = useSelector((state) => state?.todo?.todoList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(todoListAsync())
    }, [])
    return (
       <>
       <div className="container">
       <tbody>
                <tr>
                    <th>User Id</th>
                 
                    <th>Title</th>
               
                </tr>
                {state?.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>  
                        <td>{item.title}</td>
                    
                    </tr>
                ))}
            </tbody>
       </div>
       </>
    )
}
export default Pages
