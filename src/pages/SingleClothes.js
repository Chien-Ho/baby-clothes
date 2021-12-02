import React, { useState } from "react";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";
import { ClothesContext } from "../context";
const SingleRoom = (props) => {
  const [slug, setSlug] = useState(props.match.params.slug);
  const context = React.useContext(ClothesContext);

  const getClothes = context.getClothes;
  const clothes = getClothes(slug);
  const { name,
    description,
    gender,
    price,
    material,
    origin,
    images } = clothes;
  console.log(images);
  return (<div>
    <Hero hero="defaultHero">
      <Banner tittle={`${name} clothes`}>
        <Link to="/shop/" className="btn-general">back to shop</Link>
      </Banner>
    </Hero>
    <section className="single-clothes">
      <div className="single-clothes-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={name} />
        ))}
      </div>
      <div className="single-clothes-info">
        <div className="desc">
          <h2>detail:</h2>
          <p>{description}</p>
        </div>
        <div className="info">
          <h2>info:</h2>
          <h4>price: {price} $</h4>

          <h4>origin: {origin}</h4>
          <h4>gender: {gender ? "Boy" : gender === false ? "Girl" : gender === null ? "Unisex" : ''}</h4>
          <h4>material: {material}</h4>
        </div>
      </div>
    </section>

  </div>);
};

export default SingleRoom;
