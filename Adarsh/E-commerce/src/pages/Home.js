import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='Container'>
      <h2>Welcome to Redux Toolkit Store</h2>
      <section>
            <h3>Products</h3>
            <Products />
      </section>
    </div>
  )
}

export default Home;
