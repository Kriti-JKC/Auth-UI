import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Welcome from "./component/Welcome";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
