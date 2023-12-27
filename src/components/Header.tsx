import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);

  const profileDropdownHandler = () =>
    showProfileDropdown
      ? setShowProfileDropdown(false)
      : setShowProfileDropdown(true);

  return (
    <nav>
      <div className="site-container">
        <div className="logo-container">
          <h1>
            <Link to="/">ApproveMe</Link>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new">New Requests</NavLink>
          </li>
          <li>
            <NavLink to="/approved">Approved</NavLink>
          </li>
        </ul>
        <FaUserCircle
          className="profile-container"
          onClick={() => profileDropdownHandler()}
        />
        {showProfileDropdown ? (
          <ul className="dropdown-container">
            <button onClick={() => profileDropdownHandler()}>X</button>
            <div className="whitespace-10"></div>
            <li>
              <Link to="/account">Account Settings</Link>
            </li>
            <li>Help</li>
            <li>About</li>
            <li>Sign Out</li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
