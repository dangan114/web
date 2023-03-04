import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css';
//import 'antd/dist/antd.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
