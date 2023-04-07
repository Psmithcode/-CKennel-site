import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router";
import Page from "./Page";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import PrivateRoute from "./Components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";


// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#4e4630",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//     background: {
//       default: "#716b59",
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
