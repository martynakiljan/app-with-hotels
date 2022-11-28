import ThemeContext from "../../context/themeContext";
import React, { useContext } from "react";

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`text-center m-3 text-${theme.color}`}> Hotels 2022 </div>
  );
}

export default Footer;
