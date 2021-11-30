import React from "react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import RoomsContainer from "../component/RoomsContainer";
const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner tittle="our rooms" >
          <Link to="/" className="btn-general">return home</Link>
        </Banner>
      </Hero>
      <RoomsContainer />

    </div>
  );
};

export default Rooms;
