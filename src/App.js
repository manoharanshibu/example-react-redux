import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';
import {store} from './store/index';

import Counter from './components/Counter.jsx';

import { connect } from 'react-redux';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Counter style={{width: '500px'}} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
