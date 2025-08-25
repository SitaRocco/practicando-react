import Home from "./pages/home";
import Abogados from "./pages/abogados";
import Patadepato from "./pages/patadepato";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import favicon from './assets/miniyo.png';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patadepato" element={<Patadepato />} />
        <Route path="/abogados" element={<Abogados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
