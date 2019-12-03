import React from 'react';
import {Link} from 'react-router-dom';
function  Nav(){
 return (
  <nav>
      <ul className="nav-list">
          <Link to="/">
              <li className="list-items">
                  Home
              </li>
          </Link>
          <Link to="/about">
              <li className="list-items">
                  About
              </li>
          </Link>
          <Link to="/trips">
              <li className="list-items">
                  Bus Trips
              </li>
          </Link>
      </ul>
  </nav>
  )
}
export default Nav;
