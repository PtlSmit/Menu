import React, { useState } from 'react'
<<<<<<< HEAD
import Categories from './Categories'
import Menu from './Menu'
import items from './data'
const App = () => {
  const [menuItems,setMenuItems]=useState(items)
  const [categories, setCategories] = useState([]);
  return (
   <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories/>
      <Menu items={menuItems}/>
    </section>
   </main>
=======
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const App = () => {
  const[menuItems,setMenuItems]=useState(items)
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className='menu section'>

      </section>
      </main>
>>>>>>> Menu
  )
}

export default App
