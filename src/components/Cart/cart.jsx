import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';

export default function Cart() {
  const [state, setState] = React.useState({ isOpen: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, isOpen: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250, height: '100vh' }}
    >
      <Typography style={{ fontSize: 18, padding: 20, minHeight: 30 }}>
        Carrinho
      </Typography>
      <Divider />
      <List>
        {['Pikachu'].map((text) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
            <ListItemText secondary="R$15,00" />
          </ListItem>
        ))}
      </List>
      <Divider />
      <div style={{ position: 'fixed', bottom: 0 }}>
        <Typography style={{ minHeight: 30 }}>
          Total: R$15,00
        </Typography>
        <Button style={{ minHeight: 30 }}>
          Finalizar
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={state.isOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
