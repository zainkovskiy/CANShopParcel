import React, {useEffect} from 'react';

import './Modal.css';
import CardBasket from "../CardBasket/CardBasket";
import Preloader from "../Preloader/Preloader";

function Modal (props) {

  useEffect(() => {
    const htmlDom = document.querySelector('html');
    if (openModal){
      htmlDom.setAttribute('style', 'overflow: hidden;')
    } else {
      htmlDom.removeAttribute('style')
    }
  })

  const { cartShop, openModal, addInCartShop, preloaderModal,
    removeInCartShop, changeOpenModule, cartShopTotalQuantity,
    cartShopTotal, discount, productPay, limit } = props;
  const modalStyle = {
    top: `${window.pageYOffset}px`,
  };
  return <div className={`modal ${openModal && 'modal_active'}`}>
            { !preloaderModal ?
              <div className={`modal__window ${openModal && 'modal__window_active'}`}>
              <div className="modal__header">
                Корзина
                <span
                  className='modal__close'
                  onClick={changeOpenModule}
                >
                </span>
              </div>
              <div className="modal__body">
                {
                  cartShop.map(card =>
                    <CardBasket
                      key={card.id}
                      card={card}
                      addInCartShop={addInCartShop}
                      removeInCartShop={removeInCartShop}
                    />
                  )
                }
              </div>
              <div className="modal__footer">
                { discount > 0 && <p>Скидка { discount } руб.</p> }
                <p>Итого <i> </i>
                  { cartShopTotalQuantity }<i> </i>
                  { cartShopTotalQuantity[cartShopTotalQuantity.length - 1] === 1 ? 'позиция' : 'позиций'}<i> </i>
                  на сумму <i> </i>
                  <span className={ limit < cartShopTotal - discount && 'modal__error' }>
                    { cartShopTotal - discount < 0 ? 0 : cartShopTotal - discount } руб.
                  </span>
                </p>
                <div className='modal__buttons'>
                  <button
                    className={`modal__btn modal__btn_blue ${ limit < cartShopTotal - discount && 'modal__btn_disabled'}`}
                    onClick={ productPay }
                  >купить</button>
                  <button
                    className='modal__btn modal__btn_red'
                    onClick={ changeOpenModule }
                  >отмена</button>
                </div>
              </div>
            </div>
              : <Preloader/>
            }
          </div>
}

export default Modal;