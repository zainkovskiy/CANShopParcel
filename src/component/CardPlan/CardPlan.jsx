import React from "react";

import img from '../../img/plan.jpg';


export default function CardPlan(){
  return(
    <div className="card">
    <div className="card__photo" style={{backgroundImage: `url(${img})`}}>
    </div>
    <div className="card__description">
      <div className="card__description-text">
        <span className="card__title">Планировки</span>
      </div>
    </div>
    <div className="card__buttons">
      <a
        className="btn card__btn"
        href="https://crm.centralnoe.ru/company/personal/user/2283/disk/path/%D0%9E%D0%9C%D0%B8%D0%A0%2015.02.2022/%D0%9F%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8/"
        target="_blank"
      >
        перейти в каталог
      </a>
    </div>
  </div>
  )
}