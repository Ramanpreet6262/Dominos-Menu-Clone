import React from 'react';
import './QuantityButton.css';

import plusIcon from '../../static/assets/plus.svg';
import deleteIcon from '../../static/assets/delete_icon.svg';
import minusIcon from '../../static/assets/minus.svg';

const QuantityButton = props => {
  return (
    <div className='qty-btn'>
      <div className='delete-div' onClick={props.onMinusClick}>
        <img
          src={props.quantity > 1 ? minusIcon : deleteIcon}
          className='delete-icon'
          alt='decrease'
        />
      </div>
      <span className='qty'>{props.quantity}</span>
      <div className='plus-div' onClick={props.onPlusClick}>
        <img src={plusIcon} className='plus-icon' alt='increase' />
      </div>
    </div>
  );
};

export default QuantityButton;
