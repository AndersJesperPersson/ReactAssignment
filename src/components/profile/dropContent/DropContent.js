import React, { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import LocalStorage from "../../../shared/storage/LocalStorage";
import "./DropContent.css";
import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath.js";

export const DropContent = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  function Logout() {
    localStorage.removeItem(LocalStorage.username);
    localStorage.removeItem(LocalStorage.password);
    setAuthenticatedUser(null);
    history.push(RoutingPath.homeView, "Det här funkade!");
  }

  return (
    <div className="drop-content">
      <h3 className="drop-header">Hej</h3>

      <p>{props.email}</p>
      <button className="btn-logout" onClick={() => Logout()}>
        Logout
      </button>
    </div>
  );
};
