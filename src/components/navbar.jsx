import React from "react";

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="google.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

/*
import react, {Component} from "react";
class NavBar extends Component {
   render() {
     return (
       <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="google.com">
           Navbar{" "}
           <span className="badge badge-pill badge-secondary">
             {this.props.totalCounters}
           </span>
         </a>
       </nav>
     );
   }
 }*/
