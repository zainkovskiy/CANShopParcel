import React from "react";

import './Content.css';

import Card from '../Card/Card';

import CardPlan from "../CardPlan/Cardplan";

function Content (props){
    const { cardProduct, addInCartShop, userType } = props;
    return (
      <div className="content">
        <span className="content__title">продукция</span>
        <div className="cards">
          { cardProduct.map(card => <Card key={card.id} card={card} addInCartShop={addInCartShop} userType={userType}/>) }
          <CardPlan/>
        </div>
        <span className="content__info"> 
          *ВНИМАНИЕ! На рекламном материале будет указан корпоративный номер телефона
        </span>
      </div>
    )
}

export default Content;



