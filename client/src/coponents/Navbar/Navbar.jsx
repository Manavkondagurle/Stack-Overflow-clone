import React, { useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import logo from "../../assets/logo.png";
import serach from "../../assets/search.svg";
import Avatar from "../../coponents/Avatar/Avatar";
import {setCurrentUser} from '../../actions/currentUser'
import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var user = useSelector((state) => state.currentUserReducer);
  

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() =>{
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [user?.token, dispatch]);

  return (
    <nav className="main-nav" >
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width="150" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Product
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Team
        </Link>
        <form>
          <input type="text" placeholder="search.." />
          <img src={serach} alt="search" width="18" className="search-icon" />
        </form>
        {user === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            
              <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius="50%" color ='white'><Link to={`/Users/${user?.result?._id}`}
 style={{color: "white" , textDecoration: "none"}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            
            <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
