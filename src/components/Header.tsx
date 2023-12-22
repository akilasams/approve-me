import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>
        <Link to="/">ApproveMe</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/new">New Requests</NavLink>
        </li>
        <li>
          <NavLink to="/review">In Review</NavLink>
        </li>
        <li>
          <NavLink to="/approved">Approved</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
