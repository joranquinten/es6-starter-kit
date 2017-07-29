import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'ba25eaa59f1e74472f8f4bfaca135327';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'city': 'Veghel'
        }
    }

    componentDidMount() {
        this.getWeather(this.state.city);
    }

    getWeather(city){
        fetch(`//api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city}`)
            .then(response => response.json())
            .then(json => {
                this.setState({description: json.weather[0].description})
            })
    }

    render () {
        return (
            <div>Weather report in {this.state.city}: {this.state.description}</div>
        );
    }
}

export default WeatherWidget;