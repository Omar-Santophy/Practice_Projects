import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'


const Pro=styled.h3`color:#764abc;`

const Home = () => {
  return (
    <div className='Container'>
      <section>
            <Pro>Products</Pro>
            <Products />
      </section>
    </div>
  )
}

export default Home;
