import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/gloab.svg'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className="side-nav">
        <NavLink to ='/' className='side-nav-links' activeclassname ='active'>
          <p>Home</p>
        </NavLink>
        
        <div className="side-nav-div">
          <div><p>Public</p></div>
          <NavLink to='/Question' className='side-nav-links' activeclassname ='active'>
            <img src={Globe} alt='Globe'width='18'/>
            <p style={{paddingLeft: "10px"}}>Question</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeclassname ='active' state={{paddingLeft:'40px'}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeclassname ='active' state={{paddingLeft:'40px'}}>
            <p>Users</p>
          </NavLink>
        </div>
      </nav>

    </div>
  )
}

export default LeftSidebar