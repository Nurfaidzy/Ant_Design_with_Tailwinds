import "./App.css";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Help from "./Components/Help";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Shows from "./Components/Shows";
import "./Styling/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Shows />
      <Faq />
      <Help />
      <Footer />
    </>
  );
}

export default App;
