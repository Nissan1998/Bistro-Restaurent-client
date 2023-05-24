import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import MenuItem from "../Shared/MenuItemCard/MenuItem";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setFoods(popularItems);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <section>
      <SectionHeader
        title1={"Check it out"}
        title={"FROM OUR MENU"}
      ></SectionHeader>
      <div className="grid md:grid-cols-2 gap-3  max-w-screen-xl mx-auto bg-base-200 p-10">
        {foods.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link className="bg-transparent bg-black bg-opacity-30 border-b-4 rounded-lg text-yellow-600 font-bold flex justify-center my-5 w-36 mx-auto btn-outline p-3">
        View Full Menu
      </Link>
    </section>
  );
};

export default PopularMenu;
