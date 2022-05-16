import React from 'react'
import './Navbar.css'
export const Navbar = () => {
    let mid = ["Service","Projects","About"]
  return (
    <div>
        <nav>
        <div className='logo'>
            <h1>LOGOBAKERY</h1>
        </div>
        <div className='mid'>
            {mid.map((e)=> <p>{e}</p>)}
        </div>
        <div className='button'>
            <button>
                Contact 
            </button>
        </div>
        </nav>
    </div>
  )
}
