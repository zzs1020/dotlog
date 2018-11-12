import React from 'react';
import './app.scss';
import Stories from './stories';

const App = ({ stories }) =>
    <div className="app">
        <Stories stories={stories} />
    </div>

export default App;
