import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        heading="Featured Items"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center p-20 pt-12 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2025</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            quam neque ex facere similique a, maxime earum ipsum ratione
            doloremque dolore veritatis esse repellat qui eveniet est soluta
            nemo, quae odit at veniam nobis! Cum, minus suscipit rerum, facilis
            dolore, accusamus adipisci voluptas sint nisi asperiores vel. Animi,
            explicabo consequatur?
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
