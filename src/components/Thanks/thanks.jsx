import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './thanks.css';

export default function Thanks() {
  return (
    <div className="thanks-container">
      <Typography className="thanks-title">
        Obrigado!!!
      </Typography>
      <Typography className="thanks-subtitle">
        Para sua próxima compra use o cupom MINHACOMPRA10 e ganhe 10% de desconto em nossas lojas.
      </Typography>
      <Button>
        <Link to="/">Voltar a comprar</Link>
      </Button>
    </div>
  );
}
