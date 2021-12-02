import React from "react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import ShopContainer from "../component/ShopContainer";
const Rooms = () => {
  return (
    <div>
      <Hero hero="shopHero">
        <Banner tittle="our shop" >
          <Link to="/" className="btn-general">return home</Link>
        </Banner>
      </Hero>
      <ShopContainer />

    </div>
  );
};

export default Rooms;
