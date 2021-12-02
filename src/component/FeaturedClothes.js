import React, { useContext } from "react";
import Clothes from "./Clothes";
import { ClothesContext } from "../context";
import { Tittle } from "./Tittle";
const FeaturedRoom = () => {
  const context = React.useContext(ClothesContext);

  let { loading, featuredClothes: allClothes } = context;

  allClothes = allClothes.map(clothes => {
    return <Clothes key={clothes.id} clothes={clothes} />
  });

  return (
    <div>
      <section className="featured-shop">
        <Tittle tittle="baby's shop"></Tittle>
        <div className="featured-shop-center">
          {loading ? loading : allClothes}
        </div>
      </section>
    </div>
  );
};

export default FeaturedRoom;
