import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import defaultImage from "../images/2.jpg"
import { RoomContext } from "../context";
import { Modal, Button } from 'react-bootstrap'
import Flip from 'react-reveal'
const Room = (room) => {
  const context = React.useContext(RoomContext);
  room = room.room;
  const { name, price, images, id, slug, description } = room;
  const { addToCart } = context;
  const [product, setProduct] = useState(null);
  const openModal = (room) => {
    setProduct(room)
  }
  const closeModal = () => {
    setProduct(null)
  }
  return (
    <div>
      <section className="room-section">
        <div className="img-container">
          <a href={"#" + room.id} onClick={() => openModal(room)}>
            <img src={images[0] || defaultImage} alt="room-image" />
          </a>
          <div className="price-top">
            <h4>{price}</h4>
            <p>per day</p>

          </div>
          <Link to={`/rooms/${slug}`} className="btn-general room-link">featured</Link>
          <button className="btn-general cart-btn" ><FaShoppingCart onClick={() => addToCart(room)} /></button>
        </div>
        <div className="room-name">{name}</div>
      </section>
      {product && (
        <Modal size="lg" show={true} onHide={closeModal} dialogClassName="modal-container">
          <Modal.Header closeButton>
            <Modal.Title>Room Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body><div className="modal-detail">

            <img src={images[0]} alt="" />
            <div className="modal-desc">
              <h3>{name}</h3>
              <p>{description}</p>

              <div className="modal-price">
                <div>{price} $</div>

                <button className="btn-general"
                  onClick={() => {
                    addToCart(room);
                    closeModal();
                  }}>Add to cart</button>

              </div>
            </div>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>






      )}
    </div>
  );
};

export default Room;
