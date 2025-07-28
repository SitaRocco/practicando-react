import Home from "./pages/home";
import Abogados from "./pages/abogados";
import Patadepato from "./pages/patadepato";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //importas estas cosas

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
            <Route path="/patadepato" element={<Patadepato />} />
            <Route path="/abogados" element={<Abogados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;