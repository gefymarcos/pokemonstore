import React, { useState, useEffect } from 'react';
import 'fontsource-roboto';
import Toolbar from '../Toolbar/toolbar';
import Product from '../Product/product';
import Cart from '../Cart/cart';

const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0';
const typeURL = 'https://pokeapi.co/api/v2/type';

function PokemonStore({ type, themeColor, icon }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${typeURL}/${type}`)
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setItems(response.pokemon);
        },
        (err) => {
          setIsLoaded(true);
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
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Toolbar themeColor={themeColor} icon={icon} />
      <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
        {items && items.map((item, index) => (
          <Product item={item} key={index} />
        ))}
        <Cart />
      </div>
    </div>
  );
}

export default PokemonStore;
