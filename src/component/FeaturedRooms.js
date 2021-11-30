import React, { useContext } from "react";
import Room from "./Room";
import { RoomContext } from "../context";
import { Tittle } from "./Tittle";
const FeaturedRoom = () => {
  const context = React.useContext(RoomContext);

  let { loading, featuredRooms: rooms } = context;

  rooms = rooms.map(room => {
    return <Room key={room.id} room={room} />
  });

  return (
    <div>
      <section className="featured-rooms">
        <Tittle tittle="featuredRooms"></Tittle>
        <div className="featured-rooms-center">
          {loading ? loading : rooms}
        </div>
      </section>
    </div>
  );
};

export default FeaturedRoom;
