import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBootstrap";
import Nav from "./Nav";
import App from './App.jsx'
import Material from './material/Material.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AddBootstrap />
      <Nav />
      <Routes>
        <Route index element={<App />} />
        <Route path="/generador_Inventario_lab" element={<App />} />
        <Route path="/generador_Inventario_lab/material" element={<Material />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
