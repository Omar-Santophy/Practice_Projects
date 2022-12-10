import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../index.css'
import styled from 'styled-components';
import { BsFillCartCheckFill } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Shoping from '../assets/image/Shoping.png'
import { useNavigate } from 'react-router-dom';


const Navbar=styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    align-items: center;
    background-color: #764abc;
    border: 1px solid gray;
    margin: 3px;
    padding: 10px 30px 10px 30px;
    border-radius:4px;
    
`
const Store=styled.p`
  color: #f8f9fa;
  text-align: center;
  font-style: inherit;
  margin-top: 5px;
  font-style: inherit;
  font-weight: bolder;
`
 
const Header = () => {
    const item=useSelector((state)=>state.cart)
    const goto =useNavigate();
    let isLogged='true'
   
    return (
        <Navbar>
            <span  className='name' onClick={()=>goto("/")}><img src={Shoping} className="logoImg" alt='logo' onClick={()=>goto("/")}/><span style={{color:'yellow'}}> Phoenix Citadel</span><span style={{color:'red'}}> Mall</span></span>
            <Store>Welcome <span style={{color:'yellow'}}> Phoenix Citadel</span><span style={{color:'red'}}> Mall </span></Store>
            <div>
                <Link className='navLink' to='/home' style={{color:'white'}}> Home</Link>
                <Link className='navLink' to='/' style={{color:'white'}}>LogIn</Link>
                <Link className='navLink' to='/cart'><BsFillCartCheckFill style={{color:'white'}}/><Badge bg="secondary" className='Cart_img' style={{color:'white'}}>{item.length} </Badge></Link>
            </div>
        </Navbar>
    )
}

export default Header;
