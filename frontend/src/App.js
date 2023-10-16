import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Ticket from "./pages/Ticket";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Ticket />} />

        <Route path="admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
