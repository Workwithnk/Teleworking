import React from "react";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import "./CSS/NavBar.css";
// import { Search } from "@material-ui/icons";

function NavBar() {
  // const [search, setSearch] = useState("");

  return (
    <div className="NavBar">
      <div className="firstPart_NavBar">
        <h1>TELEWORKING</h1>
      </div>

      <div className="follow_Icon">
        <a href="https://iamnk.netlify.com">
          <AddAlertIcon className="navFollow_Icon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
