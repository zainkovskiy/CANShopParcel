import React, { Component } from "react";

import Header from '../Header/Header';
import Cash from '../Cash/Cash';
import Content from "../Content/Content";
import Preloader from "../Preloader/Preloader";
import Modal from '../Modal/Modal';
import Snackbar from '../Snackbar/Snackbar';

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
    openSnackbar: false,
    textSnackbar: 'Товар добавлен в корзину',
  }

  addInCartShop = (id) => {
    const shopCart = this.state.cartShop;
    const find = shopCart.find(item => item.id === id);
    if (find){
      find.quantity ++;
      this.setState({
        cartShop: shopCart,
        cartShopTotal: this.state.cartShopTotal + +find.price,
        cartShopTotalQuantity: this.state.cartShopTotalQuantity + 1,
        openSnackbar: true,
      });
    } else {
      fetch('https://crm.centralnoe.ru/dealincom/assets/json/CANShopSearchCard.json').then(res => {
        res.json().then(data => {
          const product = data.find(item => item.id === id);
          product.quantity = 1;
          shopCart.push(product);
          this.setState({
            cartShop: shopCart,
            cartShopTotal: this.state.cartShopTotal + +product.price,
            cartShopTotalQuantity: this.state.cartShopTotalQuantity + 1,
            openSnackbar: true,
          })
        })
      })
    }
    setTimeout(() => {
      this.setState({openSnackbar: false,})
    }, 1500)
  }
  removeInCartShop = (id) => {
    const shopCart = this.state.cartShop;
    const find = shopCart.find(item => item.id === id);
    if (find.quantity > 1){
      find.quantity--;
    } else {
      shopCart.splice(shopCart.indexOf(find), 1);
      shopCart.length === 0 && this.setState({showShopCart: this.state.openModal = false});
    }
    this.setState({
      cartShop: shopCart,
      cartShopTotalQuantity: this.state.cartShopTotalQuantity - 1,
      cartShopTotal: this.state.cartShopTotal - +find.price
    });
  }

  handlerBasketBtn = () => {
    this.setState({showShopCart: !this.state.showShopCart})
  }
  changeOpenModule = () => {
    this.setState({openModal: !this.state.openModal})
  }

  getDiscount = () => {
    this.setState({preloaderModal: true})
    this.getData(data => {
      this.setState({discount: data.discount, orderUID: data.UID, preloaderModal: false})
    }, {
      action : "startTransaction",
      userId : currentUserId,
      price : this.state.cartShopTotal
    })
  }
  productPay = () => {
    this.setState({preloaderModal: true})
    this.getData(data => {
      this.changeOpenModule();
      this.setState({openSnackbar: true, textSnackbar: 'Заказ добавлен', preloaderModal: false}, () => {
        setTimeout(() => {
          localStorage.clear();
          location.reload();
        },1000);
      })
    }, {
      action: 'commitTransaction',
      UID: this.state.orderUID,
      price: this.state.cartShopTotal,
      discount: this.state.discount,
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
      cartShopTotalQuantity, preloaderStart, discount, openSnackbar, textSnackbar } = this.state;
    return(
      <>
        {!preloaderStart ?
          <>
            <Snackbar open={openSnackbar} message={textSnackbar}/>
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
    this.getData(user => {
      user.limits ? this.setState({limit: user.limits}) : this.setState({limit: 0});
      fetch('https://crm.centralnoe.ru/dealincom/assets/json/CANShopCardList.json').then(res => {
        res.json().then(data => {
          this.setState({
            preloaderStart: false,
            cardProduct: data
          })
        })
      })
    }, {
      action: 'getLimit',
      userId: currentUserId,
      userLogin: currentUserLogin,
    })
  }
  componentDidUpdate() {
    localStorage.setItem('cartShop', JSON.stringify(this.state.cartShop));
    localStorage.setItem('cartShopTotal', this.state.cartShopTotal);
    localStorage.setItem('cartShopTotalQuantity', this.state.cartShopTotalQuantity);
  }
}

export default App;