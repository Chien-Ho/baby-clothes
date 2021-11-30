import React from 'react'
import Room from './Room';
import Bounce from 'react-reveal/Bounce'
const RoomsList = ({ rooms }) => {
    console.log(rooms);
    const listRooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
    });
    if (rooms.length === 0) {
        return (
            <div className="empty-rooms">
                <h2>not room adapt with your search</h2>
            </div>
        )
    }
    return (
        <div>

            <section className="featured-rooms">

                <div className="featured-rooms-center">
                    {listRooms}
                </div>
            </section>

        </div>
    )
}

export default RoomsList
