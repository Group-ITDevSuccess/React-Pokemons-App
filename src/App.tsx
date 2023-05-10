import React, {FunctionComponent} from 'react';

// React.FC: React Fonction Conposant
const App: FunctionComponent = () => {
    const name: String = 'React';

    return (
        <h1>Bonjour, {name} !</h1>
    )
}

export default App;

/*
import React from 'react';

export default class App extends React.Component{
    const name: string = 'React';

    render(): React.ReactNode {
        return <h1>Hello, {name}</h1>;
    }
}
*/