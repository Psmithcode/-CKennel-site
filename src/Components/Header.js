import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
        <Link to="/login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
        <Button variant="contained" color="primary">
          Contact us!
        </Button>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
