import React, { useState } from 'react';
import 'fontsource-roboto';
import { Button, Typography } from '@material-ui/core';
import './App.css';
import PokemonStore from './components/PokemonStore/pokemonStore';

const dragon = require('./assets/dragon.png');
const water = require('./assets/water.png');
const fire = require('./assets/fire.png');
const eletric = require('./assets/eletric.png');

const DRAGON = 16;
const WATER = 11;
const FIRE = 10;
const ELETRIC = 13;

export default function App() {
  const [storeType, setStoreType] = useState();

  switch (storeType) {
    case 'dragon':
      return <PokemonStore type={DRAGON} themeColor="#DAA520" icon={dragon} />;
    case 'water':
      return <PokemonStore type={WATER} themeColor="#D4F1F9" icon={water} />;
    case 'fire':
      return <PokemonStore type={FIRE} themeColor="#E25822" icon={fire} />;
    case 'eletric':
      return <PokemonStore type={ELETRIC} themeColor="#DDDD33" icon={eletric} />;
    default:
      return (
        <div>
          <div className="app-container">
            <div className="app-options">
              <Button className="app-button" style={{ backgroundColor: '#DAA520' }} onClick={() => setStoreType('dragon')}>
                <img src={dragon} alt="dragão" />
                <Typography>
                  Pokemon Dragão
                </Typography>
              </Button>
              <Button className="app-button" style={{ backgroundColor: '#D4F1F9' }} onClick={() => setStoreType('water')}>
                <img src={water} alt="água" />
                <Typography>
                  Pokemon Água
                </Typography>
              </Button>
              <Button className="app-button" style={{ backgroundColor: '#E25822' }} onClick={() => setStoreType('fire')}>
                <img src={fire} alt="fogo" />
                <Typography>
                  Pokemon Fogo
                </Typography>
              </Button>
              <Button className="app-button" style={{ backgroundColor: '#DDDD33' }} onClick={() => setStoreType('eletric')}>
                <img src={eletric} alt="elétrico" />
                <Typography>
                  Pokemon Elétrico
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      );
  }
}
