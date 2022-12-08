import React from 'react'
import '../index.css';
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/slice/cartSlice';

const Cart = () => {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.cart)


  const handleRemove=(id)=>{
    // console.log(id)
    dispatch(remove(id))
  }

   
  return (
    <div>
       <h3>Cart</h3>
       <div className='cartWapper'>
        {
          products.map(products=>(
            <div className='cartCard'>
              <img src={products.image}/>
              <h5>{products.title}</h5>
              <h5>{products.price}</h5>
              <button className='btn' onClick={()=>handleRemove(products.id)}> Remove</button>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Cart
