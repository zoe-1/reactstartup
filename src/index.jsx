import React from 'react';
import ReactDOM from 'react-dom';

import './stylus/styles.styl'; // compile and load stylus styles.
import HelloWorld from './helloWorld'

ReactDOM.render(
        <HelloWorld message="Hello reactjs world!!!" />,
        document.getElementById('root')
);
