import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Title from "./Components/Title";
import { ThemeProvider, createTheme } from "@mui/material";
import Updates from "./containers/updates";
import Puppies from "./Components/Puppies";
import Reviews from "./Components/Reviews";
import Gallery from "./Components/Gallery";
import ContactForm from "./Components/ContactForm";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(121, 99, 78)",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      secondary: "#AD8E70",
    },
  },
});

function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Title />
        <Updates />
        <Puppies />
        <Reviews />
        <About />
        <ContactForm />
        <Gallery />
      </div>
    </ThemeProvider>
  );
}

export default Page;
