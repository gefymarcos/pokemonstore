import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';

export const Reducers = combineReducers({ pokemonState: pokemonReducer });
