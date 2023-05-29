import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import bg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../CustomHook/useMenu";
import FoodCard from "./FoodCard";
import { useLocation, useParams } from "react-router-dom";
import useScrollTop from "../../../CustomHook/useScrollTop";
import { Helmet } from "react-helmet-async";

// TODO:implement pagination here

const Order = () => {
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];
  const { category } = useParams();
  console.log(categories.indexOf(category));
  const initialIndex = categories.indexOf(category);
  console.log(category);

  const [tabIndex, setIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order-Food</title>
      </Helmet>
      <Cover
        bgImg={bg}
        title={"OUR SHOP"}
        subTitle={"Would you like to try our Dish?"}
      ></Cover>
      {/* Tabs */}
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setIndex(index)}
        className="text-center container mx-auto my-10  "
      >
        <TabList>
          <Tab> Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-3 md:gap-5">
            {salads.map((salad) => (
              <FoodCard key={salad._id} item={salad}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-3 md:gap-5">
            {pizzas.map((salad) => (
              <FoodCard key={salad._id} item={salad}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-3 md:gap-5">
            {soups.map((salad) => (
              <FoodCard key={salad._id} item={salad}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-3 md:gap-5">
            {desserts.map((salad) => (
              <FoodCard key={salad._id} item={salad}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-3 md:gap-5">
            {drinks.map((salad) => (
              <FoodCard key={salad._id} item={salad}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
