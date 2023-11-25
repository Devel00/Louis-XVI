import React from "react";
import Footer from "../Components/Footer";
import Navbar from "./Navbar";
import Carousel from "../Components/carousel";
import Filter from "./Filter";

const Problems = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <Filter />
      {/* <Footer /> */}
    </div>
  );
};

export default Problems;
