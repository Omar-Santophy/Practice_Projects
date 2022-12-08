import React, { useState, useEffect } from 'react'
import '../index.css'
import {useDispatch} from 'react-redux';
import {add} from '../redux/slice/cartSlice'

const Products = () => {
    const dispatch  = useDispatch()
    const [Products, setProducts] = useState([])
   

    useEffect(() => {

        const fetProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        fetProducts();
    }, [])

    const handleAdd = (product) =>{
    console.log(product)
    dispatch(add(product))
        //here we are sending payload(that is product)
    }


    return (
        <div  className='productsWrapper'>
            {
                Products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image}/>
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button onClick={()=> handleAdd(product)} className='btn'>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Products
