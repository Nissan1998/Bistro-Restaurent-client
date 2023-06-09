import React from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Button/Button";
import Cover from "../../Shared/Cover/Cover";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import MenuItem from "../../Shared/MenuItemCard/MenuItem";
import useMenu from "../../../CustomHook/useMenu";
import menubg from "../../../assets/menu/menu-bg.png";

const MenuCategories = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div
      style={{
        backgroundImage: `url("${menubg}")`,
      }}
    >
      <div>
        <SectionHeader
          title={"TODAY'S OFFER"}
          title1={"Don't miss"}
        ></SectionHeader>
        <div
          style={{
            backgroundImage: `url("${menubg}")`,
          }}
          className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto  p-10"
        >
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button title={"order"}>ORDER YOUR FAVORITE FOOD</Button>
        <Cover
          bgImg={dessert}
          title={"DESSERT"}
          subTitle={
            "Very attractive desserts are available here to eat smoothly"
          }
        ></Cover>
        <div
          style={{
            backgroundImage: `url("${menubg}")`,
          }}
          className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto  p-10"
        >
          {desserts.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button title={"Dessert"}>ORDER YOUR FAVORITE DESSERTS</Button>
        <Cover
          bgImg={pizza}
          subTitle={"The most tested ever of our Restaurant Pizza "}
          title={"PIZZA"}
        ></Cover>
        <div
          style={{
            backgroundImage: `url("${menubg}")`,
          }}
          className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto  p-10"
        >
          {pizzas.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button title={"Pizza"}>ORDER YOUR FAVORITE PIZZA</Button>
      </div>
      <Cover
        bgImg={salad}
        subTitle={"The Most famous Salad of Us Check it out the taste"}
        title={"SALAD"}
      ></Cover>
      <div
        style={{
          backgroundImage: `url("${menubg}")`,
        }}
        className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto  p-10"
      >
        {salads.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button title={"Salad"}>ORDER YOUR FAVORITE SALADS</Button>
      <Cover
        bgImg={soup}
        title={"SOUP"}
        subTitle={
          "Flavoured Soup Which is achieved best reviews from Customers"
        }
      ></Cover>
      <div
        style={{
          backgroundImage: `url("${menubg}")`,
        }}
        className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto  p-10"
      >
        {soups.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button title={"Soup"}>ORDER YOUR FAVORITE SOUPS</Button>
      <Cover
        bgImg={soup}
        title={"Drinks"}
        subTitle={
          "Flavoured Soup Which is achieved best reviews from Customers"
        }
      ></Cover>
      <div
        style={{
          backgroundImage: `url("${menubg}")`,
        }}
        className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto p-10"
      >
        {drinks.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button title={"Drinks"}>ORDER YOUR FAVORITE DRINKS</Button>
    </div>
  );
};

export default MenuCategories;
