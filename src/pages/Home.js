import React from "react";
import { Link } from "react-router-dom";
import Service from "../component/Service";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import FeaturedClothes from "../component/FeaturedClothes";
const Home = () => {
  return (
    <div>
      <Hero hero="defaultHero">
        <Banner tittle="cutest shop"
          desc="welcome to our shop">
          <Link to="/shop/" className="btn-general">baby's Clothing</Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedClothes />
    </div>
  );
};

export default Home;
