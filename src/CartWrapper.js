import React from "react";
import Cart from "./Cart";

const CartWrapper = () => {
  const data = [
    { name: "Aziz", age: 20, image: "logo192.png" },
    { name: "Wael", age: 20, image: "logo192.png" },
    { name: "Amine", age: 20, image: "logo192.png" },
    { name: "Gaston", age: 20, image: "logo192.png" },
    { name: "Mehdi", age: 20, image: "logo192.png" },
  ];
  return (
    <div className="cartWrapper">
      {data.map((el) => (
        <Cart info={el} />
      ))}
    </div>
  );
};

export default CartWrapper;
