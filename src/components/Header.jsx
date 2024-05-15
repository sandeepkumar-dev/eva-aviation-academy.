/* eslint-disable */
/* Header.jsx */
import React from 'react';
import {useNavigate} from 'react-router-dom';
// Import CSS file for styling

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./images/logo.jpg" alt="Logo" />
        </div>
        <h1>Eva Aviation Academy</h1>
        <input
          type="checkbox"
          id="checkbox_toggle"
          className="checkbox-toggle"
        />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <ul className="nav-links">
            <li>
              <a onClick={() => navigate('/')}>Home</a>
            </li>
            <li>
              <a onClick={() => navigate('/academyhome')}>Academy</a>
            </li>
            <li>
              <a onClick={() => navigate('/import&exporthome')}>
                Import/Export
              </a>
            </li>
            <li>
              <a onClick={() => navigate('/contact')}>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="divider" />
    </div>
  );
};

export default Header;
