import React, { useContext } from "react";
import styles from "./Menu.module.css";
import ThemeContext from "../../context/themeContext";
import AuthContext from "../../context/authContext";

function Menu() {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    auth.login();
  };

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li>
          <a href="#/" className={`text-center m-3 text-${theme.color}`}>
            home
          </a>
        </li>
        {auth.isAuthenticated ? (
          <a
            href="#/"
            onClick={login}
            className={`text-center m-3 text-${theme.color}`}
          >
            sign in
          </a>
        ) : (
          <a
            href="#/"
            onClick={logout}
            className={`text-center m-3 text-${theme.color}`}
          >
            log out
          </a>
        )}
      </ul>
    </div>
  );
}
export default Menu;
