import React, {FunctionComponent} from 'react';

// React.FC: React Fonction Conposant
const App: FunctionComponent = () => {
    const name: String = 'React';

    return (
        <h1>Bonjour, {name} !</h1>
    )
}

export default App;