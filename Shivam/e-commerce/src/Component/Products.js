import React, { useContext } from 'react'
import { ProductContext } from "../Global/ProductContext";
import {CartContext} from "../Global/CartContext";
import Banner from './Banner';
const Products = () => {
    const { Product } = useContext(ProductContext)
    const {dispatch}= useContext (CartContext);
    

    return (
        <div className='container'>
                <Banner/>
            <div className='products'>
                {Product?.map((Product) => (
                    <div className='product' key={Product.id}>

                        <div className='product-image'>
                            <img src={Product.image} alt="not found" />
                        </div>
                        <div className='product-details'>
                            <div className='product-name'>
                                {Product.name}
                            </div>
                            <div className='product-price'> 
                                ${Product.price}.00
                            </div>
                        </div>
                        <div className='add-to-cart' onClick={() => dispatch({type:
                            "ADD_TO_CART",id: Product.id, Product})}> Add to cart</div>
                        {Product.status === "hot" ? <div className='hot'>Hot</div> : ""}
                        {Product.status === "new" ? <div className='new'>New</div> : ""}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products