import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navBar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <p className='home'>Home</p>
        <p className='tv'>Tv Shows</p>
        <p className='movie'>Movies</p>
        <p className='recent'>Recently Added</p>
        <p className='my'>My List</p>

        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      
    </div>
  )
}

export default NavBar
