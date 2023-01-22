import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, SubMenu, Item } from "burger-menu";
import menu from "../assests/menu.png";
import "burger-menu/lib/index.css";
import logout from '../assests/icons8-logout-rounded-48 (1).png'
class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
      selectedItem: "grid"
    };
  }

  componentDidMount() {
    if (window.location.pathname.split("/home/") && window.location.pathname.split("/home/")[1]) {
      this.setState({ selectedItem: window.location.pathname.split("/home/")[1] })

    }
  }

  open = (key) => {
    this.setState({ selectedItem: key.itemKey });
    window.location.href = `/home/${key.itemKey}`
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
        <img src={menu} className="Position" onClick={(e) => this.setState({ isOpen: !this.state.isOpen })}></img>

        <Menu
          onClick={this.open}
          className="burger-menu"
          isOpen={this.state.isOpen}
          side={"left"}
          selectedKey={this.state.selectedItem}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        >
          <Item itemKey={"codes"} text={"Codes"}></Item>
          <Item itemKey={"graph"} text={"Graphs"}></Item>
          <SubMenu isOpen={false} title="Grids">
            <Item
              itemKey={"grid"}
              text={"Create grid"}
            ></Item>
            <Item itemKey={"grid"} text={"search for a grid"}></Item>
          </SubMenu>
        </Menu>
        <Outlet />
      </>
    );
  }
}

export default Layout;
