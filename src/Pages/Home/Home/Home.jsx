import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CenterBanner from "../Banner/CenterBanner";
import PopularMenu from "../../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CenterBanner></CenterBanner>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
