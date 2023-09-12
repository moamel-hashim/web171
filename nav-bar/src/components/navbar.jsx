import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Nav() {
  const [isShown,setIsShown] = useState(false);
  console.log(setIsShown)
  return (
    <nav className="background">
      <div className="flex w-100 justify-content-evenly">
        <div className="w-50">
          <h1>Navbar</h1>
        </div>
        <div className="w-50">
          <ul className="flex justify-content-center">
            <div className="padding-1rem">
              <li><Link to='/home' className="link">Home</Link></li>
            </div>
            <div className="padding-1rem">
              <li><Link to='/link' className="link">Link</Link></li>
            </div>
            <div className="padding-1rem flex gap" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <li>Dropdown
              <div className={isShown === true ? 'nested-list' : 'hidden'}>
                <ul>
                  <li>action</li>
                  <li>another action</li>
                  <li>more actions</li>
                </ul>
              </div>
              </li>
              <div>
                <FontAwesomeIcon icon={faChevronRight} className={isShown === true ? 'font-awesome' : ''}/>
              </div>
            </div>
            <div className="padding-1rem">
              <li>Disabled</li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
