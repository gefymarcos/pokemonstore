import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import './product.css';
import { connect, useDispatch } from 'react-redux';
import { addToCart } from '../../actions/pokemon-actions';
import formatCurrency from '../../utils/number';

const getImage = (pokemon) => pokemon.sprites && pokemon.sprites.front_default;

function Product({ item }) {
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(item.pokemon);
  const [image, setImage] = useState(item.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then(
        (response) => {
          pokemon.image = response.sprites.front_default;
          setImage(pokemon.image);
          setPokemon(pokemon);
        },
      );
  });

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    );
  }
  return (
    <Card className="product-container">
      <div className="product-image">
        <img src={image} alt={pokemon.name} />
      </div>
      <Typography className="product-name">
        {pokemon.name}
      </Typography>
      <Divider />
      <Typography className="product-price">
        {formatCurrency(pokemon.price)}
      </Typography>
      <Button
        className="product-button"
        onClick={() => dispatch(addToCart(pokemon))}
      >
        Comprar
      </Button>
    </Card>
  );
}

function mapStateToProps(state) {
  const { pokemonState } = state;
  return {
    pokemons: pokemonState.pokemons,
    searchTerm: pokemonState.searchTerm,
  };
}

export default React.memo(connect(mapStateToProps)(Product));
