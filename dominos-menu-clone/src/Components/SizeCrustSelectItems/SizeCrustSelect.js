import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './SizeCrustSelect.css';

const SizeCrustSelect = props => {
  return (
    <>
      <div className='size-select'>
        <FormControl>
          <InputLabel id='demo-simple-select-label'>Size</InputLabel>
          <Select
            name='size'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={props.pizza.size}
            onChange={event => props.onChange(event, props.pizza.id)}
          >
            {props.pizza.availableSizes.map((size, index) => {
              return (
                <MenuItem value={size} key={index}>
                  {size} &#8377;{' '}
                  {props.pizza.availableCrusts[size][props.pizza.crust]}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      <div className='crust-select'>
        <FormControl>
          <InputLabel id='demo-simple-select-label'>Crust</InputLabel>
          <Select
            name='crust'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={props.pizza.crust}
            onChange={event => props.onChange(event, props.pizza.id)}
          >
            {Object.entries(props.pizza.availableCrusts[props.pizza.size]).map(
              ([keyy, value], index) => {
                return (
                  <MenuItem value={keyy} key={index}>
                    {keyy} &#8377; {value}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default SizeCrustSelect;
