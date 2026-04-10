import{ BowserRoutes, Routes, Route } from "react-router-dom"


function rota() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outra" element={<OutraPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default rota;