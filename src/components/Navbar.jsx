import { Link, NavLink } from "react-router-dom";
import "./css/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [show,setshow] = useState(false);
  return (
    <nav className={show?"nav show" : "nav"}>
      <div className="subnav">
        <div className="logo">
          <i class="ri-menu-line" onClick={()=>setshow(!show)}></i> MovieDb
        </div>
        <div className="space">
          <NavLink to="/">Popular</NavLink>
          <NavLink to="/toprated">Top Rated</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
          <div className="input_bar">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="search"
              placeholder="Movie Search"
            />
            <Link to={query ? `/search/${query}` : ""} type="submit">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
