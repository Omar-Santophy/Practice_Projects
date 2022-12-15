import React from 'react'
import '../index.css';
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/slice/cartSlice';
import styled from 'styled-components';

const Title=styled.h1`
  color: #6642f5;
  text-align: center;
`


const Cart = () => {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.cart)


  const handleRemove=(id)=>{
    // console.log(id)
    dispatch(remove(id))
  }

   
  return (
    <div>
      <Title>Cart</Title>
       <div className='cartWapper'>
        {
          products.map(products=>(
            <div className='cartCard'>
              <img src={products.image} height="60px" alt='products'/>
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
