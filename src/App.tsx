import React, {FunctionComponent, useState, useEffect} from 'react';
import Pokemon from './models/pokemon';
import { POKEMONS } from './models/mock-pokemon';

// React.FC: React Fonction Conposant
const App: FunctionComponent = () => {
    // const name: String = 'React';
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(()=>{
        setPokemons(POKEMONS);
    },[]);

    return (
        <div>
            <h1>Pokédex</h1>
            <p>Il y a, {pokemons.length} pokemon{ (pokemons.length > 1) ? 's ' : ' '}!</p>
            <div>
                <ul>
                    {
                        pokemons.map((pokemon) => (
                            <li key={pokemon.id}>{pokemon.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
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