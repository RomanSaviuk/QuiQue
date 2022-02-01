import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CreateQueue } from './components/CreateQueue';
import { MyQueues } from './components/MyQueues';
import { About } from './components/About';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/createqueue' component={CreateQueue} />
        <Route path='/myqueues' component={MyQueues} />
        <Route path='/about' component={About} />
      </Layout>
    );
  }
}