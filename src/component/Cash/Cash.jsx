import React from "react";
import './Cash.css';

import CardBasket from '../CardBasket/CardBasket';

function Cash (props){

    const { limit, cartShop, cartShopTotal, addInCartShop,
      removeInCartShop, changeOpenModule,handlerBasketBtn,
      showShopCart, getDiscount } = props;
    return (
      <div className="cash">
        <p className="limit">Доступный лимит <span>{ limit } руб.</span></p>
        <div className="basket">
          <span className="basket__price">{ cartShopTotal } руб.</span>
          <span
            className="basket__btn"
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
              onClick={ () => {changeOpenModule(); handlerBasketBtn(); getDiscount()}}
            >
              оформить заказ
            </span>
          </div>
        </div>
      </div>)
}

export default Cash;