import ThemeContext from "../../context/themeContext";
import { useContext } from "react";

export default function Loading() {
  const theme = useContext(ThemeContext);

  return (
    <div class="d-flex justify-content-center">
      <div
        className={`spinner-border m-5 text-${theme.color}`}
        role="status"
      ></div>
    </div>
  );
}
