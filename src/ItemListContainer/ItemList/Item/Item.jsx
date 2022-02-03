import React from "react";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <div className="itemCard">
      <div className="cardBody">
        <button type="button" className="wishButton">
            <img
            src="https://res.cloudinary.com/dvinxey2w/image/upload/v1642370032/ABA/ICONS%2032PX/heart-57_mmxpyu.svg"
            alt="wish-icon" />
        </button>
        <div className="blank"></div>
        <button type="button" className="cartButton">
            <img
            src="https://res.cloudinary.com/dvinxey2w/image/upload/v1642370025/ABA/ICONS%2032PX/cart-11_fm4oo4.svg"
            alt="cart-icon" />
        </button>
        <div className="imgContainer">img</div>
        <div className="bodytitle">
          <p>Titulo Titulo Titulo Titulo Titulo Titulo Titulo</p>
        </div>
        <div className="bodyPrice">
          <p>S/.9999.99</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
