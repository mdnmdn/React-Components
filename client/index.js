/**
 * Created by mdn on 08/08/16.
 */

var test = require('./test.jsx');

console.log('ok');

//test();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './test.jsx';

ReactDOM.render(<App />, document.getElementById('react-container'));

