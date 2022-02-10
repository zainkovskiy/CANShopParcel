import React from "react";

import './CardBasket.css';

function CardBasket (props) {
  const { card, addInCartShop, removeInCartShop } = props;
  return(
    <div className="shop-cart__item">
    <div className="shop-cart__item-img_wrap">
      <img className="shop-cart__item-img" src={ card.background } alt="${card.name}"/>
    </div>
    <span className="shop-cart__item-name">{ card.name } { card.size }</span>
    <div className="shop-cart__item-numbers">
      <span>{ +card.price * +card.quantity } руб.</span>
      <div className="shop-cart__item-quantity">
        <span
          data-id={ card.id }
          data-price={ card.price }
          data-basket="remove"
          className="shop-cart__btn shop-cart__btn-minus"
          onClick={removeInCartShop}
        >
        </span>
          {card.quantity}
        <span
          data-id={ card.id }
          data-price={ card.price }
          data-basket="add"
          className="shop-cart__btn shop-cart__btn-plus"
          onClick={addInCartShop}
        >
        </span>
      </div>
    </div>
  </div>)
}

export default CardBasket;