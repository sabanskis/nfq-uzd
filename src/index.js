import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data/data';
import data2 from './data/data2';


///duomenu padavimas
ReactDOM.render(<App data={data} data2={data2} />, document.getElementById('root'));
registerServiceWorker();
