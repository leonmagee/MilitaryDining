import React, {Component} from 'react'
import {AppRegistry, View, StatusBar, ImageBackground} from 'react-native'
import {Provider} from 'react-redux'
import store from './App/Redux/store'
import {Tabs} from './App/Components/Router'
import BackgroundGeofences from './App/Components/BackgroundGeofences'

export default class MilitaryDining extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: '#222'}}>
          <StatusBar hidden />
          <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('./App/Assets/Images/camo_2.png')}
            >
          <Tabs/>
          </ImageBackground>
          <BackgroundGeofences/>
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MilitaryDining', () => MilitaryDining);            