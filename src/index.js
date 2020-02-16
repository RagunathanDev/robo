import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';


import App from './Container/App';
//import Robot from './Robot'; 
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { serachRobots,requestRobot } from './Reducer';
//import Cardlist from './Cardlist';

const logger=createLogger();

const rootReducers = combineReducers({ serachRobots,requestRobot})
const store=createStore(rootReducers,applyMiddleware(thunkMiddleWare ,logger));

ReactDOM.render( <Provider store={store}>
                     <App/> 
                 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
