import {
  ADD_TO_CART,
  CLEAR_CART,
  OPEN_CART,
  SET_SEARCH_RESULTS,
  SET_POKEMONS,
} from '../actions/action-types';

const initialState = {
  pokemons: [],
  cart: [],
};

// eslint-disable-next-line import/prefer-default-export
export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart, action.cart,
        ],
      };
    case CLEAR_CART:
      return {
        ...state,
        pokemons: [],
      };
    case OPEN_CART:
      return {
        ...state,
        isOpenCart: true,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    default:
      return state;
  }
};
