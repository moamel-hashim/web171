import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav className="background">
      <div className="flex w-100 justify-content-evenly">
        <div className="w-75">
          <h1>Navbar</h1>
        </div>
        <div>
          <ul className="flex gap">
            <li><Link to='/home' className="link">Home</Link></li>
            <li><Link to='/link' className="link">Link</Link></li>
            <li>Dropdown<FontAwesomeIcon icon={faChevronRight}/></li>
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
