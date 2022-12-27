import React,{createContext,useState} from 'react'
import Belt from "../assest/Belt.jpg";
import Dslr from "../assest/Dslr.jpg";
import Headphone from "../assest/Headphone.jpg"
import mobile from "../assest/mobile.jpg";
import perfume from "../assest/perfume.jpg";
import shoes from "../assest/shoes.jpg";
import Wallet from "../assest/Wallet.jpg";
import watch from "../assest/watch.jpg";
export const ProductContext = createContext(); 

 const ProductContextProvider = (props) => {
    const [products,setproduct]=useState([
        {id :1,name:"Belt",price :3000,image:Belt,status:"new"},
        {id :2,name:"Dslr",price :9000,image:Dslr,status:"hot"},
        {id :3,name:"Headphone",price :2000,image:Headphone,status:"new"},
        {id :4,name:"mobile",price :8000,image:mobile,status:"hot"},
        {id :5,name:"perfume",price :1000,image:perfume,status:"new"},
        {id :6,name:"shoes",price :4000,image:shoes,status:"hot"},
        {id :7,name:"wallet",price :5000,image:Wallet,status:"new"},
        {id :8,name:"watch",price :6000,image:watch,status:"hot"},
    ]);
    
  return (
    <ProductContext.Provider value={{Product : [...products]}}>
        {props.children}
    </ProductContext.Provider>
    )
}

export default ProductContextProvider; 