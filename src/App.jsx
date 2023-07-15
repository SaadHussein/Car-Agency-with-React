import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Cars from "./components/Cars/Cars";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Cars />
      <Gallery />
      <Testimonials />
    </>
  );
}

export default App;
