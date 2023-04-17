import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function SideMenu(props) {
  //   const [isDrawerOpen, setIsDrawerOpen] = props;
  return (
    <Drawer
      anchor="left"
      open={props.isDrawerOpen}
      onClose={() => props.setIsDrawerOpen(false)}
      style={{
        marginTop: "64px",
        zIndex: 1,
      }}
    >
      <Box p={2} width="250px" textAlign="center" role="presentation" sx={{marginTop: "64px"}}>
        <a href="#title">
          <Typography variant="h6">Home</Typography>
        </a>
        <a href="#updates">
          <Typography variant="h6">Updates</Typography>
        </a>
        <a href="#puppies">
          <Typography variant="h6">Puppies</Typography>
        </a>
        <a href="#reviews">
          <Typography variant="h6">Reviews</Typography>
        </a>
        <a href="#gallery">
          <Typography variant="h6">Gallery</Typography>
        </a>
        <a href="#contact">
          <Typography variant="h6">Contact</Typography>
        </a>
        <Link to="/login">
          <Button variant="contained" color="primary" sx={{
            position: "absolute",
            bottom: "10px",
            left: "30%"
          }}>
            Login
          </Button>
        </Link>
      </Box>
    </Drawer>
  );
}
