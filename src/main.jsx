import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.jsx";
import Detalhes from "./pages/Detalhes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokemon/:id" element={<Detalhes></Detalhes>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
