// Importing of a module
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherWidget from './react.weather.component.js';

class App extends Component {
    render() {
        return (
            <div>
            <AppHeader />
            <WeatherWidget />
            </div>
        );
    }
} 

class AppHeader extends Component {
    render() {
        return (
            <h1>ES6 Webpack React starter kit</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));