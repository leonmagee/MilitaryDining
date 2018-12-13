import React, {Component} from 'react'
import {AppRegistry, View, Text, StatusBar, ImageBackground, TouchableHighlight, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import store from './App/Redux/store'
import {Drawer} from './App/Components/Router'
import BackgroundGeofences from './App/Components/BackgroundGeofences'
import SplashScreen from 'react-native-splash-screen'

const styles = StyleSheet.create({
  footerWrap: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 23,
  }
})

export default class MilitaryDining extends Component {

  componentDidMount() {
    // disable or enable this AppDelegate.m - having this active might
    // prevent debug info from showing...
    SplashScreen.hide()
  }

  render() {

    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: '#222'}}>
          <StatusBar hidden />
          <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('./App/Assets/Images/camo_2.png')}
            >
          <Drawer />
          </ImageBackground>
          <BackgroundGeofences/>
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MilitaryDining', () => MilitaryDining);            