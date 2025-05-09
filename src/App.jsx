import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Inventory from "./components/Inventory";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <main className="bg-orange-50 grid grid-cols-[220px_1fr] gap-4 p-4">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </main>
  );
}

export default App;
