import {Hero, About, Projects, Contact, Navbar, Footer} from "../components/Components";

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans-serif">
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;

 

