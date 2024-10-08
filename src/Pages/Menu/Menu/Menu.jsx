import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Cover */}
      <Cover img={menuImg} title="our menu"></Cover>
      {/* Offer Menu */}
      <SectionTitle
        heading="today's offer"
        subHeading="Don't Miss"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg}></MenuCategory>
      {/* pizza menu */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* soup menu */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
      {/* salad menu */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
