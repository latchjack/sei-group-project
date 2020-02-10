import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar is-warning">
        <div className="container">
          < div className="navbar-brand">
            <Link className="navbar-item" to="/">Home </Link>
            <Link className="navbar-item" to="/trails">Trail Index</Link>
            <Link className="navbar-item" to="/">FAQ</Link>
            <Link className="navbar-item" to="/">Register</Link>
            <Link className="navbar-item" to="/">Login</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar