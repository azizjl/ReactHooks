import React from "react";

const Cart = (props) => {
  return (
    <div className="cart">
      <img src={props.info.image} />
      <h2>{props.info.name}</h2>
      <h2>{props.info.age}</h2>
      <a href="#" onClick={() => alert(props.info.name)}>
        link
      </a>
    </div>
  );
};

export default Cart;
