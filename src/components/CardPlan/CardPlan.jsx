import React from "react";
import { useNavigate } from "react-router-dom";

import img from '../../img/plan.jpg';


export default function CardPlan() {
  const navigate = useNavigate();
  
  const handleTransition = () => {
    navigate('/brand_store/orderPlan')
  }

  return (
    <div className="card">
      <div className="card__photo" style={{ backgroundImage: `url(${img})` }}>
      </div>
      <div className="card__description">
        <div className="card__description-text">
          <span className="card__title">Планировки</span>
          <span className="card__price">0 руб.</span>
        </div>
      </div>
      <div className="card__buttons">
        <a
          className="btn card__btn"
          href="https://crm.centralnoe.ru/~O4rfY"
          target="_blank"
        >
          перейти в каталог
        </a>
        {/* <span className="btn card__btn"
          onClick={handleTransition}
        >заказать</span> */}
      </div>
    </div>
  )
}