import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import defaultImage from "../images/baby12.jpg"
import { ClothesContext } from "../context";
import { Modal, Button } from 'react-bootstrap'
import Flip from 'react-reveal'
const Room = (clothes) => {
  const context = React.useContext(ClothesContext);
  clothes = clothes.clothes;
  const { name, price, images, id, slug, description } = clothes;
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
      <section className="clothes-section">
        <div className="img-container">
          <a href={"#" + clothes.id} onClick={() => openModal(clothes)}>
            <img src={images[0] || defaultImage} alt="clothes-image" />
          </a>
          <div className="price-top">
            <h4>{price}</h4>
            <p>dollar</p>

          </div>
          <Link to={`/shop/${slug}`} className="btn-general clothes-link">featured</Link>
          <button className="btn-general cart-btn" ><FaShoppingCart onClick={() => addToCart(clothes)} /></button>
        </div>
        <div className="clothes-name">{name}</div>
      </section>
      {product && (
        <Modal size="lg" show={true} onHide={closeModal} dialogClassName="modal-container">
          <Modal.Header closeButton>
            <Modal.Title>Clothes Detail</Modal.Title>
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
                    addToCart(clothes);
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
