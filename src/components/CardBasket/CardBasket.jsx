import React from "react";

import './CardBasket.scss';

export const CardBasket = (props) => {
  const { card, addInCartShop, removeInCartShop } = props;
  return(
    <div className="shop-cart__item">
    <div className="shop-cart__item-img_wrap">
      <img className="shop-cart__item-img" src={ card.background } alt={ card.name }/>
    </div>
    <span className="shop-cart__item-name">{ card.name }</span>
    <div className="shop-cart__item-numbers">
      <span>{ +card.price * +card.quantity } руб.</span>
      <div className="shop-cart__item-quantity">
        <span
          className="shop-cart__btn shop-cart__btn-minus"
          onClick={() => removeInCartShop(card.id)}
        >
        </span>
          {card.quantity}
        <span
          className="shop-cart__btn shop-cart__btn-plus"
          onClick={() => addInCartShop(card.id)}
        >
        </span>
      </div>
    </div>
  </div>)
}
