import {
  ADD_TO_CART,
  CLEAR_CART,
  OPEN_CART,
  SET_SEARCH_RESULTS,
  SET_POKEMONS
} from './action-types';

export const addToCart = (value) => ({
  type: ADD_TO_CART,
  cart: value,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const openCart = () => ({
  type: OPEN_CART,
});

export const setSearchResults = (value) => {
  return ({
    type: SET_SEARCH_RESULTS,
    searchTerm: value,
  });
};

export const setPokemons = (value) => ({
  type: SET_POKEMONS,
  pokemons: value,
});
