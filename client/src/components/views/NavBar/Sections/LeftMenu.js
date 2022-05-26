/* importing of the required modules */
import React from "react";
import { Menu } from "antd";

/*below function displays the left side of the menu which is the Favourite icon */
function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">Favourites</a>
      </Menu.Item>
    </Menu>
  );
}
/*  exporting of the component */
export default LeftMenu;
