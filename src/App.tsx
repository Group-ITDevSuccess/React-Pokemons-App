import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import { POKEMONS } from "./models/mock-pokemon";

// React.FC: React Fonction Conposant
const App: FunctionComponent = () => {
  // const name: String = 'React';
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div className="container">
      <h1 className="header center-align">Pokédex</h1>
      <div className="row">
        {pokemons.map(({ id, name, picture, created }) => (
          <div key={id} className="col s12 m6">
            <div className="card horizontal">
              <div className="card-image">
                <img src={picture} alt={name} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h5 className="header">{name}</h5>
                  <p>
                    <small>{created.toString()}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;

/*
import React from 'react';

export default class App extends React.Component{
    const name: string = 'React';
    render() {
        return <h1>Hello, {name}</h1>;
    }
}
*/
