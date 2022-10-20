import React from "react";
import Landing from "./pages/Landing";
import Song from "./pages/Song";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/song" element={<Song />}></Route>
    </Routes>
  );
}

export default App;
