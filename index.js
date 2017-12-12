import React, {Component} from 'react'
import {AppRegistry, View} from 'react-native'
import {Provider} from 'react-redux'
import store from './App/Redux/store'
import {Tabs} from './App/Components/Router'
//import BackgroundGeofences from './App/Components/BackgroundGeofences'
import GetRestData from './App/Components/GetRestData'

export default class MilitaryDining extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: '#222'}}>
          <Tabs/>
          <GetRestData/>
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MilitaryDining', () => MilitaryDining);
