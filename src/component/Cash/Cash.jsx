import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Cash.css';

import CardBasket from '../CardBasket/CardBasket';

class Cash extends Component{
  state = {
    showShopCart: false,
  }
  handlerBasketBtn = () => {
    this.setState({showShopCart: !this.state.showShopCart})
  }
  render() {
    const { limit, cartShop, cartShopTotal, addInCartShop, removeInCartShop } = this.props;
    const { showShopCart } = this.state;
    return (
      <div className="cash">
        <p className="limit">Доступный лимит <span>{ limit } руб.</span></p>
        <div className="basket">
          <span className="basket__price">{ cartShopTotal } руб.</span>
          <span
            className="basket__btn"
            onClick={this.handlerBasketBtn}>
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
            <Link className={`btn order__btn ${cartShop.length === 0 && 'disabled'}`} to={cartShop.length > 0 && '/order'}>оформить заказ</Link>
          </div>
        </div>
      </div>)
  }
}

export default Cash;