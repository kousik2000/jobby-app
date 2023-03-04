import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      alt="website logo"
      className="logo"
    />

    <div className="header-list-container">
      <ul>
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link to="/jobs" className="nav-link">
          <li>Jobs</li>
        </Link>
      </ul>
    </div>

    <button type="button" className="logout-button">
      Logout
    </button>
  </nav>
)

export default Header
