import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import './scss/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
