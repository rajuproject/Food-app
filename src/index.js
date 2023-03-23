import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { stateProvider } from './components/context/StateProvider';
import { initialState } from './components/context/initialState';
import reducer from './components/context/Reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
 <stateProvider initialState = {initialState} reduder = {reducer}>
 <App />
 </stateProvider>

 </Router>
   
  
);


