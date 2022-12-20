import React, { useState } from 'react'

const NextCrud = () => {


  const lists = [
    {
      id: 1,
      name: "hp",
      price: "100"
    },
    {
      id: 2,
      name: "sp",
      price: "1000"
    },
  ]

  const [list, setList] = useState(lists);
  return (
    <div className='Header'>
      <h1>Crud operation 2</h1>
      <div className='crud'>
        <div>
        <Addlist setList={setList}/>
        <table>
          {
            list.map((current) =>
              <tr>
                <td>{current.name}</td>
                <td>{current.price}</td>
                <td>
                  <button className='edit'>Edit</button>
                  <button className='delete'>Delete</button>

                </td>
              </tr>
            )
          }
        </table>
        </div>
      </div>
    </div>
  )
}
function Addlist({setList}){
  function handleSubmit (event){
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist ={
       id:3,
       name,
       price
    }
    setList((prevList)=>{
return prevList.concat(newlist)
    })
  }
  return(
    <form className='addform' onSubmit={handleSubmit}>
      <input type = "text" name= "name" placeholder='enter name'/>
      <input type = "text" name= "price" placeholder='enter price'/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default NextCrud;