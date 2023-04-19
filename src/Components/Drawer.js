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
import { makeStyles } from "@mui/styles";
import "../styles/Drawer.css";

export default function SideMenu(props) {
  //   const [isDrawerOpen, setIsDrawerOpen] = props;

  const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      backgroundColor: "transparent",
    },
  }));

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={props.isDrawerOpen}
      onClose={() => props.setIsDrawerOpen(false)}
      style={{
        marginTop: "70px",
        zIndex: 1,
        height: "100%",
        backgroundColor: "rgba(213, 197, 180, .5)",
      }}
    >
      <Box
        p={2}
        width="250px"
        textAlign="center"
        role="presentation"
        sx={{
          marginTop: "55px",
          backgroundColor: "rgba(213, 197, 180, .5)",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Link to="/">
          <Typography className="nav-link" variant="h6">
            Home
          </Typography>
        </Link>
        <Link to="/updates">
          <Typography className="nav-link" variant="h6">
            Updates
          </Typography>
        </Link>
        <Link to="/puppies">
          <Typography className="nav-link" variant="h6">
            Puppies
          </Typography>
        </Link>
        <Link to="/reviews">
          <Typography className="nav-link" variant="h6">
            Reviews
          </Typography>
        </Link>
        <Link to="/about">
          <Typography className="nav-link" variant="h6">
            About
          </Typography>
        </Link>
        <a href="#gallery">
          <Typography className="nav-link" variant="h6">
            Gallery
          </Typography>
        </a>
        <Link to="/contact">
          <Typography className="nav-link" variant="h6">
            Contact
          </Typography>
        </Link>
        <Link to="/login">
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              bottom: "50px",
              left: "30%",
              backgroundColor: "var(--dark)",
            }}
          >
            Login
          </Button>
        </Link>
      </Box>
    </Drawer>
  );
}
