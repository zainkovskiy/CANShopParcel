import React, { Component } from "react";

import Header from '../Header/Header';
import Cash from '../Cash/Cash';
import Content from "../Content/Content";
import Preloader from "../Preloader/Preloader";
import Modal from '../Modal/Modal';

class App extends Component{
  state = {
    limit: '',
    preloaderStart: false,
    preloaderModal: false,
    cartShop: [],
    cartShopTotal: 0,
    cartShopTotalQuantity: 0,
    cardProduct: [],
    showShopCart: false,
    openModal: false,
    discount: '',
    orderUID: '',
  }
  addInCartShop = (event) => {
    const dataset = event.target.dataset;
    const shopCart = this.state.cartShop;
    const find = shopCart.find(item => item.id === dataset.id);
    if (find) {
      find.quantity ++;
    } else {
      shopCart.push({
        id: dataset.id,
        name: dataset.name,
        price: dataset.price,
        size: dataset.size,
        background: dataset.background,
        quantity: 1
      })
    }
    this.setState({
      cartShop: shopCart,
      cartShopTotal: this.state.cartShopTotal + +dataset.price,
      cartShopTotalQuantity: this.state.cartShopTotalQuantity + 1,
    });
  }
  removeInCartShop = (event) => {
    const dataset = event.target.dataset;
    const shopCart = this.state.cartShop;
    const find = shopCart.find(item => item.id === dataset.id);
    if (find.quantity > 1){
      find.quantity--;
    } else {
      shopCart.splice(shopCart.indexOf(find), 1);
      shopCart.length === 0 && this.setState({showShopCart: this.state.openModal = false});
    }
    this.setState({
      cartShop: shopCart,
      cartShopTotalQuantity: this.state.cartShopTotalQuantity - 1,
      cartShopTotal: this.state.cartShopTotal - +dataset.price
    });
  }

  handlerBasketBtn = () => {
    this.setState({showShopCart: !this.state.showShopCart})
  }
  changeOpenModule = () => {
    this.setState({openModal: !this.state.openModal})
  }

  getDiscount = () => {
    // this.setState({preloaderModal: true})
    // this.getData(data => {
    //   this.setState({discount: data.discount, orderUID: data.UID, preloaderModal: false})
    // }, {
    //   action : "startTransaction",
    //   userId : 2921,
    //   price : this.state.cartShopTotal
    // })
  }
  productPay = () => {
    this.setState({preloaderModal: true})
    this.getData(data => {
      console.log(data)
      this.setState({preloaderModal: true})
      this.changeOpenModule();
    }, {
      action: 'commitTransaction',
      UID: this.state.orderUID,
      price: this.state.cartShopTotal - this.state.discount,
      items: this.state.cartShop,
    })
  }

  getData(callback, requestData){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Market/Controller.php", true);

    xhr.responseType = 'json';
    xhr.send(JSON.stringify(requestData));

    xhr.onload = () => {
      callback(xhr.response);
    };
  }

  render() {
    const { limit, cartShop, cardProduct, preloaderModal,
      cartShopTotal, openModal, showShopCart,
      cartShopTotalQuantity, preloaderStart, discount } = this.state;
    return(
      <>
        {!preloaderStart ?
          <>
            <div className='container'>
            <Header/>
            <Cash
              limit={limit}
              cartShop={cartShop}
              addInCartShop={this.addInCartShop}
              removeInCartShop={this.removeInCartShop}
              cartShopTotal={cartShopTotal}
              changeOpenModule={this.changeOpenModule}
              handlerBasketBtn={this.handlerBasketBtn}
              showShopCart={showShopCart}
              getDiscount={this.getDiscount}
            />
            <Content
              cardProduct={cardProduct}
              addInCartShop={this.addInCartShop}
            />
            </div>
            <Modal
              cartShop={cartShop}
              openModal={openModal}
              cartShopTotal={cartShopTotal}
              addInCartShop={this.addInCartShop}
              removeInCartShop={this.removeInCartShop}
              changeOpenModule={this.changeOpenModule}
              cartShopTotalQuantity={cartShopTotalQuantity}
              discount={discount}
              productPay={this.productPay}
              limit={limit}
              preloaderModal={preloaderModal}
            />
          </> :
            <Preloader/>
        }
      </>
    )
  }

  componentDidMount() {
    this.setState({preloaderStart: true})
    this.setState({cartShop: localStorage.getItem('cartShop') ? JSON.parse(localStorage.getItem('cartShop')) : []});
    this.setState({cartShopTotal: localStorage.getItem('cartShopTotal') ? +localStorage.getItem('cartShopTotal') : 0});
    this.setState({cartShopTotalQuantity: localStorage.getItem('cartShopTotalQuantity') ? +localStorage.getItem('cartShopTotalQuantity') : 0});
    // this.getData(data => {
    //   data.limits && this.setState({limit: data.limits});
    //   this.setState({preloaderStart: false})
    // }, {
    //   action: 'getLimit',
    //   userId: 2921,
    //   userLogin: 'zainkovskiyaa',
    // })
    this.setState({limit: 700});
    this.setState({preloaderStart: false})
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
  }
  componentDidUpdate() {
    localStorage.setItem('cartShop', JSON.stringify(this.state.cartShop));
    localStorage.setItem('cartShopTotal', this.state.cartShopTotal);
    localStorage.setItem('cartShopTotalQuantity', this.state.cartShopTotalQuantity);
  }
}

export default App;