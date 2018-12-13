import React, {Component} from 'react'
import {AppRegistry, View, Text, StatusBar, ImageBackground, TouchableHighlight, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import store from './App/Redux/store'
import {Drawer} from './App/Components/Router'
import BackgroundGeofences from './App/Components/BackgroundGeofences'
//import App from './App/Components/AnimationTest'
//import uniqueId from 'react-native-unique-id'

const styles = StyleSheet.create({
  footerWrap: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 1
  },
  footerText: {
    color: '#FFF',
    fontSize: 23,
  }
})

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

  openDrawer() {
    console.log('OPENZZZZZZZZ')
    this.props.navigation.openDrawer()
  }

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
      //setRootViewBackgroundColor('red')
  }

  render() {

//   const DrawerButton = (props) => {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => {props.navigation.navigate('DrawerOpen')}}>
//         <Text>Open Drawer!</Text> 
//       </TouchableOpacity>
//     </View>
//   );
// };

// const main_stack_nav = StackNavigator({
//   CategoryList: {
//     screen: RecipesCategoryList,
//     navigationOptions: ({navigation}) => ({
//       title: "Category List",
//       headerLeft: <DrawerButton navigation={navigation}  />
//     }),
//   }
// });


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