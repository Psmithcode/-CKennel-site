import { useState } from "react";
import "./App.css";
import About from "./Components/About";
// import Banner from "./Components/Banner";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Title from "./Components/Title";
// import Litters from "./Components/Litters";
// import Parents from "./Components/Parents";
import { createTheme, ThemeProvider } from "@mui/material";
import Updates from "./Components/Updates";
import Puppies from "./Components/Puppies";
import Reviews from "./Components/Reviews";
import Gallery from "./Components/Gallery";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4e4630",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#716b59",
    },
  },
});

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setIsDrawerOpen={setIsDrawerOpen} />
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Title />
        <Updates />
        <Puppies />
        <Reviews />
        {/* <Banner /> */}
        <About />
        <Gallery />
        {/* <Parents /> */}
        {/* <Litters /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
