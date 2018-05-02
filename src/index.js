import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
