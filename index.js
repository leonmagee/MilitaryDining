import React, {Component} from 'react'
import {AppRegistry, View, Text, StatusBar, ImageBackground, Modal, TouchableHighlight, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import store from './App/Redux/store'
import Tabs from './App/Components/Router'
import BackgroundGeofences from './App/Components/BackgroundGeofences'
//import RankStats from './App/Components/RankStats'
//import App from './App/Components/AnimationTest'
//import uniqueId from 'react-native-unique-id'

// const styles = StyleSheet.create({
//   modalWrap: {
//     backgroundColor: '#222',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1
//   },
//   modalText: {
//     color: '#FFF'
//   }
// })

export default class MilitaryDining extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     modalVisible: true,
  //   }
  // }



  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible});
  // }

  componentDidMount() {

      //const uniqueId = require('react-native-unique-id')
   
      // uniqueId()
      //   .then(id => console.log(id))
      //   .catch(error => console.error(error))
       
      // or callback style
      // uniqueId((error, id) => {
      //   if (error) return console.error(error)
      //   console.log(id)
      // })
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
          <Tabs/>
          </ImageBackground>
          <BackgroundGeofences/>
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MilitaryDining', () => MilitaryDining);            