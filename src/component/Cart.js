import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { RoomContext } from "../context";
import { FaThumbsDown } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce'
const Cart = () => {
    const context = React.useContext(RoomContext);
    const { cartItems, removeFromCart, createOrder } = context;
    const [state, setState] = useState({
        name: "",
        address: "",
        email: "",
        checkOut: false,
    });
    const handleInput = (e) => {
        setState({ [e.target.name]: e.target.value })
    }
    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            cartItems: this.state.cartItems
        }
        return createOrder(order);

    }
    return (
        <div>
            <Bounce right>
                <div>
                    {cartItems.length === 0 ? (<div className="cart-header">Cart is empty :</div>) :
                        (<div className="cart-header">{cartItems.length} in Cart : </div>)}
                </div>
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    <div>
                                        <img className="cart-img" src={item.images[0]} alt="" />
                                    </div>
                                    <div className="cart-tittle-price">
                                        <div className="cart-tittle">{item.name}</div>
                                        <div className="cart-price">{item.price} x {item.count}</div>
                                        <button className="btn-general" onClick={() => removeFromCart(item)}>Remove</button>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="total">
                        <div>
                            Total: {cartItems.reduce((a, b) => a + b.price * b.count, 0)}$
                        </div>
                        <button className="btn-general" onClick={() => setState({ ...state, checkOut: true })}>Confirm</button>
                    </div>
                    {state.checkOut && (
                        <div className="cart">
                            <form onSubmit={submitOrder}>
                                <ul className="form-container">
                                    <li>
                                        <label>Name</label>
                                        <input type="text"
                                            name="name"
                                            onChange={handleInput}
                                            required></input>
                                    </li>
                                    <li>
                                        <label>Email</label>
                                        <input type="email"
                                            name="email"
                                            onChange={handleInput}
                                            required></input>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input type="text"
                                            name="address"
                                            onChange={handleInput}
                                            required></input>
                                    </li>
                                    <li>
                                        <button className="btn-general" type="submit">Checkout</button>
                                    </li>
                                </ul>

                            </form>
                        </div>
                    )}
                </div>
            </Bounce>
        </div>

    )
}

Cart.propTypes = {

}

export default Cart
