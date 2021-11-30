import React, { useState } from "react";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
const SingleRoom = (props) => {
  const [slug, setSlug] = useState(props.match.params.slug);
  const context = React.useContext(RoomContext);

  const getRoom = context.getRoom;
  const room = getRoom(slug);
  const { name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images } = room;
  console.log(images);
  console.log(extras);
  return <div>
    <Hero hero="defaultHero">
      <Banner tittle={`${name} room`}>
        <Link to="/rooms/" className="btn-general">back to rooms</Link>
      </Banner>
    </Hero>
    <section className="single-room">
      <div className="single-room-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={name} />
        ))}
      </div>
      <div className="single-room-info">
        <div className="desc">
          <h2>detail:</h2>
          <p>{description}</p>
        </div>
        <div className="info">
          <h2>info:</h2>
          <h4>price: {price}</h4>
          <h4>size: {size}</h4>
          <h4>max capacity: {capacity > 1 ? `${capacity} people`
            : `${capacity} person`}</h4>
          <h4>{pets ? "pet allowed" : "pet not allowed"}</h4>
          <h4>{breakfast && "free breakfast included"}</h4>
        </div>
      </div>
    </section>
    <section className="room-extras">
      <h2>extras:</h2>
      <ul className="extras">
        {extras.map((extra, index) => (
          <li key={index}>- {extra}</li>
        ))}
      </ul>
    </section>
  </div>;
};

export default SingleRoom;
