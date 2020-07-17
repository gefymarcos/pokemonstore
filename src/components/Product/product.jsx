import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

export default function Product() {
  return (
    <Card style={{ margin: 10, padding: 10 }}>
      <img src="./src" alt="texto" />
      <Typography>Nome: Pikachu</Typography>
      <Typography>Preço: R$ 50,00</Typography>
      <Divider />
      <Button>Comprar</Button>
    </Card>
  );
}
