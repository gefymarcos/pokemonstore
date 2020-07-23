import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openCart } from '../../actions/pokemon-actions';

export default function IconCart() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(openCart())}>
        <ShoppingCartIcon />
      </Button>
    </div>
  );
}
