import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true
    };
  }

  open(key){
    alert("he")
  }

  render() {
    return (
      <>
        <Menu
        onClick={this.open}
          className="burger-menu"
          isOpen={this.state.isOpen}
          side={"left"}
          selectedKey={"entry"}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        >
         <Item itemKey={"manage"} text={"User Management"}></Item>
          <Item itemKey={"user"} text={"User Center"}></Item>
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
