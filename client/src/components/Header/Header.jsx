import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux";
import * as actionType from "../../constants/actionTypes";

const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  const logoutHandler = () => {
      dispatch({ type: actionType.LOGOUT });
      setUser(null);
  }

  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.Header__logo}>AweMovies</Link>
      {
        user ? (
          <Link to='/auth' className={classes.Header__auth} onClick={logoutHandler}>LogOut</Link>
        ):(
          <Link to="/auth" className={classes.Header__auth}>LogIn</Link>
        )
      }
    </div>
  );
};

export default Header;