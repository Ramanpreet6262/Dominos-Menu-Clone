import React, { Component } from 'react';
import './MenuPage.css';

import peppyPaneer from '../../static/Images/Pizzas/peppy_paneer.jpg';
import vegMarker from '../../static/assets/veg.svg';
import nonvegMarker from '../../static/assets/non_veg.svg';
import fav from '../../static/assets/favorite.svg';
import fillfav from '../../static/assets/fill_favorite.svg';
import customiseArrow from '../../static/assets/customise_arrow.svg';


class MenuPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='menuPage flex-container'>
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
          >
            <img
              src={peppyPaneer}
              className='card-img-top'
              alt='Peppy Paneer Pizza'
            />
            <div class="card-img-overlay">
              <img src={vegMarker} className='category-marker' alt='veg' />
              <span className='pizza-price'>&#8377; 215</span>
              <button className='customise-button'>CUSTOMISE <img src={customiseArrow} className='customise-arrow' alt='arrow' /></button>
              <img src={fav} className='fav-marker' alt='favorite' />
            </div>
            <div className='card-body'>
              <div className='title-div'>
                <h5 className='card-title title-head'>Peppy Paneer</h5>
                <p className='card-text title-subhead'>
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
              </div>
              <button
                type='button'
                className='btn btn-outline-success float-right'
                style={{
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '.375rem .5rem'
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>

{/* 
          <div
            className='card'
            style={{
              width: '23rem',
              border: '1px solid #fff',
              boxShadow:
                'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
              marginBottom: '40px',
              marginRight: '30px'
            }}
          >
            <img
              src={peppyPaneer}
              className='card-img-top'
              alt='Peppy Paneer Pizza'
            />
            <div className='card-body'>
              <div className='title-div'>
                <h5 className='card-title title-head'>Peppy Paneer &#8377;</h5>
                <p className='card-text title-subhead'>
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
              </div>
              <button
                type='button'
                className='btn btn-outline-success float-right'
                style={{
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '.375rem .5rem'
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>



          <div
            className='card'
            style={{
              width: '23rem',
              border: '1px solid #fff',
              boxShadow:
                'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
              marginBottom: '40px',
              marginRight: '30px'
            }}
          >
            <img
              src={peppyPaneer}
              className='card-img-top'
              alt='Peppy Paneer Pizza'
            />
            <div className='card-body'>
              <div className='title-div'>
                <h5 className='card-title title-head'>Peppy Paneer &#8377;</h5>
                <p className='card-text title-subhead'>
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
              </div>
              <button
                type='button'
                className='btn btn-outline-success float-right'
                style={{
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '.375rem .5rem'
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>



          <div
            className='card'
            style={{
              width: '23rem',
              border: '1px solid #fff',
              boxShadow:
                'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
              marginBottom: '40px',
              marginRight: '30px'
            }}
          >
            <img
              src={peppyPaneer}
              className='card-img-top'
              alt='Peppy Paneer Pizza'
            />
            <div className='card-body'>
              <div className='title-div'>
                <h5 className='card-title title-head'>Peppy Paneer &#8377;</h5>
                <p className='card-text title-subhead'>
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
              </div>
              <button
                type='button'
                className='btn btn-outline-success float-right'
                style={{
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '.375rem .5rem'
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>



          <div
            className='card'
            style={{
              width: '23rem',
              border: '1px solid #fff',
              boxShadow:
                'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
              marginBottom: '40px',
              marginRight: '30px'
            }}
          >
            <img
              src={peppyPaneer}
              className='card-img-top'
              alt='Peppy Paneer Pizza'
            />
            <div className='card-body'>
              <div className='title-div'>
                <h5 className='card-title title-head'>Peppy Paneer &#8377;</h5>
                <p className='card-text title-subhead'>
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
              </div>
              <button
                type='button'
                className='btn btn-outline-success float-right'
                style={{
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '.375rem .5rem'
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>



          <div
            className='card'
            style={{
              width: '23rem',
              border: '1px solid #fff',
              boxShadow:
                'rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
              marginBottom: '40px',
              marginRight: '30px'
            }}
          >
            <img
              src={peppyPaneer}
              className='card-img-top'
              alt='Peppy Paneer Pizza'
            />
            <div className='card-body'>
              <div className='title-div'>
                <h5 className='card-title title-head'>Peppy Paneer &#8377;</h5>
                <p className='card-text title-subhead'>
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
              </div>
              <button
                type='button'
                className='btn btn-outline-success float-right'
                style={{
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '.375rem .5rem'
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>

           */}

        </div>
      </React.Fragment>
    );
  }
}

export default MenuPage;
