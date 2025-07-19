import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";


function App() {

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans-serif">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
