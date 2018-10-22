import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  border: 'black',
  textDecoration: 'none',
  color: 'white'
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const NavBar = () => {
  return(
    <div id="nav-bar">
    <h1 id="snitch" style={{textAlign:"left"}}>Snitch</h1>
    <div style={{textAlign:"right"}}>
            <NavLink to='/' exact style={link} activeStyle={{
      background: 'black'
    }}>Home</NavLink>
            <NavLink to='/login' exact style={link} activeStyle={{
      background: 'black'
    }}>Login</NavLink>
            <NavLink to='/userdetail' exact style={link} activeStyle={{
      background: 'black'
    }}>UserDetail</NavLink>
    </div>
    </div>

  )

}

export default NavBar
