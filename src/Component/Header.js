import Logo from "./Logo";
import Search from "./Search";
import "../css/header.css";
import { Link } from "react-router-dom";
import signIn, { signOut } from "../utils/firebaseAuth";
import { useState, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
import { LoggedInContext } from "../App";

const Header = () => {
  const auth = getAuth();
  // const [loggedIn, setLoggedIn] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) setLoggedIn(true);
      else setLoggedIn(false);
    });
  }, [loggedIn]);

  return (
    <div id="header">
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <div id="header-btns">
        <button id="app-btn">Get App</button>

        {!loggedIn && (
          <button id="login-btn" onClick={signIn}>
            Log In
          </button>
        )}

        {loggedIn && (
          <button id="login-btn" onClick={signOut}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
