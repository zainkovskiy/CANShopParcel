import React, { Component } from "react";

import ColorCheckbox from "../ColorCheckbox/ColorCheckbox";

class Test extends Component{
  state = {
    colorId: this.props.card.color.length > 0 ? this.props.card.color[0].id : '',
    sizeId: this.props.card.size.length > 0 ? this.props.card.size[0].id : '',
    price: this.props.card.price,
    background: this.props.card.background
  }
  changeColor = (id, image) =>{
    this.setState({
      colorId: id,
      background: image
    })
  }
  render() {
    const { card, addInCartShop } = this.props;
    return (
      <div className="card">
        <div className="card__photo" style={{backgroundImage: `url(${this.state.background})`}}>
        </div>
        <div className="card__description">
          <div className="card__description-text">
            <span className="card__title">{ card.name }</span>
            <span
              className="card__price">{ this.state.price } руб.</span>
          </div>
          <div className='card__check'>
          {
            card.color.length > 0 ? card.color.map(color =>
              <ColorCheckbox
                key={color.id}
                color={color}
                name={ card.name }
                colorId={this.state.colorId}
                changeColor={this.changeColor}
              />) : ''
          }
          </div>
        </div>
        <div className="card__buttons">
          <span
            className="btn card__btn"
            onClick={()=>addInCartShop(card.id+this.state.colorId+this.state.sizeId)}
          >купить</span>
        </div>
      </div>
    )
  }
}

export default Test;