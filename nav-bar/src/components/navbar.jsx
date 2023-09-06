import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="background">
      <div className="flex w-100">
        <div className="w-75">
          <h1>Navbar</h1>
        </div>
        <div>
          <ul className="flex gap">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/link'>Link</Link></li>
            <li>Dropdown</li>
            <ul className="hidden">
              <li>action</li>
              <li>another action</li>
              <li>more actions</li>
            </ul>
            <li>Disabled</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
