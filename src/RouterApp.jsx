import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import Cadastro from "./cadastro"


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
   
      </Routes>
    </BrowserRouter>
  );
}