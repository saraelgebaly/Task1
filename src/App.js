import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import "@fontsource/poppins";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Testymonials from "./Components/Testymonials";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AboutUs />
        <h1 className="services">Services</h1>
        <Services />
        <h1 className="services">Testymonials</h1>
        <Testymonials />
        <h1 className="services">Contact</h1>

        <Contact />
        <dev className="footer"></dev>
      </div>
    </>
  );
}

export default App;
