import React, {FunctionComponent, useState} from 'react';

// React.FC: React Fonction Conposant
const App: FunctionComponent = () => {
    // const name: String = 'React';
    const [name, setName] = useState('React JS');

    return (
        <h1>Bonjour, {name} !</h1>
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