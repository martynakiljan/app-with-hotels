import Fragment from "../../hoc/Fragment";
import withClass from "../../hoc/withClass";
import React, {
  useEffect,
  useState,
  useReducer
} from "react";

function Layout(props) {
  return ( <
    withClass >
    <
    Fragment >
    <
    div > {
      props.header
    } < /div> <
    div className = "container" > {
      props.menu
    } < /div> <
    div className = "container" > {
      props.content
    } < /div> <
    div > {
      props.footer
    } < /div> < /
    Fragment > <
    /withClass>
  );
}
export default withClass(Layout, "layout");