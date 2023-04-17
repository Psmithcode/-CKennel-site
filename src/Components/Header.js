import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar(props) {
  const { theme } = props;
  return (
    <AppBar position="sticky" className="header" sx={{ zIndex: 3 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color={props.theme}
          id="menu-icon"
          onClick={() => props.setIsDrawerOpen(!props.isDrawerOpen)}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bar-C Kennels
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
