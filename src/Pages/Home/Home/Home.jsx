import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CenterBanner from "../Banner/CenterBanner";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Featured from "../Fetured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CenterBanner></CenterBanner>
      <PopularMenu></PopularMenu>
      <h1 className="text-center">
        there will ba button and a contact div and chef recommends cards
      </h1>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
