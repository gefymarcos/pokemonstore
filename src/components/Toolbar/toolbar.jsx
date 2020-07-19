import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import IconCart from '../IconCart/iconCart';

export default function AppBar({ themeColor, icon }) {
  return (
    <Toolbar style={{ background: themeColor, display: 'flex', flex: 1 }}>
      <Typography style={{ color: '#FAFAFA', display: 'flex', flex: 0.3 }}>
        <img src={icon} style={{ width: 32, height: 32 }} alt="icone do tipo escolhido" />
      </Typography>
      <Input
        placeholder="Pesquisar..."
        disableUnderline={false}
        style={{
          display: 'flex',
          flex: 0.7,
          color: '#FAFAFA',
          borderColor: '#FAFAFA',
        }}
      />
      <IconCart />
    </Toolbar>
  );
}
