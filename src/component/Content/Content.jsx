import React from "react";

import './Content.css';

import Card from '../Card/Card';

function Content (props){
    const { cardProduct, addInCartShop } = props;
    return (
      <div className="content">
        <span className="content__title">продукция</span>
        <div className="cards">
          { cardProduct.map(card => <Card key={card.id} card={card} addInCartShop={addInCartShop}/>) }
        </div>
      </div>
    )
}

export default Content;



