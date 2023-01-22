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
          <h1 className="dashboardhead">DASHBOARD</h1>
          <img src={logout} className="logoutbtn" onClick={this.Handlelogout} />
        </div>
      </>
    );
  }
}

export default Header;
