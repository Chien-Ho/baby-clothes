import React, { useState } from "react";
import { IoFlowerOutline, IoLeafOutline, IoSnowOutline } from "react-icons/io5";
import { IoIosPartlySunny } from "react-icons/io";
import { Tittle } from "./Tittle";
const Service = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      tittle: "Spring",
      icon: <IoFlowerOutline />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
    {
      id: 2,
      tittle: "Summer",
      icon: <IoIosPartlySunny />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
    {
      id: 3,
      tittle: "Autumn",
      icon: <IoLeafOutline />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
    {
      id: 4,
      tittle: "Winter",
      icon: <IoSnowOutline />,
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    },
  ]);
  return (
    <div>
      <section className="services">
        <Tittle tittle="four seasons" />
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
