import React from 'react';
import PropTypes from 'prop-types';


const HelloWorld = ({ message }) => {

    const element = <h1>{message}</h1>;
    return element;
};

HelloWorld.propTypes = {
    message: PropTypes.string.isRequired
};

export default HelloWorld;
