import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
import Homepage from './App/Components/Homepage'
import Foo from './App/Components/BackgroundGeolocationTest' //testing react-native-background-geolocation
//import MessHalls from './App/Components/MessHalls'
//import GeolocationExample from './App/Components/GeolocationTest'
//import MapSearch from './App/Components/MapSearch'
//import TestPage from './App/Components/TestPage'

export default class MilitaryDining extends Component {

  render() {
    return (
      <Provider store={store}>
        <View>
          <Homepage/>
          <Foo/>
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MilitaryDining', () => MilitaryDining);
