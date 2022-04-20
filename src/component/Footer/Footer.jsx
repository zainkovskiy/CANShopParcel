import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

export default function Footer(){
  return(
    <nav className="footer">
      <Link className="footer__link" to='brand_store/order'>Как сделать заказ</Link>
      <Link className="footer__link" to='brand_store/payment'>Способ оплаты</Link>
      <Link className="footer__link" to='brand_store/limits'>Лимиты</Link>
      <Link className="footer__link" to='brand_store/delivery'>Доставка</Link>
      <Link className="footer__link" to='brand_store/refund'>Возврат денежных средств</Link>
      <Link className="footer__link" to='brand_store/contact'>Контакты</Link>
    </nav>
  )
}