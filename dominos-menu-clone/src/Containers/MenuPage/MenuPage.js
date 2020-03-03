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
    console.log(this.state.cart);
    if (this.state.data.length === 0) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <div className='menuPage flex-container'>
            {this.state.data.map((pizza, index) => {
              return (
                <div
                  className='card text-white'
                  style={{
                    width: '23rem',
                    border: '1px solid #fff',
                    boxShadow:
                      'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
                    marginBottom: '40px',
                    marginRight: '30px'
                  }}
                  key={index}
                >
                  <img
                    src={peppyPaneer}
                    className='card-img-top'
                    alt='Peppy Paneer Pizza'
                  />
                  <div className='card-img-overlay' style={{ height: '142px' }}>
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
                      <QuantityButton
                        quantity={pizza.quantity}
                        onPlusClick={() => this.incQtyHandler(pizza.id)}
                        onMinusClick={() => this.decQtyHandler(pizza.id)}
                      />
                    ) : (
                      <button
                        type='button'
                        className='btn btn-outline-success float-right'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '0.75rem',
                          padding: '.375rem .5rem'
                        }}
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
            {/* {this.state.cart.length === 0 ? (
              <div
                className='card'
                style={{
                  width: '21rem',
                  border: '1px solid #fff',
                  boxShadow:
                    'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px'
                }}
              >
                <div>
                  <img
                    src={emptyCart}
                    className='card-img-right'
                    alt='EMPTY CART'
                    style={{
                      width: '175px',
                      position: 'absolute',
                      top: '0px',
                      right: '0px'
                    }}
                  />
                </div>
                <div
                  className='card-body'
                  style={{ height: '150px', marginTop: '270px' }}
                >
                  <p className='empty-cart-head'>YOUR CART IS EMPTY</p>
                  <p className='empty-cart-subhead'>
                    Please add some items from the menu.
                  </p>
                </div>
              </div>
            ) : null} */}
            <div
              className='card'
              style={{
                width: '21rem',
                height: '350px',
                overflowY: 'scroll',
                border: '1px solid #fff',
                borderTop: '3px solid #82BB37',
                boxShadow:
                  'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px'
              }}
            ></div>
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

Then Add to Cart de click te add to cart and cart da sarra logic also logic of counter of quantities and price
    
Then customise de click te side modal and update value
*/
