import React, { useState } from "react";
import { FaBeer, FaBath, FaGuitar, FaHeart } from "react-icons/fa";
import { Tittle } from "./Tittle";
const Service = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      tittle: "Beer",
      icon: <FaBeer />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
    {
      id: 2,
      tittle: "Luxury Bath",
      icon: <FaBath />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
    {
      id: 3,
      tittle: "Romance",
      icon: <FaHeart />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
    {
      id: 4,
      tittle: "Acoustic",
      icon: <FaGuitar />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
  ]);
  return (
    <div>
      <section className="services">
        <Tittle tittle="service" />
        <div className="services-center">
          {services.map(item => {
            return (
              <article key={item.id} className="service">
                <span>{item.icon}</span>
                <h2>{item.tittle}</h2>
                <p>{item.content}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default Service;
