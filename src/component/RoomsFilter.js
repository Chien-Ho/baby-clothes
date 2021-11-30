import React from 'react'
import { Tittle } from './Tittle';
import { RoomContext } from '../context';
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

const RoomsFilter = ({ rooms }) => {
    const context = React.useContext(RoomContext)
    const { type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange,
    } = context;
    let types = getUnique(rooms, "type");

    types = ["all", ...types];
    console.log(types);

    let capacities = getUnique(rooms, "capacity");
    capacities = capacities.map((capacity, index) => (

        <option key={index} value={capacity}>
            {capacity}
        </option>
    ));

    return (
        <div>
            <section className="filter-container">
                <Tittle tittle="search rooms" />
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type"
                            onChange={handleChange}
                            className="form-control"
                            value={type}>
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id="capacity"
                            onChange={handleChange}
                            value={capacity}
                            className="form-control">
                            {capacities}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">room price {price}</label>
                        <input type="range"
                            name="price"
                            min={minPrice}
                            max={maxPrice}
                            id="price"
                            value={price}
                            onChange={handleChange}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">room size </label>
                        <div className="size-inputs">
                            <input type="number"
                                name="minSize"

                                id="minSize"
                                value={minSize}
                                onChange={handleChange}
                                className="size-input" />
                            <input type="number"
                                name="maxSize"

                                id="maxSize"
                                value={minSize}
                                onChange={handleChange}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="single-extra">
                            <label htmlFor="breakfast">breakfast</label>
                            <input type="checkbox"
                                name="breakfast"

                                id="breakfast"
                                checked={breakfast}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="single-extra">
                            <label htmlFor="pet">pets</label>
                            <input type="checkbox"
                                name="pets"

                                id="pets"
                                checked={pets}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default RoomsFilter
