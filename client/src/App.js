import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';




class App extends Component {
  render() { //Renders main client page, the provider provides a store for the components to share state with each other
    return (
      <Provider store={store}> 
        <div className="App"> 
          <AppNavbar/>
          <ShoppingList/>
        </div>
      </Provider>
    );
  }
}

export default App;
