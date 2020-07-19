import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button } from '@material-ui/core';

export default function IconCart() {
  return (
    <div>
      <Button>
        <ShoppingCartOutlinedIcon />
        {/* <ShoppingCartIcon /> */}
      </Button>
    </div>
  );
}
