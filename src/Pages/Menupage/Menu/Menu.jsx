import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/menu-bg.png";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Our Menu</title>
      </Helmet>
      <Cover bgImg={menuCover}></Cover>
    </div>
  );
};

export default Menu;
