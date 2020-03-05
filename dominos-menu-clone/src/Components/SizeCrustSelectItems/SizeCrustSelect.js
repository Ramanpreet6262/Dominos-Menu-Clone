import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './SizeCrustSelect.css';

const useStyles = makeStyles(theme => ({
  select: {
    fontSize: '12px'
  },
  root: {
    fontSize: '12px'
  },
  priceColor: {
    color: '#8EA81A',
    fontWeight: 'bold',
    marginLeft: '12px'
  }
}));

const SizeCrustSelect = props => {
  const classes = useStyles();

  return (
    <>
      <div className='size-select'>
        <FormControl>
          <InputLabel id='demo-simple-select-label'>Size</InputLabel>
          <Select
            name='size'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            className={classes.select}
            value={props.pizza.size}
            onChange={event => props.onChange(event, props.pizza.id)}
          >
            {props.pizza.availableSizes.map((size, index) => {
              return (
                <MenuItem value={size} key={index} className={classes.root}>
                  {size}{' '}
                  <span className={classes.priceColor}>
                    &#8377;{' '}
                    {props.pizza.availableCrusts[size][props.pizza.crust]}
                  </span>
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
            className={classes.select}
            value={props.pizza.crust}
            onChange={event => props.onChange(event, props.pizza.id)}
          >
            {Object.entries(props.pizza.availableCrusts[props.pizza.size]).map(
              ([keyy, value], index) => {
                return (
                  <MenuItem value={keyy} key={index} className={classes.root}>
                    {keyy}{' '}
                    <span className={classes.priceColor}>&#8377; {value}</span>
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
