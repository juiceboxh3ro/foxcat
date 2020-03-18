import React from 'react';
import { Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { factReducer as reducer } from './reducers/FactReducer';

import FactsForm from './components/FactsForm'
import Fox from './components/Fox'
import Nav from './components/Nav'

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />

        <Route exact path='/'>
          <h1 className="jpn">猫か狐か、どちらかを選びなさいませ。</h1>
        </Route>
        
        <Route path='/catfacts'>
          <h1>Cat facts</h1>
          <FactsForm />
        </Route>

        <Route path='/fox'>
          <Fox />
        </Route>
      </div>
    </Provider>
  );
}