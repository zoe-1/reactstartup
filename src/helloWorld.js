import React from 'react';
import PropTypes from 'prop-types';


const HelloWorld = ({ message }) => {

    const element = (
        <div>
            <h1 style={Styles.h1}>{message}</h1>
            <h3 style={Styles.h3}><b>sample react</b></h3>
            <ul style={Styles.ul}>
                <li>webpack rollup </li>
                <li>loads custom fonts -- jura, volkhov</li>
                <li>loads stylus css</li>
                <li>lab, code, and enzyme for tests</li>
                <li>linting configured with hapi style guide with jsx</li>
            </ul>
        </div>
    );

    return element;
};

HelloWorld.propTypes = {
    message: PropTypes.string.isRequired
};

const Styles = {
    h1: {
        'fontFamily': 'jura-bold, sans-serif',
        'color': '#09409d',
        'font-size': '64px'
    },
    h3: {
        'fontFamily': 'jura-bold, sans-serif',
        'color': '#09409d',
        'font-size': '44px'
    },
    ul: {
        'fontFamily': 'volkhov-bold',
        'color': '#076ce2',
        'font-size': '24px'
    }
};


export default HelloWorld;
