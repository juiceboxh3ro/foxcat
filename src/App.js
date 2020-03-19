import React from 'react';
import { Route, Link } from 'react-router-dom';

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

        <Route exact path='/'>
          <h1 className="jpn">猫か狐か、どちらかを選びなさいませ。</h1>
          <section id="nav-butts">
            <Link to="catfacts"><button className="nav-butt">猫</button></Link>
            <Link to="fox"><button className="nav-butt">狐</button></Link>
          </section>
        </Route>
        
        <Route path='/catfacts'>
          <Nav />
          <h1>Cat facts</h1>
          <FactsForm />
        </Route>

        <Route path='/fox'>
          <Nav />
          <Fox />
        </Route>
      </div>
    </Provider>
  );
}