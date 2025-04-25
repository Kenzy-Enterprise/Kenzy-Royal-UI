import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
