import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, SubMenu, Item } from "burger-menu";
import menu from "../assests/menu.png";
import "burger-menu/lib/index.css";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
      selectedItem:"grid"
    };
  }

  componentDidMount() {
    if(window.location.pathname.split("/home/") && window.location.pathname.split("/home/")[1]) {
      this.setState({selectedItem:window.location.pathname.split("/home/")[1]})

    }
  }

  open = (key) => {
  this.setState({selectedItem:key.itemKey});
  window.location.href = `/home/${key.itemKey}`
  }

  render() {
    return (
      <>
      <img src = {menu} className="Position" onClick={(e)=>this.setState({isOpen:!this.state.isOpen})}></img>
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
         <Item itemKey={"grid"} text={"Grids"}></Item>
          <Item itemKey={"codes"} text={"Codes"}></Item>
          <Item itemKey={"graph"} text={"Graphs"}></Item>
          <SubMenu isOpen={false} title="Union Management">
            <Item
              itemKey={"notice"}
              text={"Announcement"}
            ></Item>
            <Item itemKey={"union"} text={"Union Inquiries"}></Item>
            <Item itemKey={"entry"} text={"Entry information"}></Item>
          </SubMenu>
        </Menu>
        <Outlet />
      </>
    );
  }
}

export default Layout;
