import React, { Component } from "react";

import Header from '../Header/Header';
import Cash from '../Cash/Cash';
import Content from "../Content/Content";

class App extends Component{
  state = {
    limit: '',
    cartShop: [],
    cartShopTotal: 0,
    cardProduct: [],
  }
  addInCartShop = (event) => {
    const dataset = event.target.dataset;
    const shopCart = this.state.cartShop;
    const find = shopCart.find(item => item.id === dataset.id);
    if (find) {
      find.quantity ++;
      this.setState({cartShop: shopCart});
    } else {
      shopCart.push({
        id: dataset.id,
        name: dataset.name,
        price: dataset.price,
        size: dataset.size,
        background: dataset.background,
        quantity: 1
      })
      this.setState({cartShop: shopCart});
    }
    this.setState({cartShopTotal: this.state.cartShopTotal + +dataset.price});
  }
  removeInCartShop = (event) => {
    const dataset = event.target.dataset;
    const shopCart = this.state.cartShop;
    const find = shopCart.find(item => item.id === dataset.id);
    if (find.quantity > 1){
      find.quantity--;
      this.setState({cartShop: shopCart});
    } else {
      shopCart.splice(shopCart.indexOf(find), 1);
      this.setState({cartShop: shopCart});
    }
    this.setState({cartShopTotal: this.state.cartShopTotal - +dataset.price});
  }
  render() {
    const { limit, cartShop, cardProduct, cartShopTotal } = this.state;
    return(
      <>
        {limit && cardProduct.length > 0 ?
          <>
            <Header/>
            <Cash
              limit={limit}
              cartShop={cartShop}
              addInCartShop={this.addInCartShop}
              removeInCartShop={this.removeInCartShop}
              cartShopTotal={cartShopTotal}
            />
            <Content
              cardProduct={cardProduct}
              addInCartShop={this.addInCartShop}
            />
          </> : <p>404</p> }
      </>
    )
  }

  componentDidMount() {
    this.setState({limit: 250});
    this.setState({cardProduct: [
        {
          id: 1,
          name: 'badge',
          titleShot: "Бейдж",
          titleFull: "Бейдж",
          properties: [
            {
              id: 1,
              price: 105,
              size: '',
            }
          ],
          background: "https://crm.centralnoe.ru/dealincom/assets/badge.png"
        },
       {
          id: 2,
          name: 'diary',
          titleShot: "Ежедневник",
          titleFull: "Ежедневник",
          properties: [
            {
              id: 2,
              price: 300,
              size: '',
            }
          ],
          background: "https://crm.centralnoe.ru/dealincom/assets/diary.jfif"
        },
        {
          id: 3,
          name: 'stiker',
          titleShot: "Наклейка на авто",
          titleFull: "Наклейка на авто 1x0.35мм",
          properties: [
            {
              id: 3,
              price: 315,
              size: '',
            }
          ],
          background: "https://crm.centralnoe.ru/dealincom/assets/stiker.png"
        },
        {
          name: 'banner',
          blue: {
            id: 4,
            titleShot: "Баннер",
            titleFull: "Баннер",
            properties: [
              {
                id: 4.1,
                price: 340,
                size: '2x1м',
              },
              {
                id: 4.2,
                price: 255,
                size: '1.5x0.8м',
              },
              {
                id: 4.3,
                price: 136,
                size: '1x0.7м',
              }
            ],
            background: "https://crm.centralnoe.ru/dealincom/assets/banner_blue.jpg",
            color: 'blue'
          },
          red: {
            id: 5,
            titleShot: "Баннер",
            titleFull: "Баннер",
            properties: [
              {
                id: 5.1,
                price: 340,
                size: '2x1м',
              },
              {
                id: 5.2,
                price: 255,
                size: '1.5x0.8м',
              },
              {
                id: 5.3,
                price: 136,
                size: '1x0.7м',
              }
            ],
            background: "https://crm.centralnoe.ru/dealincom/assets/banner_red.jpg",
            color: 'red'
          },
        },
        {
          id: 6,
          name: 'pens',
          titleShot: "Ручка",
          titleFull: "Ручка брендировнная (5шт)",
          properties: [
            {
              id: 6,
              price: 100,
              size: '',
            }
          ],
          background: "https://crm.centralnoe.ru/dealincom/assets/pens.jfif"
        },
        {
          id: 7,
          name: 'business_card',
          titleShot: "Визитка",
          titleFull: "Визитка (96шт)",
          properties: [
            {
              id: 7,
              price: 192,
              size: '',
            }
          ],
          background: "https://crm.centralnoe.ru/dealincom/assets/business_card.png"
        },
      ]});
    fetch('https://raw.githubusercontent.com/zainkovskiy/CANShopParcel/2517e8d1cee4021070ea276e77f47de3b3e206da/cardList.json').then(res => {
      res.json().then(data => {
        console.log(data)
      })
    })
  }
}

export default App;