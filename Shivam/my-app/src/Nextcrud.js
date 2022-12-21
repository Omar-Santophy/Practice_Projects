import React, { useRef, useState } from 'react'

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
  const [updateState, setupdateState] = useState(-1);
  return (
    <div className='Header'>
      <h1>Crud operation 2</h1>
      <div className='crud'>
        <div>
          <Addlist setList={setList} />
          <form onSubmit={handleSubmit}>
            <table>
              {
                list.map((current) => (
                  updateState === current.id ? <EditList current={current}
                    lists={lists} setList={setList} /> :
                    <tr>
                      <td>{current.name}</td>
                      <td>{current.price}</td>
                      <td>
                        <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                        <button className='delete'
                         type= "button" onClick={()=>handleDelete(current.id)}>Delete</button>

                      </td>
                    </tr>
                ))
              }
            </table>
          </form>
        </div>
      </div>
    </div>
  )
  function handleEdit(id) {
    
      setupdateState(id)
    
  }
  function handleDelete(id){
    const newlist = lists.filter((li)=> li.id !==id)
    setList(newlist)
  }   
  function handleSubmit(event) {
    event.preventDefault()

    const name = event.target.elements.name.value
    const price = event.target.elements.price.value
    const newlist = lists.map((li) => (
      li.id === updateState ? { ...li, name:name,price:price} : li
    ))
    setList(newlist)
    setupdateState(-1)
  } 
}    
function EditList({ current, lists, setList }) {
  function handInputname(event) {
    
    const value = event.target.value;
    const newlist = lists.map((li) => (
      li.id === current.id ? { ...li, name: value  } : li
    ))
    setList(newlist)
  }
  function handInputprice(event) {
    
    const value = event.target.value;
    const newlist = lists.map((li) => (
      li.id === current.id ? { ...li, price: value } : li
    ))
    setList(newlist)
  }
  return (
    <tr>
      <td> <input type="text" onChange={handInputname} name="name" value={current.name} /></td>
      <td> <input type="text"  onChange={handInputprice} name="price" value={current.price} /></td>
      <td><button type='submit'> update</button></td>
    </tr>
  )
}
function Addlist({ setList }) {
  const nameRef = useRef()
  const priceRef = useRef()
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist = {
      id: 3,
      name,
      price
    }
    setList((prevList) => {
      return prevList.concat(newlist)
    })
    nameRef.current.value = ""
    priceRef.current.value = ""
  }
  return (
    <form className='addform' onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder='enter name' ref={nameRef} />
      <input type="text" name="price" placeholder='enter price' ref={priceRef} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default NextCrud;