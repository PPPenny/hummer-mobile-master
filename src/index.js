import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DeviceName from './util/check-device';
let dom = document.getElementById('root');
dom.setAttribute("class",DeviceName);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
