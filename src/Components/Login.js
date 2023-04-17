import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { Button } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://barclabs.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const token = await response.json();
      console.log(token);
      localStorage.setItem("token", token);
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container flex-column-center">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Button variant="contained" type="submit" className="login-submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [state, setState] = useState({
//     username: "",
//     password: "",
//   });

//   const login = (e) => {
//     e.preventDefault();
//     // set cookie here
//     // document.cookie = "loggedIn=true;max-age=60*1000";
//     // set loggedIn = true and max-age = 60*1000 (one minute)
//     // document.cookie = cookie.serialize("loggedIn", true, { maxAge: 60 });

//     navigate("/admin");
//   };

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   return (
//     <>
//       <div className="login-container">
//         <form onSubmit={login}>
//           <p>Username:</p>
//           <input type="text" name="username" onChange={handleTextChange} />
//           <p>Password:</p>
//           <input type="password" name="password" onChange={handleTextChange} />
//           <button type="submit">Log In</button>
//         </form>
//       </div>
//     </>
//   );
// }
