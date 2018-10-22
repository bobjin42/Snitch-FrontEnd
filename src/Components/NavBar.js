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
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

// const UserPage = () => (
//
// )


const NavBar = () => {
  return(
    <div id="nav-bar">
      <h1 id="snitch">Snitch</h1>
              <NavLink to='/' exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>
              <NavLink to='/login' exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Login</NavLink>
              <NavLink to='/userdeatil' exact style={link} activeStyle={{
        background: 'darkblue'
      }}>UserDetail</NavLink>
    </div>

  )

}

export default NavBar

// ReactDOM.render((
//   <Router>
//     <React.Fragment>
//     <Navbar />
//     <Route exact path="/" component={App} />
//     <Route exact path="/login" component={Login} />
//     </React.Fragment>
//   </Router>),
//   document.getElementById('root')
// );
