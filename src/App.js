import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import Login from "./Login-signin/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} /> {/* Use Route directly */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
