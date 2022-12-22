import React, { useState } from 'react'
import List from "./List"
import {Data} from "./Data"
const Newproject = () => {
    const [animal,setAnimal] = useState(Data);
  return (
    <main>
        <section className='container'>
            <h3>{animal.length} Animals Birthday Today</h3>
            <List animal = {animal}/>
            <button onClick={()=> setAnimal([])}> Clear all</button>
        </section>
        

        </main>
  )
}

export default Newproject