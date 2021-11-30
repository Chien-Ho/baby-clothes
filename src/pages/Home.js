import React from "react";
import { Link } from "react-router-dom";
import Service from "../component/Service";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import FeaturedRoom from "../component/FeaturedRooms";
const Home = () => {
  return (
    <div>
      <Hero hero="defaultHero">
        <Banner tittle="luxury rooms"
          desc="welcome to our rooms">
          <Link to="/rooms/" className="btn-general">our rooms</Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRoom />
    </div>
  );
};

export default Home;
