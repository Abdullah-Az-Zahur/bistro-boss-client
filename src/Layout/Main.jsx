import { Outlet, useLocation } from "react-router-dom";

import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet />
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
