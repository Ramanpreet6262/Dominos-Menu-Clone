import React, { Component } from 'react';
import './MenuPage.css';

import Loader from '../../Components/Loader/Loader';
import QuantityButton from '../QuantityButton/QuantityButton';
import pizzas from '../../data/data';

import peppyPaneer from '../../static/Images/Pizzas/peppy_paneer.jpg';
import vegMarker from '../../static/assets/veg.svg';
import nonvegMarker from '../../static/assets/non_veg.svg';
import fav from '../../static/assets/favorite.svg';
import fillfav from '../../static/assets/fill_favorite.svg';
import customiseArrow from '../../static/assets/customise_arrow.svg';
import emptyCart from '../../static/assets/empty_cart.png';

class MenuPage extends Component {
  state = {
    data: [],
    cart: []
  };

  componentDidMount() {
    this.setState({ data: pizzas });
  }

  favHandler = id => {
    const newState = [...this.state.data];
    newState[id].favorite === 'true'
      ? (newState[id].favorite = 'false')
      : (newState[id].favorite = 'true');
    this.setState({ data: newState });
  };

  addToCartHandler = id => {
    const updatedState = [...this.state.data];
    updatedState[id].quantity += 1;
    let newCart = [...this.state.cart];
    if (!this.state.cart.includes(id)) {
      newCart.unshift(id);
    }
    this.setState({ data: updatedState, cart: newCart });
  };

  incQtyHandler = id => {
    const updatedState = [...this.state.data];
    updatedState[id].quantity += 1;
    this.setState({ data: updatedState });
  };

  decQtyHandler = id => {
    const updatedState = [...this.state.data];
    let newCart = [...this.state.cart];
    if (updatedState[id].quantity === 1) {
      const index = newCart.indexOf(id);
      newCart.splice(index, 1);
    }
    updatedState[id].quantity -= 1;
    this.setState({ data: updatedState, cart: newCart });
  };

  render() {
    if (this.state.data.length === 0) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <div className='menuPage flex-container'>
            {this.state.data.map((pizza, index) => {
              return (
                <div className='card text-white pizza-card' key={index}>
                  <img
                    src={peppyPaneer}
                    className='card-img-top'
                    alt='Peppy Paneer Pizza'
                  />
                  <div className='card-img-overlay img-overlay'>
                    <img
                      src={pizza.category === 'veg' ? vegMarker : nonvegMarker}
                      className='category-marker'
                      alt='veg/nonveg category'
                    />
                    <span className='pizza-price'>&#8377; {pizza.price}</span>
                    <button className='customise-button'>
                      CUSTOMISE{' '}
                      <img
                        src={customiseArrow}
                        className='customise-arrow'
                        alt='arrow'
                      />
                    </button>
                    <img
                      src={pizza.favorite === 'true' ? fillfav : fav}
                      className='fav-marker'
                      alt='favorite'
                      onClick={() => this.favHandler(pizza.id)}
                    />
                  </div>
                  <div className='card-body'>
                    <div className='title-div'>
                      <h5 className='card-title title-head'>{pizza.title}</h5>
                      <p className='card-text title-subhead'>
                        {pizza.description}
                      </p>
                    </div>
                    {pizza.quantity > 0 ? (
                      <div className='card-qty-btn'>
                        <QuantityButton
                          quantity={pizza.quantity}
                          onPlusClick={() => this.incQtyHandler(pizza.id)}
                          onMinusClick={() => this.decQtyHandler(pizza.id)}
                        />
                      </div>
                    ) : (
                      <button
                        type='button'
                        className='btn btn-outline-success float-right add-to-cart'
                        onClick={() => this.addToCartHandler(pizza.id)}
                      >
                        ADD TO CART
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className='cart-div'>
            {this.state.cart.length === 0 ? (
              <div className='card empty-cart-div'>
                <div>
                  <img
                    src={emptyCart}
                    className='card-img-right empty-cart-img'
                    alt='EMPTY CART'
                  />
                </div>
                <div className='card-body empty-cart-body'>
                  <p className='empty-cart-head'>YOUR CART IS EMPTY</p>
                  <p className='empty-cart-subhead'>
                    Please add some items from the menu.
                  </p>
                </div>
              </div>
            ) : (
              <React.Fragment>
                <div className='card cart-menu'>
                  <div className='cart-items'>
                    {this.state.cart.map((pizzaId, index) => (
                      <div className='cart-item' key={index}>
                        <img
                          src={peppyPaneer}
                          className='cart-img'
                          alt='pizza'
                        />
                        <p className='cart-item-title'>
                          {this.state.data[pizzaId].title}
                        </p>
                        <p className='cart-item-desc'>
                          {this.state.data[pizzaId].description}
                        </p>
                        <p className='cart-item-details'>
                          {this.state.data[pizzaId].size} |{' '}
                          {this.state.data[pizzaId].crust}
                        </p>
                        <div className='cart-qty-btn'>
                          <QuantityButton
                            quantity={this.state.data[pizzaId].quantity}
                            onPlusClick={() =>
                              this.incQtyHandler(this.state.data[pizzaId].id)
                            }
                            onMinusClick={() =>
                              this.decQtyHandler(this.state.data[pizzaId].id)
                            }
                          />
                        </div>
                        <div className='cart-item-price'>
                          <span>
                            &#8377;{' '}
                            {this.state.data[pizzaId].price *
                              this.state.data[pizzaId].quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='card cart-footer'>
                  <div className='subtotal-div'>
                    <span className='subtotal-head'>Subtotal</span>
                    <span className='subtotal-price'>
                      &#8377;{' '}
                      {this.state.cart.reduce(
                        (totalPrice, pizzaId) =>
                          totalPrice +
                          this.state.data[pizzaId].price *
                            this.state.data[pizzaId].quantity,
                        0
                      )}
                    </span>
                  </div>
                  <div>
                    <button className='checkout-btn'>
                      <span className='checkout-text'>CHECKOUT</span>
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MenuPage;

/* 
crust: 'New Hand Tossed',
size: 'Regular'
    
Then customise de click te side modal and update value
*/
