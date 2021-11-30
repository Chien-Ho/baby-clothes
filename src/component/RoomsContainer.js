import React from 'react'
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import Cart from './Cart';
import { RoomContext } from "../context";
const RoomsContainer = () => {
    const context = React.useContext(RoomContext);

    const { sortedRooms, rooms, loading, } = context;
    console.log(context);
    return (
        <div>



            <div className="rooms-cart-container">

                <RoomsList rooms={sortedRooms} ></RoomsList>

                <Cart />

            </div>

        </div>
    )
}

export default RoomsContainer
