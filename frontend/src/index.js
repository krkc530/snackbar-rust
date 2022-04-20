import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import MyMenu from './components/MyMenu';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyHeader />
    <MyMenu />
    <App />
    <MyFooter />
  </BrowserRouter>
);
