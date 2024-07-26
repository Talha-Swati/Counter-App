import React from 'react';
import '../styles/global.scss'; // Adjust path according to your structure
import Weather from '../../src/components/Weather'

const App = () => {
    return (
        <div className="App">
         <Weather/>
        </div>
    );
};

export default App;
