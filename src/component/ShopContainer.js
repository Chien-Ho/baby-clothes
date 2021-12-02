import React from 'react'
import AllClothesList from "./AllClothesList";
import Cart from './Cart';
import { ClothesContext } from "../context";
const RoomsContainer = () => {
    const context = React.useContext(ClothesContext);

    const { allClothes, loading, } = context;
    console.log(context);
    return (
        <div>



            <div className="shop-cart-container">

                <AllClothesList allClothes={allClothes} ></AllClothesList>

                <Cart />

            </div>

        </div>
    )
}

export default RoomsContainer
