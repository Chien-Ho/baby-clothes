import React from 'react'
import Clothes from './Clothes';
import Bounce from 'react-reveal/Bounce'
const RoomsList = ({ allClothes }) => {

    const listAllClothes = allClothes.map(clothes => {
        return <Clothes key={clothes.id} clothes={clothes} />
    });
    if (allClothes.length === 0) {
        return (
            <div className="empty-shop">
                <h2>not clothes adapt with your search</h2>
            </div>
        )
    }
    return (
        <div>

            <section className="featured-shop">

                <div className="featured-shop-center">
                    {listAllClothes}
                </div>
            </section>

        </div>
    )
}

export default RoomsList
