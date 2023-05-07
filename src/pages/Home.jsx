import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../asset/bg.jpg";
import '../styles/Home.css';

 

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bg})`}}>
      <div className='headerContainer'>
        <h1>Santy's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
        <button >Order Now!</button>
        </Link>
      
      </div>
    </div>
  )
}

export default Home