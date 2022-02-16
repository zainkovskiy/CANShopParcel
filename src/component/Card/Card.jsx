import React, { Component } from "react";

import './Card.css';


class Card extends Component{
  state = {

  }
  render() {
  const { card, changeIsBlue, addInCartShop } = this.props;
    return (
      <div className="card">
        <div className="card__photo" style={{backgroundImage: `url(${card.background})`}}>
        </div>
        <div className="card__description">
          <div className="card__description-text">
            <span className="card__title">{ card.titleFull }</span>
            <span
              className="card__price">{ card.properties[0].price } руб.</span>
          </div>
          { card.titleFull === 'Баннер' ?
           <div className='card__check'>
             <label>
               <input name='card__photo_banner' type="radio"
                      checked={ card.color === 'blue' }
                      onChange={changeIsBlue}/>
               <span className="banner banner_blue">
               </span>
             </label>
             <label>
               <input name='card__photo_banner' type="radio"
                      checked={ card.color === 'red'}
                      onChange={changeIsBlue}/>
               <span className="banner banner_red">
               </span>
             </label>
            </div> : ''}
        </div>
        <div className="card__buttons">
          {card.properties.map(prop =>
            <span
            className="btn card__btn"
            data-id={ prop.id }
            data-background={ card.background }
            data-size={ prop.size }
            data-name={ card.titleShot }
            data-price={ prop.price }
            key={ prop.id }
            onClick={addInCartShop}
            >
              { prop.size } купить { card.titleFull === 'Баннер'? `${prop.price} руб.` : ''}
           </span>)}
        </div>
      </div>)
  }
}

export default Card;
