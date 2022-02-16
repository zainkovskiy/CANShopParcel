import React, { Component } from "react";

import './Content.css';
import Card from '../Card/Card';

class Content extends Component{
  state = {
    isBlue: true,
  }
  changeIsBlue = () => {
    this.setState({isBlue: !this.state.isBlue})
  }
  render() {
    const { cardProduct, addInCartShop } = this.props;
    const { isBlue } = this.state;
    return (
      <div className="content">
        <span className="content__title">продукция</span>
        <div className="cards">
          {cardProduct.map(card => card.name === 'banner'
            ? <Card key={isBlue ? card.blue.id : card.red.id}
                    card={isBlue ? card.blue : card.red}
                    changeIsBlue={this.changeIsBlue}
                    addInCartShop={addInCartShop}/>
            : <Card key={card.id}
                    card={card}
                    addInCartShop={addInCartShop}/>)}
        </div>
      </div>
    )
  }
}

export default Content;



const arr = [
  {
    id: '0',
    name:'banner',
    price: '400',
    image: 'url',
    size: [
      {'4x4': 200},
      {'5x5': 300},
      {'6x6': 400},
    ],
    color: [
      {'red': 'url'},
      {'blue': 'url'},
    ]
  },

]