import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import crm from '../../img/crm.png';
import shop from '../../img/shop.png';
import card from '../../img/card.png';
import shopCart from '../../img/shopCart.png';
import order from '../../img/order.png';

export default function Order() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      <div className="subtitle">
        Как сделать заказ
        <Button
          onClick={() => navigate('/brand_store')}
          variant="text"
          size='small'
        >
          Назад
        </Button>
      </div>
      <ol className="footer__list">
        <li>
          Для заказа рекламной продукции необходимо зайти на сайт магазина по ссылке &nbsp;
          <a href="https://crm.centralnoe.ru/brand_store/">https://crm.centralnoe.ru/brand_store/</a> либо найти магазин на левом сайт-баре
          <img className="img_50" src={crm} />
          <img className="img_50" src={shop} />
        </li>
        <li>
          Для выбора продукта необходимо навести мышку в центр окошка с товаром. При наведении мыши появится кнопка купить.
          <img className="img_35" src={card} />
        </li>
        <li>
          Проверить свой заказ, нажав на корзину <span className="basket__btn basket__btn-order"></span> в правом верхнем углу.
          <img className="img_35" src={shopCart} />
          Отредактировать количество необходимого товара вы можете в корзине. 
          Для этого необходимо нажать значки &nbsp;
          <span className="shop-cart__btn shop-cart__btn-minus" style={{ display: 'inline-block' }}></span> &nbsp;
          или &nbsp;
          <span className="shop-cart__btn shop-cart__btn-plus" style={{ display: 'inline-block' }}></span>
        </li>
        <li>
          Далее нажать кнопку Оформить заказ <span className="btn order__btn false" style={{display: 'inline-block'}}>оформить заказ</span>
        </li>
        <li>
          В появившемся окне необходимо проверить заказ, нажать кнопку Купить &nbsp;
          <button className="modal__btn modal__btn_blue ">купить</button>
          <img className="img_35" src={order} />
        </li>
      </ol>
    </>
  )
}