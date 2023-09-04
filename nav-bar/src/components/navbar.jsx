import {useState} from "react";
import { Link } from "react-router-dom";

function Nav () {
  return (
    <nav>
      <h1>Navbar</h1>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/link'>Link</Link></li>
          <li><Link>Dropdown</Link></li>
          <li><Link>Disabled</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
