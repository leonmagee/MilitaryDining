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

  componentDidMount() {

    // const monthNames = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"
    // ]

    // const d = new Date()

    // console.log("The current month is " + monthNames[d.getMonth()])



    // const currentDate = new Date()

    // const currentDay = currentDate.getDate()
    
    // const currentMonth = currentDate.getMonth()

    // const currentYear = currentDate.getFullYear()

    // console.log(currentDay + ' - ' + currentMonth + ' ' + currentYear)



      // api.getRatings().then((res) => {

      //     console.log('testing ratings endpoint')

      //     console.log('mess hall 70 rating: ' + res[70])
      //     //console.log(res) 
      //   })
    }

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