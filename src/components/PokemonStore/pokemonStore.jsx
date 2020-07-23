import React, { useState, useEffect } from 'react';
import 'fontsource-roboto';
import { useDispatch, connect } from 'react-redux';
import './pokemonStore.css';
import Toolbar from '../Toolbar/toolbar';
import Product from '../Product/product';
import Cart from '../Cart/cart';
import { setPokemons } from '../../actions/pokemon-actions';

const typeURL = 'https://pokeapi.co/api/v2/type';

function PokemonStore({
  pokemons,
  type,
  themeColor,
  icon,
  searchTerm,
}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${typeURL}/${type}?limit=50&offset=0`)
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          dispatch(setPokemons(response.pokemon));
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        },
      );
  }, []);

  const filterByTerm = ({ pokemon }) => {
    return pokemon.name.includes(searchTerm);
  };

  const showPokemons = (pokemonsToShow) => pokemonsToShow && pokemonsToShow.map((item, index) => {
    item.pokemon.price = (item.pokemon.name.length * 12.7);
    return (
      <Product item={item} key={index} />
    );
  });

  useEffect(() => {
    const filtrada = pokemons.length > 1 && pokemons.filter(filterByTerm);
    setFiltered(filtrada);
  }, [searchTerm]);

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Toolbar themeColor={themeColor} icon={icon} type={type} />
      <div className="pokemon-store-container">
        { filtered ? showPokemons(filtered) : showPokemons(pokemons) }
        <Cart themeColor={themeColor} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { pokemonState } = state;
  return {
    pokemons: pokemonState.pokemons,
    searchTerm: pokemonState.searchTerm,
  };
}

export default React.memo(connect(mapStateToProps)(PokemonStore));
