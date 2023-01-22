import React from "react";
import logout from '../assests/icons8-logout-rounded-48 (1).png';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  Handlelogout() {
    window.location.assign("/");
  }
  render() {
    return (
      <>
         <div className="headermain">
          <h1 className="dashboardhead">{window.location.pathname && window.location.pathname.split("/home/") ? `${window.location.pathname.split("/home/")[1].toUpperCase()} MODULE`:"MODULE"}</h1>
          <button className="logoutbtn" onClick={this.Handlelogout} >Logout </button>
        </div>
      </>
    );
  }
}

export default Header;
