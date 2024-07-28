import React from "react";
import "./Card.css";
function Card({ image1, title, source }) {
  return (
    <div>
      <div className="cardBody">
        <img src={image1} alt={source} />
        <div className="cardtext">{title}</div>
      </div>
    </div>
  );
}
export default Card;
