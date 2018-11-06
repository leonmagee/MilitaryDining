import React, {Component} from 'react'
import { Icon } from 'react-native-elements'
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import api from '../Utils/api'


let {width, height} = Dimensions.get('window')
height = height - 50; // make space for bottom menu bar

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null, // allows centering of content with image - otherwise image width is imported
    height: null
  },
  logoImageWrap: {
    flex: 1,
    width: width,
    height: height,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 4000,
  },
  logoImage: {
    width: width - 50,
    height: width - 50,
  },
  mainOuterWrap: {
    flex: 1,
    width: width
  },
  homeWrapOuter: {
    flex: 1
  },
  homeWrap: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'transparent'
  },
});

class Homepage extends Component {

  constructor(props) {
    super(props)
  }

  // componentDidMount() {

  //     api.testPostRequest().then((res) => {

  //         console.log('Post to local testing xxxx')
  //         console.log(res) 
  //       })
  // }

  render() {

    return (
      <View style={styles.mainOuterWrap}>
         <View style={styles.homeWrapOuter}>
          <View style={styles.homeWrap}>
            <Image source={require('../Assets/Images/justin-tacos.png')} style={styles.imageContainer}></Image>
            <View style={styles.logoImageWrap}>
              <Image source={require('../Assets/Images/military-dining-logo-new.png')} style={styles.logoImage}></Image>
            </View>
          </View>
         </View>
       </View>
    )
  }
}

module.exports = Homepage
