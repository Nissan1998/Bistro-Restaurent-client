import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";

import MenuCategories from "../MenuCategories/MenuCategories";
import { useLocation } from "react-router-dom";
import useScrollTop from "../../../CustomHook/useScrollTop";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Menu = () => {
  const { loading, user } = useContext(AuthContext);
  const { pathName } = useLocation();
  useScrollTop(pathName);

  return (
    <div>
      <Helmet>
        <title>Bistro | Our Menu</title>
      </Helmet>
      <Cover
        bgImg={menuCover}
        title={"OUR MENU"}
        subTitle={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>
      <MenuCategories></MenuCategories>
    </div>
  );
};

export default Menu;
