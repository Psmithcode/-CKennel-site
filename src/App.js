import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router";

import Login from "./Components/Login";
import Admin from "./Components/Admin";
import PrivateRoute from "./Components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import UpdateDetails from "./containers/updateDetails";
import PuppyDetails from "./containers/puppyDetails";
import Puppies from "./Components/Puppies";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import { useState } from "react";
import Updates from "./containers/updates";
import Reviews from "./Components/Reviews";
import About from "./Components/About";
import Title from "./Components/Title";
import ContactForm from "./Components/ContactForm";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Routes>
          <Route exact path="/" element={<Title />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute component={Admin} />} />
          <Route path="/updates/:id" element={<UpdateDetails />} />
          <Route path="/puppies/:id" element={<PuppyDetails />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
