import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const getImage = (pokemon) => pokemon.sprites && pokemon.sprites.front_default;

export default function Product({ item }) {
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  const addToCart = (pokemon) => {
    return null;
  };

  useEffect(() => {
    fetch(item.pokemon.url)
      .then((res) => res.json())
      .then(
        (response) => {
          setPokemon(response);
        },
        (err) => {
          setError(err);
        },
      );
  }, []);

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    );
  }
  return (
    <Card style={{ margin: 10, padding: 10, minWidth: 200, height: 200, display: 'flex', flex: 1, flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 0.7, justifyContent: 'center' }}>
        <img src={getImage(pokemon)} alt="texto" />
      </div>
      <Typography style={{ display: 'flex', flex: 0.1, fontSize: 12 }}>
        Nome: {pokemon.name}
      </Typography>
      <Typography style={{ display: 'flex', flex: 0.1, fontSize: 12 }}>Preço: R$ 50,00</Typography>
      <Divider />
      <Button style={{ display: 'flex', flex: 0.1 }} onClick={() => addToCart(pokemon)}>Comprar</Button>
    </Card>
  );
}
