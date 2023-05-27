import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooterLogin = location.pathname.includes("/login");
  const noHeaderFooterSignup = location.pathname.includes("/signup");
  return (
    <div>
      {noHeaderFooterLogin || noHeaderFooterSignup || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooterLogin || noHeaderFooterSignup || <Footer></Footer>}
    </div>
  );
};

export default Main;
