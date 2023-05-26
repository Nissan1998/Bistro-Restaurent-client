import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import bg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../CustomHook/useMenu";
import menubg from "../../../assets/menu/menu-bg.png";

const Order = () => {
  const [tabIndex, setIndex] = useState(0);
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
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
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel>
          <h2>pizza</h2>
        </TabPanel>
        <TabPanel>
          <h2>soup</h2>
        </TabPanel>
        <TabPanel>
          <h2>desserts</h2>
        </TabPanel>
        <TabPanel>
          <h2>drinks</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
