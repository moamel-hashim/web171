import {useState} from "react";
import { Link } from "react-router-dom";

function Nav () {
  return (
    <nav>
      <h1>Navbar</h1>
      <div>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/link'>Link</Link></li>
          <li>Dropdown</li>
          <ul>
            <li>action</li>
            <li>another action</li>
            <li>more actions</li>
          </ul>
          <li>Disabled</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
