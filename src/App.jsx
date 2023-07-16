import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Cars from "./components/Cars/Cars";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Logos from "./components/Logos/Logos";
import Footer from "./components/Footer/Footer";
import CartItems from "./components/CartItems/CartItems";

function App() {
  return (
    <>
      <CartItems />
      <Header />
      <About />
      <Services />
      <Cars />
      <Gallery />
      <Testimonials />
      <Logos />
      <Footer />
    </>
  );
}

export default App;
