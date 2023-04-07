// import { Button, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import React from "react";
// import "../reset.css";
// import "./Header.css";

// export default function Header(props) {
//   // const [setIsDrawerOpen] = props;
//   return (
//     <>
//       <header className="header  card">
//         <div className="header-title-menu-container">
// <IconButton
//   size="large"
//   edge="start"
//   color="primary"
//   id="menu-icon"
//   onClick={() => props.setIsDrawerOpen(true)}
// >
//   <MenuIcon />
// </IconButton>
//           <h1>Bar-C Kennels</h1>
//         </div>

//         <section
//           className="header-contact-container"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "burlywoods",
//             marginRight: "5px",
//           }}
//         >
//           <Button variant="contained" color="primary">
//             Contact us!
//           </Button>
//         </section>
//       </header>
//     </>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar(props) {
  // const [setIsDrawerOpen] = props;
  return (
    // <Box sx={{ flexGrow: 1, width: "100%" }}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          id="menu-icon"
          onClick={() => props.setIsDrawerOpen(true)}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bar-C Kennels
        </Typography>
        <Button variant="contained" color="primary">
          Contact us!
        </Button>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
