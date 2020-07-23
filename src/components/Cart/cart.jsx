import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import './cart.css';
import formatCurrency from '../../utils/number';
import { clearCart } from '../../actions/pokemon-actions';

function Cart({ cart, themeColor, isOpenCart }) {
  const [state, setState] = React.useState({ isOpen: false, total: 0 });
  const dispatch = useDispatch();

  const sumTotal = () => cart.reduce((total, pokemon) => total + pokemon.price, 0);

  useEffect(() => {
    setState({
      isOpen: true,
      total: sumTotal(),
    });
  }, [cart]);

  useEffect(() => {
    setState({ isOpen: true });
  }, [isOpenCart]);

  const toggleDrawer = (open) => () => setState({ ...state, isOpen: open });

  const isOpen = () => cart.length > 0 && state.isOpen;

  const list = () => (
    <div
      role="presentation"
      className="cart-container"
    >
      <Typography className="cart-title">
        Carrinho
      </Typography>
      <Divider />
      <List className="cart-list-items">
        {cart.map((pokemon, index) => (
          <ListItem key={index}>
            <ListItemText primary={pokemon.name} />
            <ListItemText className="price" secondary={formatCurrency(pokemon.price)} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="cart-total-section">
        <div className="cart-total">
          <Typography className="cart-total-label">
            Total:
          </Typography>
          <Typography className="cart-total-price">
            {formatCurrency(state.total)}
          </Typography>
        </div>
        <Divider />
        <Button
          variant="contained"
          className="cart-total-button"
          style={{ backgroundColor: themeColor }}
          onClick={() => dispatch(clearCart())}
        >
          <Link to="/thanks" className="cart-total-button-label">Finalizar</Link>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen()}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

function mapStateToProps(state) {
  const { pokemonState } = state;
  return {
    cart: [...pokemonState.cart],
    isOpenCart: pokemonState.isOpenCart,
  };
}

export default React.memo(connect(mapStateToProps)(Cart));
