import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
import Homepage from './App/Components/Homepage'

export default class MilitaryDining extends Component {

  render() {
    return (
      <Provider store={store}>
          <Homepage />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MilitaryDining', () => MilitaryDining);
