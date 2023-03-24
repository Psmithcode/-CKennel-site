import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import "../reset.css";
import "./Header.css";

export default function Header(props) {
  // const [setIsDrawerOpen] = props;
  return (
    <>
      <header className="header  card">
        <div className="header-title-menu-container">
          <IconButton
            size="large"
            edge="start"
            color="primary"
            id="menu-icon"
            onClick={() => props.setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <h1>-C Kennel</h1>
        </div>

        <section
          className="header-contact-container"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "burlywoods",
            marginRight: "5px",
          }}
        >
          <Button variant="contained" color="primary">
            Contact us!
          </Button>
        </section>
      </header>
    </>
  );
}
