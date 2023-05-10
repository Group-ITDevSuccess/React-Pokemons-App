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
        <h1>Il y a, {pokemons.length} !</h1>
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