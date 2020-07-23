import React, { useState, useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import './toolbar.css';
import IconCart from '../IconCart/iconCart';
import useDebounce from '../../utils/debounce';
import { setSearchResults } from '../../actions/pokemon-actions';

export default function AppBar({ themeColor, icon }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsError(false);
  };

  useEffect(
    () => {
      dispatch(setSearchResults(debouncedSearchTerm));
    },
    [debouncedSearchTerm],
  );

  return (
    <Toolbar style={{ background: themeColor }} className="toolbar-container">
      <Typography className="toolbar-title">
        <img src={icon} className="toolbar-icon" alt="icone do tipo escolhido" />
      </Typography>
      <div className="toolbar-search">
        <Input
          placeholder="Pesquisar..."
          disableUnderline={false}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="toolbar-search-input"
        />
      </div>
      <IconCart
        className="toolbar-cart-icon"
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={!!isError}
        onClose={() => {}}
        message="Pokemon não encontrado"
        autoHideDuration={60}
        key='verticalhorizontal'
        action={
          (
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          )
        }
      />
    </Toolbar>
  );
}
