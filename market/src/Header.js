import React from 'react'
import { Link, Route } from 'react-router-dom';


function Header() {
    return (
        <div>
              <div className="home-header">
          <nav>
              <h1>African Marketplace</h1>
              <div className="nav-links">
                  <Link to = '/'>Home</Link>
                  <Link to = '/login'>Log In</Link>
                  <Link to = '/listItem'>Add Item</Link>
              </div>
          </nav>
      </div>
        </div>
    )
}

export default Header
