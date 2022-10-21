import React from "react";
import './Cash.scss';

import { CardBasket } from 'components/CardBasket';
import basketImg from '../../img/basket.svg'

export const Cash = (props) => {
  const { limit, cartShop, cartShopTotal, addInCartShop,
    removeInCartShop, changeOpenModule, handlerBasketBtn,
    showShopCart, getDiscount, clearCartShop } = props;
  return (
    <div className="cash">
      <p className="limit">Доступный лимит <span>{limit || 0} руб.</span></p>
      <div className="basket">
        <span className="basket__price">{cartShopTotal} руб.</span>
        <span
          className="basket__btn"
          style={{
            backgroundImage: `url(${basketImg})`}
          }
          onClick={handlerBasketBtn}>
        </span>
        <div className={`shop-cart ${!showShopCart && 'inVisible'}`}>
          <div className="shop-cart__items">
            {cartShop.length > 0 ? cartShop.map(card =>
              <CardBasket
                key={card.id}
                card={card}
                addInCartShop={addInCartShop}
                removeInCartShop={removeInCartShop}
              />) : 'Корзина пуста'}
          </div>
          <span
            className={`btn order__btn ${cartShop.length === 0 && 'disabled'}`}
            onClick={() => { getDiscount(); handlerBasketBtn(); changeOpenModule(); }}
          >
            оформить заказ
          </span>
          <span
            className={`btn order__btn ${cartShop.length === 0 && 'disabled'}`}
            onClick={() => { clearCartShop() }}
          >
            очистить корзину
          </span>
        </div>
      </div>
    </div>)
}
