import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

export default function AppBar() {
  return (
    <Toolbar style={{ background: '#44A', display: 'flex', flex: 1 }}>
      <Typography style={{ color: '#FAFAFA', display: 'flex', flex: 0.3 }}>
        Teste
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
    </Toolbar>
  );
}
