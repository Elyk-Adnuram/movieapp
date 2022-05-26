/* importing of the required modules */
import React from "react";
import { Icon } from "antd";

/*below function displays the footer on every page */
function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        {" "}
        Enjoy the movie! <Icon type="smile" />
      </p>
    </div>
  );
}
/*  exporting of the component */
export default Footer;
