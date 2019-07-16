import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange (e) {{
        this.setState({temperature: e.target.value});
    }}

    render () {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

function BoilingVerdict (props) {
    if (props.celsius >= 100) {
        return <p>The Water would boil.</p>;
    }

    return <p>The Water would not boil.</p>;
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 /9;
}

function tpFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator;