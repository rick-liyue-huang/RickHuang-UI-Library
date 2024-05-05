import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMousePosition } from './hooks/useMousePosition';

function App() {
    const position = useMousePosition();
    return (
        <div className="App">
        <p className='text-3xl font-bold underline'>{position.x} - {position.y}</p>
        </div>
    );
}

export default App;
