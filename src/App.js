import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router";
import Page from "./Page";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import PrivateRoute from "./Components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import UpdateDetails from "./containers/updateDetails";
import PuppyDetails from "./containers/puppyDetails";
// import { createTheme } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#AD8E70",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//     background: {
//       default: "#AD8E70",
//     },
//   },
// });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute component={Admin} />} />
          <Route path="/updates/:id" element={<UpdateDetails />} />
          <Route path="/puppies/:id" element={<PuppyDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
