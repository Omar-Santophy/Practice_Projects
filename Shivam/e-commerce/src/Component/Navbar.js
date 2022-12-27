 import React,{useContext}from 'react'
import { BsCartPlusFill } from 'react-icons/bs';
import{Link} from "react-router-dom";
import {CartContext} from '../Global/CartContext';

const Navbar = () => {
  const {qty} = useContext(CartContext);
  return (
    <nav>
        <ul className="left">
            <li> <Link to = "/">Shopping Cart</Link></li>
        </ul>
        <ul className="right">
        <li> <Link to = "cart">
            <span className='shoppingCart'>

            <i><BsCartPlusFill /></i>
            <span className='cardCount'>{qty}</span></span>
            </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar